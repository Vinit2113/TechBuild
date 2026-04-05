import { useEffect, useState } from 'react'

import DetailedBreadCrumb from '../../components/Product_detail_components/Detaild_BreadCrumb/DetailedBreadCrumb'
import ProductImages from '../../components/Product_detail_components/left_image/ProductImages'

import RightDetails from '../../components/Product_detail_components/Right_detail/RightDetails'
import SpecSection from '../../components/Product_detail_components/Spec_section_detial_page/SpecSection'
import Footer from '../../layouts/Footers/Footer'
import Header from '../../layouts/Headers/Header'
import SpecSidebar from './SpecSideBar/SpecSideBar'


import axios from 'axios'
import { useParams } from 'react-router'
import NavBar from '../../layouts/Navbar/NavBar'
import './DetailedProductDesign.css'


const DetailedProduct = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [product, setProduct] = useState(null)

  const toggleSidebar = (isOpen) => {
    setSidebarOpen(isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  const { id } = useParams();

  console.log("produt detial id ", id);

  // GET THE DATA FROM THE BACKEND 
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:54807/product/${id}`);
        setProduct(res.data.data)
      } catch (error) {
        console.log(error)
      }
    }
    if (id) fetchProduct()
  }, [id]);



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
              <ProductImages product={product} />

              {/* SPECIFICATION SECTION */}
              <SpecSection product={product} />

              <button id="viewAllSpecs" className="btn-see-specs" onClick={() => toggleSidebar(true)}>
                See All Specifications
              </button>

              <SpecSidebar product={product} isOpen={sidebarOpen} onClose={() => toggleSidebar(false)} />

              <div id="specOverlay" className={`spec-overlay ${sidebarOpen ? 'visible' : ''}`} onClick={() => toggleSidebar(false)}></div>
            </div>

            {/* PRODUCT DESCRIPTION */}
            <RightDetails product={product} />

          </div>
        </section>
      </main>





      <Footer />
    </>
  )
}

export default DetailedProduct