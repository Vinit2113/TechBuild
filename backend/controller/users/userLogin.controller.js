const argon2 = require("argon2");
const generateToken = require("../../utils/generateToken");
const { poolConn } = require("../../db/dbConfig");

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Input validation
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required!" });
    }

    // Find user by email only
    const [userResult] = await poolConn.execute(
      `SELECT * FROM techbuild.users WHERE email = ? AND soft_delete = false`,
      [email],
    );

    if (userResult.length === 0) {
      return res.status(401).json({ message: "Invalid credentials!" });
    }

    const user = userResult[0];

    // Verify password with argon2
    const validPassword = await argon2.verify(user.password, password);
    if (!validPassword) {
      return res.status(401).json({ message: "Invalid credentials!" });
    }

    // Create JWT token
    const token = generateToken({
      id: user.id,
      email: user.email,
      role: user.role,
    });

    return res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "INTERNAL SERVER ERROR" });
  }
};

module.exports = loginUser;
