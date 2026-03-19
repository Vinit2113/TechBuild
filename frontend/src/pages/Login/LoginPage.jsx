import axios from 'axios';
import { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import './login.css';

const LoginPage = () => {

  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log({ email, password });
    try {
      const response = await axios.post(`http://localhost:54807/user/login`, { email, password }, {
        headers: {
          "Content-Type": "application/json",
        }
      })

      console.log("Here is response data: ", response.data);


      if (response.data.token) {
        localStorage.setItem("token", response.data.token)
      }

      toast.success("Logged in Successfully")

      setEmail("")
      setPassword("")

      navigate("/")
    } catch (error) {
      console.log("Error: ", error);
      toast.error(error)
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target; // Get the input name and value

    if (name === "email") {
      setEmail(value); // Update email state
    } else if (name === 'password') {
      setPassword(value)
    }
  }

  const togglePassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="body-wrapper">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1 className="login-title">Login</h1>

          {/* Email */}
          <div className="input-box">
            <input
              type="email"
              placeholder="Email ID"
              name='email'
              value={email}
              onChange={handleChange}
              className="email-input"
            />
            <i className="ri-user-fill input-icon"></i>
          </div>

          {/* Password */}
          <div className="input-box">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name='password'
              onChange={handleChange}
              value={password}
              className="password-input"
              id="lock_input"
            />
            <span className='' onClick={togglePassword}> {showPassword ?
              <FaRegEyeSlash class="ri-eye-close-line" id="eye-icon" /> :
              <FaRegEye class="ri-eye-close-line" id="eye-icon" />
            }
            </span>
            <i
              className="ri-lock-fill input-icon"
              id="lock_icon"
            ></i>
          </div>



          {/* Remember */}
          <div className="remember-me-forget-box">
            <div className="remember-me">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me" className="remember-label">
                Remember me
              </label>
            </div>
            <a href="#" className="forget-link">
              Forget Password?
            </a>
          </div>

          {/* Button */}
          <button className="login-btn" type="submit">
            <span className="btn-bg"></span>
            <span className="btn-text">Login</span>
          </button>

          {/* Register */}
          <div className="register-box">
            <p>
              Don't have an account?
              <span className="sign-up-link" onClick={() => navigate('/signup')}>
                Sign Up
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;