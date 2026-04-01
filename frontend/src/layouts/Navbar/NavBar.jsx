import axios from 'axios';
import { useEffect, useState } from "react";
import SideBar from '../Sidbar/Sidebar';
import "./navbar.css";

const NavBar = () => {
  const [navCategories, setNavCategories] = useState([]);
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  // FETCH MAIN CATEGORIES
  useEffect(() => {
    const fetchNavCat = async () => {
      try {
        const response = await axios.get(`http://localhost:54807/nav-cat/list`);
        setNavCategories(response.data.data);
      } catch (error) {
        console.error("Failed to fetch categories", error);
      }
    };
    fetchNavCat();
  }, []);

  

  return (
    <>
      <nav className="nav">
        <ul>
          {navCategories.map(category => (
            <li key={category.nav_cat_id}>
              <a
                href="#"
                className="navlink"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveCategory(category);
                  setIsSliderOpen(true);
                }}
              >
                <i className={`${category.nav_cat_icon} nav-icon`}></i>
                {category.nav_cat_name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <SideBar
        isOpen={isSliderOpen}
        onClose={() => setIsSliderOpen(false)}
        category={activeCategory}
      />
    </>
  );
};

export default NavBar;