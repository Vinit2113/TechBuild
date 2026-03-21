import { useState } from 'react';
import 'remixicon/fonts/remixicon.css';
import './rightdetaildesign.css';

const RightDetails = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => {
    setQuantity(prevQty => prevQty + 1);
  };

  const decreaseQty = () => {
    setQuantity(prevQty => {
      if (prevQty <= 1) return 0; // Prevent negative
      return prevQty - 1;
    });
  };

  const isOutOfStock = quantity === 0;

  return (
    <div className="right">
      <h1 className='product-detail-title'>Intel Core i9-13900K 13th Gen Raptor Lake</h1>

      <div className="rating">
        <span className='rating-span'>
          <i className="ri-star-fill rating-span-icon"></i>
          <i className="ri-star-fill rating-span-icon"></i>
          <i className="ri-star-fill rating-span-icon"></i>
          <i className="ri-star-fill rating-span-icon"></i>
          <i className="ri-star-half-fill rating-span-icon"></i>
        </span>
        <span className='total-review'>1,245 reviews</span>
        <span className="stock">{isOutOfStock ? 'Out of Stock' : 'In Stock'}</span>
      </div>

      <div className="price">₹ 65,900</div>

      {/* SPECS */}
      <div className="spec-box">
        <p>24 Cores (8P + 16E)</p>
        <p>Up to 5.8 GHz</p>
        <p>LGA 1700 Socket</p>
        <p>125W Base Power</p>
      </div>

      {/* CART */}
      <div className="cart-row">
        <div className="qty">
          {!isOutOfStock && (
            <>
              <button className='qty-btn' onClick={decreaseQty}>-</button>
              <span className='qty-value'>{quantity}</span>
              <button className='qty-btn' onClick={increaseQty}>+</button>
            </>
          )}
          {isOutOfStock && <span className='qty-value out-of-stock'>Out of Stock</span>}
        </div>

        <button className="add-btn" disabled={isOutOfStock}>
          Add to Cart
        </button>
      </div>

      <button className="compat-btn">Check Compatibility</button>
    </div>
  );
}

export default RightDetails;  