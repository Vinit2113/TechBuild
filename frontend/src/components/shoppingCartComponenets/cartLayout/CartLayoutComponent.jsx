import './cartlayoutdesign.css';

const CartLayoutComponent = ({ cartItems, loading, handleRemove }) => {
  if (loading) return <div>Loading cart items...</div>;

  if (cartItems.length === 0) return <p>Your cart is empty.</p>;

  return (
    <div>
      <div className="cart-header">
        <div>
          <h1>Your Cart</h1>
          <p>You have {cartItems.length} items ready for checkout</p>
        </div>
      </div>

      <div className="cart-group">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.product_id}>
            <div className="item-thumb">
              <img src={item.product_image || '/default-image.jpg'} alt={item.product_name} />
            </div>
            <div className="item-info">
              <div className="item-name">
                <p>{item.product_name}</p>
              </div>
              <div className="item-quantity">Quantity: {item.quantity}</div>
            </div>
            <div className="item-price">
              <span>₹{item.current_price.toLocaleString()}</span>
              <button className="remove-btn" onClick={() => handleRemove(item.product_id)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartLayoutComponent;