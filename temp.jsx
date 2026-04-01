import DetailedBreadCrumb from '../../components/Product_detail_components/Detaild_BreadCrumb/DetailedBreadCrumb'
import Prod_Det_LeftImage from '../../components/Product_detail_components/left_image/Prod_Det_LeftImage'
import RightDetails from '../../components/Product_detail_components/Right_detail/RightDetails'
import SpecSection from '../../components/Product_detail_components/Spec_section_detial_page/SpecSection'
import TabsDetailSection from '../../components/Product_detail_components/Tabs_detail_section/TabsDetailSection'
import Footer from '../../layouts/Footers/Footer'
import Header from '../../layouts/Headers/Header'
import './DetailedProductDesign.css'

const DetailedProduct = () => {
  return (
    <>
      {/* HEADER */}
      <Header />


      {/* BREADCRUMB */}
      <DetailedBreadCrumb />


      {/* MAIN */}
      <div className="product-container">

        {/* LEFT IMAGE */}
        <Prod_Det_LeftImage />

        {/* RIGHT DETAILS */}
        <RightDetails />

      </div>

      {/* TABS */}
      <TabsDetailSection />
      {/* <div className="tabs">
        <span className="active">Detailed Specifications</span>
        <span>Customer Reviews</span>
        <span>Compatibility & Support</span>
      </div> */}

      {/* TABLE */}
      <SpecSection />


      <Footer />
    </>
  )
}

export default DetailedProduct