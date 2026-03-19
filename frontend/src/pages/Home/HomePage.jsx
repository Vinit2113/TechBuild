import Header from "../../layouts/Headers/Header"
import NavBar from "../../layouts/Navbar/NavBar"
import "./home.css"

const HomePage = () => {
  return (
    <>
      {/* HEADER */}
      < Header />

      {/* NAVBAR */}
      < NavBar />

      <main>
        <section>
          <div className="hero-split-section">
            <div className="left-container">
              <div className="left-sub-cont-1">
                <div className="capsule">
                  <i className="ri-circle-fill"></i>
                  <h3>New Arrival</h3>
                </div>
              </div>

              <div className="left-sub-cont-2">
                <h2 className="first-text">
                  Next-Gen <br /> Performance.
                </h2>
                <h2 className="second-text">
                  <span>RTX 4090 series.</span>
                </h2>
              </div>

              <div className="left-sub-cont-3">
                <p>
                  Experience the ultimate gaming performance with the RTX 4090
                  series. Powered by NVIDIA's latest architecture, these graphics
                  cards deliver unparalleled speed and realism for an immersive
                  gaming experience.
                </p>
              </div>

              <div className="left-sub-cont-4">
                <button className="btn-1">
                  <span>Shop Series 4000</span>
                  <i className="ri-arrow-right-long-line btn-icon"></i>
                </button>
                <button className="btn-2">
                  <i className="ri-tools-line btn-icon"></i>
                  <span>Start Custom Build</span>
                </button>
              </div>
            </div>

            <div className="right-container">
              <img src="./images/hero-section-img.png" alt="img" />
            </div>
          </div>
        </section>

        {/* Category Section */}
        <section>
          <div className="category-section">
            <div className="category-header-container">
              <ul>
                <li>
                  <a href="#" className="category-link">
                    <div className="category-link-icon-container">
                      <i className="ri-shapes-line"></i>
                    </div>
                    <span>Shop by Category</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="view-all">
                    View all
                  </a>
                </li>
              </ul>
            </div>

            <div className="category-card-container">
              <div className="card-container">
                <div className="card-img">
                  <img src="./images/category-product.png" alt="img" />
                </div>
                <div className="card-title">
                  <h3>Processor</h3>
                </div>
                <div className="card-desc">
                  <p>High-performance processors for demanding applications.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Highlight */}
        <section>
          <div className="product-highlight-banner-section">
            <div className="blur-effect"></div>

            <div className="product-highlight-banner-container">
              <div className="left-container">
                <h2>Samsung 990 PRO 2TB NVMe SSD</h2>
                <p>
                  Blistering speeds, superior power efficiency. The ultimate SSD
                  for gamers.
                </p>

                <p>
                  <span>₹</span>
                  <span>12,999</span>
                </p>

                <button className="add-to-cart-button">
                  <i className="ri-shopping-cart-line"></i> Add to Cart
                </button>
              </div>

              <div className="right-container">
                <img
                  src="./images/product-highlight-banner-img.png"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Hardware */}
        <section>
          <div className="featured-hardware-section">
            <h2>Featured Hardware</h2>

            <div className="hardware-card">
              <img src="./images/featured-hardware-img.png" alt="img" />
              <h3>Processor</h3>
              <p>Intel Core i9-13900K</p>
              <p>₹12,999</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="custom-pc-cta-section">
            <div className="cta-content-container">
              <img src="./images/custom-pc-cta-img.png" alt="img" />
              <p>Not Sure Where To Start?</p>
              <button className="build-your-pc-button">
                Start Custom Build
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-container">
          <h2>TechBuild</h2>
          <p>The ultimate destination for PC enthusiasts.</p>
        </div>
      </footer>
    </>)
}

export default HomePage