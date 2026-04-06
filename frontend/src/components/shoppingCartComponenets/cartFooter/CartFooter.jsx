import './cartFooterDesign.css'

const CartFooter = () => {
  return (
    <>
      <div className="trust-strip">
        <div className="trust-item">
          <div className="trust-item-icon">
            <i className="ri-box-3-line"></i>
          </div>
          <div className="trust-item-text">
            <h3>Free Shipping</h3>
            <p>On all orders over ₹6,000</p>
          </div>
        </div>

        <div className="trust-item">
          <div className="trust-item-icon">
            <i className="ri-verified-badge-line"></i>
          </div>
          <div className="trust-item-text">
            <h3>Secure Payment</h3>
            <p>100% secure transaction</p>
          </div>
        </div>

        <div className="trust-item">
          <div className="trust-item-icon">
            <i className="ri-customer-service-2-line"></i>
          </div>
          <div className="trust-item-text">
            <h3>24/7 Support</h3>
            <p>Expert help when you need it</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartFooter