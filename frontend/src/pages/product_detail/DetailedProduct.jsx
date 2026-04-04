import { useState } from 'react'

import DetailedBreadCrumb from '../../components/Product_detail_components/Detaild_BreadCrumb/DetailedBreadCrumb'
import ProductImages from '../../components/Product_detail_components/left_image/ProductImages'

import RightDetails from '../../components/Product_detail_components/Right_detail/RightDetails'
import SpecSection from '../../components/Product_detail_components/Spec_section_detial_page/SpecSection'
import Footer from '../../layouts/Footers/Footer'
import Header from '../../layouts/Headers/Header'
import SpecSidebar from './SpecSideBar/SpecSideBar'


import NavBar from '../../layouts/Navbar/NavBar'
import './DetailedProductDesign.css'


const DetailedProduct = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = (isOpen) => {
    setSidebarOpen(isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };




  return (
    <>
      {/* HEADER */}
      <Header />
      <NavBar />

      <main>
        <section className='product-detail-section'>
          <div className='product-detail-container'>
            {/* BREAD-CRUMB + PRODUCT-IMAGES CONTAINER */}
            <div className='breadcrumb-product-images-container'>
              {/* BREADCRUMB SECTION */}
              <DetailedBreadCrumb />
              {/* PRODUCT IMAGE SECTION */}
              <ProductImages />
              {/* SPECIFICATION SECTION */}
              <SpecSection />
              <button id="viewAllSpecs" className="btn-see-specs" onClick={() => toggleSidebar(true)}>
                See All Specifications
              </button>

              <SpecSidebar isOpen={sidebarOpen} onClose={() => toggleSidebar(false)} />

              <div id="specOverlay" className={`spec-overlay ${sidebarOpen ? 'visible' : ''}`} onClick={() => toggleSidebar(false)}></div>
            </div>
            {/* PRODUCT DESCRIPTION */}
            <RightDetails />
          </div>
        </section>
      </main>





      <Footer />
    </>
  )
}

export default DetailedProduct