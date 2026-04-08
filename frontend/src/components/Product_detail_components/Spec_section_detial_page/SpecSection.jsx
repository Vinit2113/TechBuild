import './specSection.css';

const SpecSection = ({ product }) => {

  if (!product) return null;

  const basicSpecs = product.specifications || [];

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
            {basicSpecs.map((spec) => (
              <li key={spec.spec_id}>
                <span>{spec.spec_name}</span>
                <span>{spec.spec_value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default SpecSection