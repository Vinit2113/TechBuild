import { useState } from 'react';
import './productfilters.css';

const ProductFilters = () => {
  const [openSections, setOpenSections] = useState({
    processor: false,
    series: false,
    socket: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev, [section]: !prev[section],
    }))
  }

  return (
    <>
      <div className="product-filtering-container">
        {/* PRODUCT BREADCRUMB */}
        <div className="breadcrumb-container">
          <span>Home</span>
          <span>/</span>
          <span>Pheripherals</span>
          <span>/</span>
          <span>Keyboard</span>
        </div>

        <div className="filter-container">
          <div className="title-reset-container">
            <p>Filter</p>
            <button type="reset" className='btn-reset'>Reset</button>
          </div>

          {/* PRICE FILTER */}
          <div className="price-range-container">
            <h4>Price Range</h4>
            <div className="range">
              <div className="wrapper">
                <span>₹</span>
                <input type="number" className="first-range" min="0" />
              </div>
              <div className="wrapper">
                <span>₹</span>
                <input type="number" className="second-range" min="0" />
              </div>
            </div>
          </div>

          {/* AVAILABILITY FILTER */}
          <div className="availability-container">
            <h4>Availability</h4>
            <div className="wrapper">
              <label htmlFor="check" className='stock-title'>
                <input type="checkbox" id="check" />
                Exclude out of stock items
              </label>
            </div>
          </div>

          {/* PROCESSOR BRAND FILTER */}
          <div className="filter-group">
            <div className={`filter-header ${openSections.processor ? "open " : ""}`} onClick={() => toggleSection("processor")}>
              <span>PROCESSOR BRAND</span>
              <i className="ri-arrow-down-s-line icon"></i>
            </div>

            <div
              className={`filter-content ${openSections.processor ? "open" : ""}`}
            >
              <label className="filter-label">
                <input type="checkbox" className="fltr-contnt-input" /> Intel
              </label>
              <label className="filter-label">
                <input type="checkbox" className="fltr-contnt-input" /> AMD
              </label>
            </div>
          </div>

          {/* SERIES FILTER */}n
          <div className="filter-group">
            <div className={`filter-header ${openSections.series ? "open" : ""}`} onClick={() => { toggleSection('series') }}>
              <span>SERIES</span>
              <i className="ri-arrow-down-s-line icon"></i>
            </div>

            <div className={`filter-content ${openSections.series ? "open" : ""}`}>
              <label className="filter-label">
                <input type="checkbox" className="fltr-contnt-input" /> Core i9
              </label>
              <label className="filter-label">
                <input type="checkbox" className="fltr-contnt-input" /> Core i7
              </label>
              <label className="filter-label">
                <input type="checkbox" className="fltr-contnt-input" /> Core i5
              </label>
              <label className="filter-label">
                <input type="checkbox" className="fltr-contnt-input" /> Ryzen 9
              </label>
              <label className="filter-label">
                <input type="checkbox" className="fltr-contnt-input" /> Ryzen 7
              </label>
              <label className="filter-label">
                <input type="checkbox" className="fltr-contnt-input" /> Ryzen 5
              </label>
            </div>
          </div>

          {/* SOCKET FILTER */}
          <div className="filter-group">
            <div className={`filter-header ${openSections.socket ? "open" : ""}`} onClick={() => { toggleSection('socket') }}>
              <span>SOCKET</span>
              <i className="ri-arrow-down-s-line icon"></i>
            </div>

            <div className={`filter-content ${openSections.socket ? "open" : ""}`}>
              <label className="filter-label">
                <input type="checkbox" className="fltr-contnt-input" /> LGA 1700
              </label>
              <label className="filter-label">
                <input type="checkbox" className="fltr-contnt-input" /> LGA 1200
              </label>
              <label className="filter-label">
                <input type="checkbox" className="fltr-contnt-input" /> AM4
              </label>
              <label className="filter-label">
                <input type="checkbox" className="fltr-contnt-input" /> AM5
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductFilters 