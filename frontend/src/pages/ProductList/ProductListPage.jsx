import 'remixicon/fonts/remixicon.css';
import ProductFilters from '../../components/ProductListing/productfilters/ProductFilters';
import Footer from '../../layouts/Footers/Footer';
import Header from '../../layouts/Headers/Header';
import './productListPage.css';

const ProductListPage = () => {
  return (
    <>
      <Header />




      {/* PRODUCT LISTING SECTION */}
      <section className="product-listing">
        <div className="product-listing-container">
          {/* PRODUCT FILTERS */}
          <ProductFilters />

          {/* PRODUCT DETAILS SECTION */}
          <div className="product-details-container">
            {/* PRODUCT SORT */}
            <div className="shortlist-container">
              <div className="product-title-result-container">
                <h1>Graphics Cards</h1>
                <p>
                  Showing 1-6 of <span>124 </span> products
                </p>
              </div>

              <div className="dropdown">
                <p>Shorted by result</p>
                <select>
                  <option>Select by Featured</option>
                  <option>New Arrivals</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
                <i className="ri-arrow-down-s-line dropdown-icon"></i>
              </div>
            </div>

            {/* PRODUCT CARD LIST */}
            <div className="product-card-container">
              {[1, 2, 3, 4].map((item) => (
                <div className="card-container" key={item}>
                  <div className="img-container">
                    <img
                      src="./images/second-images/product-filter-section-product-card-img.png"
                      alt=""
                    />
                  </div>

                  {/* PRODUCT CARD */}
                  <div className="card-detail-container">
                    <div className="rating-container">
                      <div className="starts-container">
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-half-line"></i>
                      </div>
                      <div className="review-container">
                        <a href="#">250 reviews</a>
                      </div>
                    </div>

                    <div className="title-desc-container">
                      <div className="title-container">
                        <h2>AMD Ryzen 5900X</h2>
                      </div>

                      <div className="desc-container">
                        <ul>
                          <li>
                            <p className="title">Architecture:</p>
                            <p className="info">Zen 3</p>
                          </li>
                          <li>
                            <p className="title">Core/threads:</p>
                            <p className="info">12 cores / 24 Thread</p>
                          </li>
                          <li>
                            <p className="title">Cache:</p>
                            <p className="info">70MB</p>
                          </li>
                          <li>
                            <p className="title">socket:</p>
                            <p className="info">AM4</p>
                          </li>
                          <li>
                            <p className="title">Cooler:</p>
                            <p className="info">not included</p>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="rupees-cart-container">
                      <p>
                        <span>₹</span>
                        <span>12,000</span>
                      </p>

                      <button>
                        <i className="ri-shopping-cart-2-line header-icon"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PRODUCT PAGINATION */}
        <section>
          <div className="navigation-button-section">
            <div className="navigation-button-container">
              <button>
                <span>1</span>
              </button>
              <button>
                <span>2</span>
              </button>
              <button>
                <span>3</span>
              </button>
              <button>
                <span>4</span>
              </button>
              <span>....</span>
              <button>
                <span>124</span>
              </button>
            </div>
          </div>
        </section>
      </section>

      
      <Footer />
    </>
  );
};

export default ProductListPage;