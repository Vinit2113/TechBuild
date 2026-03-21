import 'remixicon/fonts/remixicon.css';
import './productsortdesign.css';

const ProductSort = () => {
  return (
    <>
      <div className="shortlist-container">
        <div className="product-title-result-container">
          <h1 className='product-list-title'>Graphics Cards</h1>
          <p className='product-result'>
            Showing 1-6 of <span>124 </span> products
          </p>
        </div>

        <div className="dropdown">
          <p className='dropdown-shortlist-result-title'>Shorted by result</p>
          <select>
            <option>Select by Featured</option>
            <option>New Arrivals</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
          <i className="ri-arrow-down-s-line dropdown-icon"></i>
        </div>
      </div>
    </>
  )
}

export default ProductSort