import 'remixicon/fonts/remixicon.css';
import ProudctHighlighImage from '../../../assets/hero_section/product-highlight-banner-img.png';
import './proudcthighligh.css';


const ProudctHighligh = () => {
  return (
    <>

      <section>
        <div className="product-highlight-banner-section">
          <div className="blur-effect"></div>
          <div className="product-highlight-banner-container">

            <div className="left-container">
              <div className="product-heading-container">
                <div className="product-title">
                  <h2>Samsung 990 PRO 2TB NVMe SSD</h2>
                </div >
                <div className="product-desc" >
                  <p>Blistering speeds, superior power efficiency. The ultimate SSD for hardcore gamers and creative
                    professionals.</p>
                </div >
              </div >

              <div className="product-price-container" >
                <p>
                  <span className="rupee-icon">₹</span>
                  <span className="total-price" > 12, 999</span >
                </p >
              </div >

              <div className="product-buttons-container" >
                <button className="add-to-cart-button" >
                  <i className="ri-shopping-cart-line" ></i >
                  <span>Add to Cart</span>
                </button >
                <button className="heart-icon-button" >
                  <i className="ri-heart-line" ></i >
                </button >
              </div >
            </div >

            <div className="right-container" >
              <div className="product-highlight-banner-image-container" >
                <img src={ProudctHighlighImage} alt="img" />
              </div>
            </div >
          </div >
        </div >
      </section >

    </>
  )
}

export default ProudctHighligh