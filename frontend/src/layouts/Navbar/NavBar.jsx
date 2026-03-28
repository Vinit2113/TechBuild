import axios from 'axios';
import { useEffect, useState } from "react";
import "./navbar.css";

const NavBar = () => {
  const [navCategories, setNavCategories] = useState([]);

  useEffect(() => {
    const fetchNavCat = async () => {
      try {
        const response = await axios.get(`http://localhost:54807/nav-cat/list`);

        console.log("Here is fetched navbar category", response.data.data);

        setNavCategories(response.data.data);
      } catch (error) {
        console.log("Failed to fetch categories", error);
      }
    };
    fetchNavCat();
  }, []);

  return (
    <nav className="nav">
      <ul>
        {navCategories.map(category => (
          <li key={category.nav_cat_id}>
            <a href="#">
              <i className={`${category.nav_cat_icon} nav-icon`}></i>
              {category.nav_cat_name} {/* Fixed the typo here */}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;

{/* <ul>
          <li>
            <a href="#">
              <i className="ri-gallery-view-2 nav-icon"></i> Components
            </a>
          </li>
          <li>
            <a href="#">
              <i className="ri-device-line nav-icon"></i> Pheripherals
            </a>
          </li>
          <li>
            <a href="#">
              <i className="ri-network-line nav-icon"></i> Networking
            </a>
          </li>
          <li>
            <a href="#">
              <i className="ri-macbook-line nav-icon"></i> Laptops
            </a>
          </li>
          <li>
            <a href="#">
              <i className="ri-percent-line nav-icon"></i> Deals
            </a>
          </li>
        </ul> */}