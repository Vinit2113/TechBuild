import './cartOrderSummaryDesign.css'

const CartOrderSummary = () => {
  return (
    <>
      <div className="order-summary">
        <div className="summary-title">Order Summary</div>

        <div className="summary-row">
          <span className="summary-label">Subtotal</span>
          <span className="summary-value">₹41,300</span>
        </div>

        <div className="summary-row">
          <span className="summary-label">Shipping</span>
          <span className="summary-value free">Free</span>
        </div>

        <div className="summary-row discount-row">
          <span className="summary-label">Discount (PROMO)</span>
          <span className="summary-value discount-text">-₹1,300</span>
        </div>

        <div className="summary-row" style={{ marginBottom: 0 }}>
          <span className="summary-label">GST (18% Included)</span>
          <span className="summary-value">₹6,300</span>
        </div>

        <hr className="summary-divider" />

        <div className="total-block">
          <span className="total-label">Total</span>
          <div className="total-right">
            <div className="total-usd">Approx $480 USD</div>
            <div className="total-amount">₹40,000</div>
          </div>
        </div>

        <div className="delivery-estimate">
          <i className="ri-timer-line"></i>
          <span>
            Est. Delivery: <strong>3-5 Business Days</strong>
          </span>
        </div>

        <div className="promo-row">
          <input className="promo-input" type="text" placeholder="Promo code" />
          <button className="btn-apply">Apply</button>
        </div>

        <button className="btn-checkout">
          <i className="ri-lock-line"></i>
          Proceed to Checkout
        </button>

        <div className="trust-icons">
          <i className="ri-bank-card-line trust-icon"></i>
          <i className="ri-secure-payment-line trust-icon"></i>
          <i className="ri-shield-check-line trust-icon"></i>
        </div>
      </div>
    </>
  )
}

export default CartOrderSummary