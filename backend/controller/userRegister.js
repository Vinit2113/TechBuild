const { poolConn } = require("../db/dbConfig");
const argon2 = require("argon2");
const generateToken = require("../utils/generateToken");
const ROLES = require("../constants/rolesConstants");

const registerUser = async (req, res) => {
  try {
    const { first_name, last_name, email, phone, password, is_verified, role } =
      req.body;

    console.log(first_name);

    // INPUT VALIDATION
    if (!first_name || !last_name || !email || !password) {
      return res.status(400).json({ message: "All fields required!" });
    }

    // CHECK IF USER EXISTS OR NOT
    // SEPERATE CHECKIFN BASED ON EMAIL AND PHONE BECAUSE If one matches but the other doesn’t.

    const [existingEmail] = await poolConn.execute(
      `SELECT email FROM techbuild.users WHERE email = ? AND soft_delete = FALSE`,
      [email],
    );
    let existingPhone = [];
    if (phone) {
      [existingPhone] = await poolConn.execute(
        "SELECT email FROM techbuild.users WHERE phone = ? AND soft_delete = FALSE",
        [phone],
      );
    }

    if (existingEmail.length > 0 || existingPhone.length > 0) {
      return res
        .status(409)
        .json({ message: "User already exists. Try log-in !" });
    }

    // SET DEFAULT ROLE TO USER

    const userRole =
      role && Object.values(ROLES).includes(role) ? role : "user"; // IT CHECK IF ROLE ENTER BY THE USER HAS HAS WHICH ROLE ADMIN OR UER IF ADMIN THEN STORE ROLE ELSE STORE USER

    // Password Hashing
    const hashedPassword = await argon2.hash(password, {
      type: argon2.argon2id, // Use Argon2id
      memoryCost: 2 ** 16, // 64 MB memory will be used by the algorithm during hash
      timeCost: 3, // iterations , it runs the memroy cost 3 times
      parallelism: 4, // threads, will be use 4 time when the hashing is in procecss
    });

    // JWT TOKEN BEFORE STORING IN DATABASE

    // CREATING USER
    const [result] = await poolConn.execute(
      `
      INSERT INTO techbuild.users(first_name, last_name, email, phone, password, is_verified, role) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        first_name,
        last_name,
        email,
        phone,
        hashedPassword,
        is_verified || false,
        userRole,
      ],
    );

    const newUser = { id: result.insertId, email, role: userRole };
    const token = generateToken(newUser);

    // console.log(result);

    return res
      .status(201)
      .json({ message: "User created successfully", token });
  } catch (error) {
    console.log(error);

    return res.status(500).json({ message: "INTERNAL SERVER ERROR " });
  }
};

module.exports = registerUser;
