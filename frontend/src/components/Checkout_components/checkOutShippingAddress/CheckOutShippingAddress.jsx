import axios from "axios";
import { useState } from "react";
import './checkoutshippingaddressdesign.css';

const CheckOutShippingAddress = () => {
  // Form state
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    full_address: "",
    city: "",
    state: "GU",
    postal_code: "",
    country: "India",
    is_default: false,
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    let key = id;
    if (id === "streetAddress") key = "full_address";
    if (id === "zipCode") key = "postal_code";

    setFormData({
      ...formData,
      [key]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/addresses/add", formData, {
        headers: {
          "Content-Type": "application/json",
          // Include auth token if your backend requires it
          // Authorization: `Bearer ${token}`,
        },
      });
      if (res.data.success) {
        alert("Address added successfully!");
        // Optionally reset form
        setFormData({
          first_name: "",
          last_name: "",
          full_address: "",
          city: "",
          state: "GU",
          postal_code: "",
          country: "India",
          is_default: false,
        });
      }
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Error adding address");
    }
  };

  return (
    <div className="card shipping-form-card">
      <div className="section-header">
        <div className="step-badge">1</div>
        <h3>Shipping Address</h3>
        <button className="text-link">Use Saved Address</button>
      </div>

      <form className="checkout-form" onSubmit={handleSubmit}>
        <div className="form-grid-2">
          <div className="input-group">
            <label>First Name</label>
            <input
              type="text"
              id="first_name"
              value={formData.first_name}
              onChange={handleChange}
              placeholder=""
              required
            />
          </div>
          <div className="input-group">
            <label>Last Name</label>
            <input
              type="text"
              id="last_name"
              value={formData.last_name}
              onChange={handleChange}
              placeholder="optional"
            />
          </div>
        </div>

        <div className="input-group full-width">
          <label>Address</label>
          <input
            type="text"
            id="streetAddress"
            value={formData.full_address}
            onChange={handleChange}
            placeholder="Street name and house number"
            required
          />
        </div>

        <div className="form-grid-3">
          <div className="input-group">
            <label>City</label>
            <input
              type="text"
              id="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>State</label>
            <div className="select-wrapper">
              <select
                id="state"
                value={formData.state}
                onChange={handleChange}
              >
                <option value="GU">Gujarat</option>
                <option value="DL">Delhi</option>
                <option value="MH">Maharashtra</option>
              </select>
            </div>
          </div>

          <div className="input-group">
            <label>Zip Code</label>
            <input
              type="text"
              id="zipCode"
              value={formData.postal_code}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* <div className="input-group">
          <label>
            <input
              type="checkbox"
              id="is_default"
              checked={formData.is_default}
              onChange={handleChange}
            />{" "}
            Set as default address
          </label>
        </div>

        <button type="submit" className="btn-primary">
          Save Address
        </button> */}
      </form>
    </div>
  );
};

export default CheckOutShippingAddress;