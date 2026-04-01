import './specSection.css'

const SpecSection = () => {
  return (
    <>
      <div className="product-specification-container">
        <div className="specification-title">
          <h2>Specifications</h2>
          <a href="#">Customer Reviews</a>
          <a href="#">Compatibility & support</a>
        </div>

        <div className="specification-lists">
          <h3>Key specs</h3>
          <ul>
            <li>
              <span>Graphics Coprocessor</span>
              <span>NVIDIA GeForce GT 740</span>
            </li>
            <li>
              <span>Memory Size</span>
              <span>4 GB</span>
            </li>
            <li>
              <span>Memory Type</span>
              <span>GDDR3</span>
            </li>
            <li>
              <span>Memory Interface Bus</span>
              <span>128-bit</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default SpecSection