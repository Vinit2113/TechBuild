// import './checkoutcartDesign.css'

import { useState } from "react";

const CheckOutCartSummary = ({ cartItems, totals, shipping }) => {
  const totalWithShipping = totals.total + shipping.cost;
    // === STATES ===
    const [items, setItems] = useState([
      { id: 1, name: "Item 1", qty: 1, unitPrice: 50000 },
      { id: 2, name: "Item 2", qty: 2, unitPrice: 100000 },
    ]);
    const [activePayment, setActivePayment] = useState(null);
    const [upiApp, setUpiApp] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [processingOrder, setProcessingOrder] = useState(false);

    const discount = 1300;
    const taxRate = 0.085;


    // === CALCULATIONS ===
    const subtotal = items.reduce((acc, item) => acc + item.qty * item.unitPrice, 0);
    const taxAmount = Math.round(subtotal * taxRate);
    const grandTotal = subtotal + taxAmount + shipping - discount;


    // === PAYMENT HANDLERS ===
    const handlePaymentRowClick = (method) => {
      setActivePayment((prev) => (prev === method ? null : method));
    };

    const handleUpiChange = (e) => {
      setUpiApp(e.target.value);
    };

    const handleCardInput = (e) => {
      setCardNumber(e.target.value);
    };

    const handlePlaceOrder = () => {
      setProcessingOrder(true);
      setTimeout(() => {
        window.location.href = "./order-confirmation.html";
      }, 1500);
    };

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

              {/* UPI Payment */}
              <div className={`payment-row ${activePayment === "upi" ? "active" : ""}`}>
                <label className="row-header" onClick={() => handlePaymentRowClick("upi")}>
                  <div className="row-info">
                    <i className="ri-flashlight-fill upi-icon"></i>
                    <span className="method-title">UPI</span>
                  </div>
                  <i className="ri-arrow-down-s-line dropdown-icon"></i>
                </label>
                {activePayment === "upi" && (
                  <div className="row-content">
                    <p className="content-desc">Choose an option</p>
                    <select className="payment-dropdown" value={upiApp} onChange={handleUpiChange}>
                      <option value="" disabled>
                        Select UPI App
                      </option>
                      <option value="phonepe">PhonePe</option>
                      <option value="gpay">Google Pay</option>
                    </select>
                    <button
                      className="btn-pay-secure"
                      disabled={!upiApp}
                      style={{ opacity: upiApp ? 1 : 0.5, cursor: upiApp ? "pointer" : "not-allowed" }}
                    >
                      {grandTotal.toLocaleString("en-IN", { style: "currency", currency: "INR" })} via {upiApp}
                    </button>
                  </div>
                )}
              </div>

              {/* Card Payment */}
              <div className={`payment-row ${activePayment === "card" ? "active" : ""}`}>
                <label className="row-header" onClick={() => handlePaymentRowClick("card")}>
                  <div className="row-info">
                    <i className="ri-bank-card-line"></i>
                    <span className="method-title">Card</span>
                  </div>
                  <i className="ri-arrow-down-s-line dropdown-icon"></i>
                </label>
                {activePayment === "card" && (
                  <div className="row-content">
                    <input
                      type="text"
                      placeholder="Card Number"
                      className="form-input"
                      value={cardNumber}
                      onChange={handleCardInput}
                    />
                    <button
                      className="btn-pay-secure"
                      disabled={cardNumber.length < 12}
                      style={{
                        opacity: cardNumber.length >= 12 ? 1 : 0.5,
                        cursor: cardNumber.length >= 12 ? "pointer" : "not-allowed",
                      }}
                    >
                      {grandTotal.toLocaleString("en-IN", { style: "currency", currency: "INR" })}
                    </button>
                  </div>
                )}
              </div>

              {/* COD Payment */}
              <div className={`payment-row cod-row ${activePayment === "cod" ? "active" : ""}`}>
                <label className="row-header" onClick={() => handlePaymentRowClick("cod")}>
                  <input type="radio" name="payment-group" checked={activePayment === "cod"} readOnly />
                  <div className="row-info">
                    <i className="ri-hand-coin-line"></i>
                    <span className="method-title">Cash on Delivery</span>
                  </div>
                </label>
                {activePayment === "cod" && (
                  <div className="row-content">
                    <button
                      className="btn-confirm-order"
                      onClick={handlePlaceOrder}
                      disabled={processingOrder}
                      style={{
                        opacity: processingOrder ? 0.7 : 1,
                        cursor: processingOrder ? "not-allowed" : "pointer",
                      }}
                    >
                      {processingOrder ? "Processing Order..." : "PLACE ORDER"}
                    </button>
                  </div>
                )}
              </div>

              {/* Example for adjusting shipping */}
          

              {/* Display Totals */}
             
            </div>
          </div>
        </aside>

      </>
    )
  }

  export default CheckOutCartSummary