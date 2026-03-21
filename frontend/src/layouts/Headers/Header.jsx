import { BsCart3 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

import screwDriverImg from '../../assets/screw-driver.png';



import { useNavigate } from 'react-router';

import logo from '../../assets/logo/logo.png';
import './header.css';

const Header = () => {
  const navigate = useNavigate()


  // GET THE SUER NAME FORM TOKEN CONVERT IT TO JSON OBJECT THEN DISPLAY
  const user = JSON.parse(localStorage.getItem("user"))
  console.log("User object: ", user);

  // TO DISPALY THE NAME IN THE PROPER FORMAT
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);


  return (
    <>
      <header>
        <div className="header-container">
          <div className="inner-container-1">
            <a href="#" className="logo-container">
              <div className="logo-img-container">
                <img src={logo} alt="logo" />
              </div>
              <h2>TechBuild</h2>
            </a>
          </div>

          <div className="inner-container-2">
            <input
              type="text"
              placeholder="Search for CPUs, GPUs, or Components"
            />
            <button className="button-search">
              <IoSearchOutline className="search-icon" />
            </button>
          </div>

          <div className="inner-container-3">
            <button className="inner-container-3-button">
              <div className="inner-btn-cont-1">
                <img src={screwDriverImg} alt="" />
              </div>
              <div className="inner-btn-cont-2">
                <span className="pc-build">Build Your PC</span>
              </div>
            </button>
            <div className="header-icon-style">
              <BsCart3 />
            </div>
            {user ? (
              <div
                className="header-user"
                onClick={() => navigate("/profile")}
              >
                <span className="username-shown"> Hello, {capitalize(user.firstName) ? `${capitalize(user.firstName)} ${capitalize(user.lastName)}` : "My Profile"}
                </span>
              </div>
            ) : (
              <div
                className="header-icon-style"
                onClick={() => navigate("/login")}
              >
                <FaRegUser />
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  )
}

export default Header

// PENDING THE USER'S PROIFLE LIKE IF USER LOGGED IN SHOW NAME ELSE SHOW LOGIN OR SIGNUP LINK