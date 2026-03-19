import './ctasection.css'
import 'remixicon/fonts/remixicon.css';
import ctaBgImage from '../../assets/hero_section/custom-pc-cta-img.png'

const CtaSection = () => {
  return (
    <>
      <section>
        <div className="custom-pc-cta-section">
          <div className="custom-pc-cta-container">
            <div className="bigger-circle">
              <div className="smaller-circle"></div>
            </div>

            <div className="cta-content-container">
              <div className="img-container">
                <img src={ctaBgImage} alt="img" />
              </div>
              <div className="para-1-container">
                <p>Not Sure Where To Start?</p>
              </div>
              <div className="para-2-container">
                <p>
                  Use our custom PC building tool to ensure compatibility and get the best performance for your budget.
                  We'll guide you through every part.
                </p>
              </div>
              <div className="button-container">
                <button className="build-your-pc-button">
                  <span>Start Custom Build</span>
                  <i className="ri-arrow-right-long-fill"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CtaSection