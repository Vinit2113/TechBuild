import productImage from '../../../assets/product_list/product_filter_section_product_card_img.png'
import './productcard.css'

const ProductCard = () => {
  return (
    <>
      <div className="product-card-container">
        {[1, 2, 3, 4].map((item) => (
          <div className="card-container" key={item}>
            <div className="img-container">
              <img
                src={productImage}
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
                <p className='currency-price'>
                  <span>₹</span>
                  <span>12,000</span>
                </p>

                <div className='button-group'>
                  <button className='view-button'>View

                  </button>
                  <button className='cart-button'>
                    <i className="ri-shopping-cart-2-line header-icon"></i>
                  </button>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default ProductCard