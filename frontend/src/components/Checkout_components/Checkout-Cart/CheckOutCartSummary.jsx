// import './checkoutcartDesign.css'

const CheckOutCartSummary = ({ cartItems, totals, shipping }) => {
  const totalWithShipping = totals.total + shipping.cost;

  return (
    <>

      <aside className="details-right">
        <div className="card summary-card">
          <h3>Order Summary</h3>

          <div className="sidebar-product-list">
            {cartItems.map(item => (
              <div className="sidebar-item" key={item.product_id}>
                <img src={item.product_image || '/default-image.jpg'} alt={item.product_name} />
                <div className="sidebar-item-info">
                  <h4>{item.product_name}</h4>
                  <div className="sidebar-qty-price">
                    <span className="qty-val">{item.quantity}</span>
                    <span className="sidebar-price">₹{item.item_total?.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <hr className="summary-divider" />

          <div className="price-list">
            <div className="price-row">
              <span>Subtotal</span>
              <span id="sidebar-subtotal">₹{totals.subtotal?.toLocaleString()}</span>
            </div>
            <div className="price-row">
              <span>Total Discount</span>
              <span className="text-green">-₹{totals.discount?.toLocaleString()}</span>
            </div>
            <div className="price-row">
              <p>Shipping (<span>{shipping.type}</span>)</p>
              <span id="sidebar-shipping-cost" className={shipping.cost === 0 ? "text-green" : ""}>              {shipping.cost === 0 ? "Free" : `₹${shipping.cost.toLocaleString()}`}
              </span>
            </div>
            <div className="price-row">
              <span>Tax</span>
              <span>₹{totals.gst?.toLocaleString()}</span>
            </div>


            <div className="price-row total">
              <span>Total</span>
              <span>₹{totals.total?.toLocaleString()}</span>
            </div>
          </div>

          <div className="checkout-payment-accordion">
            <h2 className="checkout-title">Payment Options</h2>

            <div className="payment-row">
              <label className="row-header">
                <div className="row-info">
                  <i className="ri-flashlight-fill upi-icon"></i>
                  <span className="method-title">UPI</span>
                </div>
                <i className="ri-arrow-down-s-line dropdown-icon"></i>
              </label>
              <div className="row-content">
                <p className="content-desc">Choose an option</p>
                <select className="payment-dropdown">
                  <option value="" disabled selected>Select UPI App</option>
                  <option value="phonepe">PhonePe</option>
                  <option value="gpay">Google Pay</option>
                </select>
                <button className="btn-pay-secure">PAY ₹2,97,000</button>
              </div>
            </div>

            <div className="payment-row">
              <label className="row-header">
                <div className="row-info">
                  <i className="ri-bank-card-line"></i>
                  <span className="method-title">Card</span>
                </div>
                <i className="ri-arrow-down-s-line dropdown-icon"></i>
              </label>
              <div className="row-content">
                <input type="text" placeholder="Card Number" className="form-input" />
                <button className="btn-pay-secure">PAY ₹2,97,000</button>
              </div>
            </div>

            <div className="payment-row cod-row">
              <label className="row-header">
                <input type="radio" name="payment-group" id="cod" />
                <div className="row-info" >
                  <i className="ri-hand-coin-line"></i>
                  <label className="method-title" id="cod">Cash on Delivery</label>
                </div>
              </label>
              <div className="row-content">
                <button className="btn-confirm-order">PLACE ORDER</button>
              </div>
            </div>
          </div>
        </div>
      </aside>

    </>
  )
}

export default CheckOutCartSummary