import logoImg from '../../assets/logo/logo.png'
import './footer.css'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="footer-top-container">

            <div className="brand-container">
              <div className="brand-logo">
                <img src={logoImg} alt="logo" />
                <h2>TechBuild</h2>
              </div>
              <div className="brand-content">
                <p>
                  The ultimate destination for PC enthusiasts. High-end components, peripherals, and custom builds for
                  gamers and creators.
                </p>
              </div>
            </div>

            <div className="link-container">
              <div className="link-title">
                <h3>Shop</h3>
              </div>
              <div className="link-menu">
                <ul>
                  <li><a href="#">Build your PC</a></li>
                  <li><a href="#">Processors</a></li>
                  <li><a href="#">Graphic cards</a></li>
                  <li><a href="#">Gaming Laptops</a></li>
                  <li><a href="#">Pheripherals</a></li>
                </ul>
              </div>
            </div>

            <div className="link-container">
              <div className="link-title">
                <h3>Support</h3>
              </div>
              <div className="link-menu">
                <ul>
                  <li><a href="#">Orders Status</a></li>
                  <li><a href="#">Returns & warranty</a></li>
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="#">PC Builder Guide</a></li>
                  <li><a href="#">FAQ</a></li>
                </ul>
              </div>
            </div>

            <div className="link-container">
              <div className="link-title">
                <h3>News Letters</h3>
              </div>
              <div className="offer-para-container">
                <p>Subscribe to get special offers, free giveaways, and deal</p>
              </div>

              <div className="input-field">
                <input
                  type="email"
                  name="email"
                  id="eid"
                  placeholder="john@gmail.com"
                />
                <button>Join</button>
              </div>
            </div>

          </div>

          <div className="footer-bottom-container">
            <div className="footer-link-container">
              <a href="#">Private Policies</a>
              <a href="#">Terms Of Services</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer