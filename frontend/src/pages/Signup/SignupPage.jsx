import axios from 'axios';
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import bg_video from "../../assets/signup_bg_video.mp4";
// frontend\src\assets\gfx - video - background.mp4
import "./signup.css";

const SignupPage = () => {

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
    TnC: false,

  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:54807/user/register`, formData, {

        headers: {
          "Content-Type": "application/json",
        }
      })
      console.log(response.data);

      if (response.data.token) {
        localStorage.setItem("token", response.data.token)
      }

      toast.success("Signup successfully")

    } catch (error) {
      console.log("Error", error.response?.data || error.message);

      toast.error(error.response?.data?.message || "Signup failed");
    }
  };

  console.log(formData);
  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  return (
    <>
      <ToastContainer />
      <div className="body-wrapper">
        <video autoPlay muted loop className="bg-video">
          <source
            src={bg_video}
            type="video/mp4"
          />
        </video>

        <div className="container">
          <form onSubmit={handleSubmit}>
            <h1 className="signup-title">Sign Up Now</h1>

            {/* FIRST NAME */}
            <div className="input-split-box">
              <div className="split-field">
                <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} required className="textbox" placeholder=" " />
                <label>First name</label>
              </div>

              {/* LAST NAME */}
              <div className="split-field">
                <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} required className="textbox" placeholder=" " />
                <label>Last name</label>
              </div>
            </div>

            {/* EMAIL */}
            <div className="input-box">
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className="textbox" placeholder=" " />
              <label>Email</label>
            </div>

            {/* PHONE */}
            <div className="input-box">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="textbox"
                placeholder=" "
              />
              <label>Phone number</label>
            </div>

            {/* PASSWORD */}
            <div className="input-box">
              <input type="password" name="password" value={formData.password} onChange={handleChange} className="textbox" placeholder=" " />
              <label>Password</label>
            </div>

            {/* <p className="password-hint">
            use at least 8 or more characters with mix of letters, numbers &
            symbols
            </p> */}

            {/* T&C */}
            <div className="checkbox-box">
              <input type="checkbox" name="TnC" onChange={handleChange} />
              <p className="para">
                By creating an account, I agree to the{" "}
                <a href="#">Terms of use</a> and{" "}
                <a href="#">privacy policy</a>
              </p>
            </div>

            <div className="btn-box">
              <button type="submit" className="signup-btn">
                Sign up
              </button>
            </div>

            <div className="link-box">
              <p>
                Already have an account? <a href="#">Login</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupPage;