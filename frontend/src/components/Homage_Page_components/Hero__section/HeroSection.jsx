import 'remixicon/fonts/remixicon.css';
import herosectionimage from '../../../assets/hero_section/hero-section-img.png';
import "./herosection.css";


const HeroSection = () => {
  return (
    <>
      <section>
        <div className="hero-split-section">
          <div className="left-container">
            <div className="left-sub-cont-1">
              <div className="capsule">
                <i className='ri-circle-fill'></i>
                <h3>New Arrival</h3>
              </div>
            </div>

            {/* LEFT  */}
            <div className="left-sub-cont-2">
              <span className="first-text">
                Next-Gen <br /> Performance.
              </span>
              <h2 className="second-text">
                <span>RTX 4090 series.</span>
              </h2>
            </div>

            <div className="left-sub-cont-3">
              <p>
                Experience the ultimate gaming performance with the RTX 4090
                series. Powered by NVIDIA's latest architecture, these graphics
                cards deliver unparalleled speed and realism for an immersive
                gaming experience.
              </p>
            </div>

            <div className="left-sub-cont-4">
              <button className="btn-1">
                <span>Shop Series 4000</span>
                <i className="ri-arrow-right-long-line btn-icon"></i>
              </button>
              <button className="btn-2">
                <i className="ri-tools-line btn-icon"></i>
                <span>Start Custom Build</span>
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="right-container">
            <img className='hero-img-right' src={herosectionimage} alt="hero" />
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection