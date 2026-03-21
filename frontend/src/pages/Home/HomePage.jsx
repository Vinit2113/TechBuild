import CtaSection from "../../components/CTA_Section/CtaSection"
import FeaturedHardware from "../../components/Featured/FeaturedHardware"
import CategorySection from "../../components/Homage_Page_components/Category_Section/CategorySection"
import HeroSection from "../../components/Homage_Page_components/Hero__section/HeroSection"
import ProudctHighligh from "../../components/Homage_Page_components/Product_highlight_section/ProudctHighligh"
import Footer from "../../layouts/Footers/Footer"
import Header from "../../layouts/Headers/Header"
import NavBar from "../../layouts/Navbar/NavBar"
import "./home.css"

const HomePage = () => {
  return (
    <>
      {/* HEADER */}
      < Header />

      {/* NAVBAR */}
      < NavBar />

      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Category Section */}
        <CategorySection />


        {/* Product Highlight */}
        <ProudctHighligh />


        {/* Featured Hardware */}
        <FeaturedHardware />

        {/* CTA */}
        <CtaSection />
      </main>

      {/* FOOTER */}
        <Footer />
    </>)
}

// SHOW PAGES BASD ON THE USE SELECT IF USER SELECT COMPONENTS SHOW COMPONENTS IN LIST PAGE , IF USER SELECT NETWORKING  SHOW NETWORK PRODUCTS IN PRODUCT LIST PAGE ETC....

export default HomePage