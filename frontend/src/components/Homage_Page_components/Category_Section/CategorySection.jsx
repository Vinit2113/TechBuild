import 'remixicon/fonts/remixicon.css';
import catSecImg from '../../../assets/hero_section/category_product.png';
import './categorysection.css';

const CategorySection = () => {
  return (
    <>
      <section>
        <div className="category-section">
          <div className="category-header-container">
            <ul>
              <li>
                <a href="#" className="category-link">
                  <div className="category-link-icon-container">
                    <i className="ri-shapes-line"></i>
                  </div>
                  <span>Shop by Category</span>
                </a>
              </li>
              <li>
                <a href="#" className="view-all">
                  View all
                </a>
              </li>
            </ul>
          </div>

          <div className="category-card-container">
            <div className="card-container">
              <div className="card-img">
                <img src={catSecImg} alt="category" />
              </div>
              <div className="card-title">
                <h3>Processor</h3>
              </div>
              <div className="card-desc">
                <p>
                  High-performance processors for demanding applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section></>
  )
}

export default CategorySection