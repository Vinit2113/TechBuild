import './rightdetaildesign.css'

const RightDetails = () => {
  return (
    <>
      <div className="product-info-container">
        <div className="product-desc">
          <p>
            ZEBRONICS GT740-4GD3 Graphics Card, pci_e_x16 Powered by NVIDIA, 4GB GDDR3, 128-Bit, Pcie3.0, Upto 2560 X 1440 @60Hz, Multiple Outputs-HDMI | DVI | VGA, Physx Support, Heatsink with Fan, High Efficiency
          </p>
        </div>

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

        <div className="price-block">
          <span className="original-price">₹5,999</span>
          <div className="current-price-row">
            <span className="discounted-price">₹3,400</span>
            <span className="discount-badge">34.99% OFF</span>
          </div>
        </div>

        <div className="cart-save-container">
          <div className="cart-container">
            <button className="add-to-cart-btn">
              <span>Add to cart</span>
              <i className="ri-shopping-cart-2-line"></i>
            </button>
          </div>
          <div className="save-container">
            <button>
              <span>save</span>
              <i className="ri-poker-hearts-line"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default RightDetails