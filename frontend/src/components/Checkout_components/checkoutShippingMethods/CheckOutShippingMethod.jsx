const CheckOutShippingMethod = ({ shipping, setShipping }) => {

  const handleChange = (e) => {
    const selected = e.target.value;
    if (selected === "0") {
      setShipping({ type: "Standard", cost: 0 });
    } else {
      setShipping({ type: "Express", cost: 1650 });
    }
  };

  return (
    <div className="shipping-method-container">
      <div className="section-header">
        <span className="step-num">2</span>
        <h3>Shipping Method</h3>
      </div>

      <div className="method-grid">
        <label className="method-card">
          <input
            type="radio"
            name="shipping-speed"
            value="0"
            checked={shipping.type === "Standard"}
            onChange={handleChange}
          />
          <div className="method-details">
            <div className="method-title-row">
              <span className="method-name">Standard</span>
              <span className="method-price">Free</span>
            </div>
            <p className="method-eta">Estimated delivery: 5-7 business days</p>
          </div>
        </label>

        <label className="method-card">
          <input
            type="radio"
            name="shipping-speed"
            value="1650"
            checked={shipping.type === "Express"}
            onChange={handleChange}
          />
          <div className="method-details">
            <div className="method-title-row">
              <span className="method-name">Express</span>
              <span className="method-price">₹1,650</span>
            </div>
            <p className="method-eta">Estimated delivery: 1-2 business days</p>
          </div>
        </label>
      </div>
    </div>
  );
};

export default CheckOutShippingMethod;