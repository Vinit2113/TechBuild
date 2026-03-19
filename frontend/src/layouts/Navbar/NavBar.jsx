import "./navbar.css"

const NavBar = () => {
  return (
    <>
      <nav className="nav">
        <ul>
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
        </ul>
      </nav>

    </>
  )
}

export default NavBar