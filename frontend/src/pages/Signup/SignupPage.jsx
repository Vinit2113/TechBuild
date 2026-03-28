import axios from 'axios';
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useNavigate } from 'react-router';
import { toast, ToastContainer } from "react-toastify";


import bg_video from "../../assets/signup_bg_video.mp4";

// frontend\src\assets\gfx - video - background.mp4
import "./signup.css";

const SignupPage = () => {

  const [showPassword, setShowPassword] = useState(false)

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
    TnC: false,

  })

  const navigate = useNavigate()

  // DATA SENDING TO BACKEND 
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

      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        password: "",
        TnC: false,
      });

      navigate('/')

    } catch (error) {
      console.log("Error", error.response?.data || error.message);

      toast.error(error.response?.data?.message || "Signup failed");
    }
  };

  console.log(formData);
  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;

    // State updater funciton it update the use state's data based on the user input 
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // CONST TOGGLE PASSWORD
  const togglePasword = () => {
    setShowPassword(!showPassword)
  }
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
                <label className='signup-label'>First name</label>
              </div>

              {/* LAST NAME */}
              <div className="split-field">
                <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} required className="textbox" placeholder=" " />
                <label className='signup-label'>Last name</label>
              </div>
            </div>

            {/* EMAIL */}
            <div className="input-box">
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className="textbox" placeholder=" " />
              <label className='signup-label'>Email</label>
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
              <label className='signup-label'>Phone number</label>
            </div>

            {/* PASSWORD */}
            <div className="input-box eye-container">
              <input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} className="textbox" placeholder=" " />
              <label className='signup-label'>Password</label>
              <span className='' onClick={togglePasword}> {showPassword ?
                <FaRegEyeSlash className="ri-eye-close-line" id="eye-icon" /> :
                <FaRegEye className="ri-eye-close-line" id="eye-icon" />
              }
              </span>

              <i ></i>
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
                Already have an account? <span className='nav-login' onClick={() => navigate('/login')}>Login</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupPage;