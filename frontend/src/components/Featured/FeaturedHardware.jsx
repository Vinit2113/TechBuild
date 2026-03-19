import 'remixicon/fonts/remixicon.css';

import featuredHardwareImage from '../../assets/hero_section/featured_hardware_img.png';
import './featuredHardware.css';

const FeaturedHardware = () => {
  return (
    <>
      <section>
        <div className="featured-hardware-section">
          <div className="featured-hardware-container">
            <div className="featured-hardware-title-container">
              <h2>Featured Hardware</h2>
            </div>

            <div className="hardware-card-container">
              <div className="hardware-card">
                <div className="hardware-img-container">
                  <img src={featuredHardwareImage} alt="img" />
                  <div className="heart-container ">
                    <button className='icon-style'>
                      <i className="ri-heart-line"></i>
                    </button>
                  </div>
                </div>

                <div className="hardware-title-container">
                  <h3>Processor</h3>
                </div>

                <div className="hardware-desc-container">
                  <p>Intel Core i9-13900K Raptor Lake lorem</p>
                </div>

                <div className="hardware-rating-container">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-half-line"></i>
                </div>

                <div className="hardware-price-container">
                  <p>
                    <span className="rupee-icon">₹</span>
                    <span className="total-price">12,999</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FeaturedHardware