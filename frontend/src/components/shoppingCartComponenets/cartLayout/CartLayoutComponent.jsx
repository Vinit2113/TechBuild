import './cartlayoutdesign.css'

const CartLayoutComponent = () => {
  return (
    <>
    <div>
      <div className="cart-header">
        <div>
          <h1>Your Cart</h1>
          <p>You have 3 items ready for checkout</p>
        </div>
        <a href="product-filter.html" className="btn-continue">
          <i className="ri-arrow-left-line"></i>
          Continue Shopping
        </a>
      </div>

      <div className="cart-group">
        <div className="cart-item">
          <div className="item-thumb">
            <img src="./images/shopping-cart-images/graphiccard-thumbnail-1-img.png" alt="img1" />
          </div>
          <div className="item-info">
            <div className="item-name">
              <p>ZEBRONICS GT740-4GD3 Graphic Card</p>
            </div>
          </div>
          <div className="item-price">
            <span> ₹3,400</span>
            <button className="remove-btn">Remove</button>
          </div>
        </div>

        <div className="cart-item">
          <div className="item-thumb">
            <img src="./images/shopping-cart-images/graphiccard-thumbnail-2-img.png" alt="img-2" />
          </div>
          <div className="item-info">
            <div className="item-name">
              <p>FRONTECH GT730-4GD3 Graphic Card</p>
            </div>
          </div>
          <div className="item-price">
            <span> ₹2,900</span>
            <button className="remove-btn">Remove</button>
          </div>
        </div>

        <div className="cart-item">
          <div className="item-thumb">
            <img src="./images/shopping-cart-images/graphiccard-thumbnail-3-img.png" alt="img3" />
          </div>
          <div className="item-info">
            <div className="item-name">
              <p>
                PNY Geforce RTX 4060 Ti 8GB pci_e_x16Verto Dual Fan DLSS 3 Edition GDDR6 128-Bit Gaming Graphic Card
              </p>
            </div>
          </div>
          <div className="item-price">
            <span> ₹35,000</span>
            <button className="remove-btn">Remove</button>
          </div>
        </div>
      </div>
    </div></>
  )
}

export default CartLayoutComponent