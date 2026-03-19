import { BsCart3 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";



import { useNavigate } from 'react-router';

import logo from '../../assets/logo/logo.png';
import './header.css';

const Header = () => {
  const navigate = useNavigate()

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
            <button>
              <div className="inner-btn-cont-1">
                <img src="./images/screw-driver.png" alt="" />
              </div>
              <div className="inner-btn-cont-2">
                <span className="pc-build">Build Your PC</span>
              </div>
            </button>
            <div className="header-icon-style">
              <BsCart3 />
            </div>
            <div
              className="header-icon-style"
              onClick={() => navigate("/login")}
            >
              <FaRegUser />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header

// PENDING THE USER'S PROIFLE LIKE IF USER LOGGED IN SHOW NAME ELSE SHOW LOGIN OR SIGNUP LINK