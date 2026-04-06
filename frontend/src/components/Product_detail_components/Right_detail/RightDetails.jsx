import './rightdetaildesign.css';

const RightDetails = ({ product }) => {
  console.log(product);


  if (!product) return <p>Loading...</p>

  return (
    <>
      <div className="product-info-container">
        <div className="product-desc">
          <p>{product.product_name}, {product.short_description}
            {product.full_description}
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
          <span className="original-price">₹{product.original_price}</span>
          <div className="current-price-row">
            <span className="discounted-price">₹{product.current_price}</span>
            <span className="discount-badge">{product.discount_percentage}% OFF</span>
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