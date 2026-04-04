import 'remixicon/fonts/remixicon.css';
import ProductPagination from '../../components/ProductListing/ProductPagination/ProductPagination';
import ProductSort from '../../components/ProductListing/ProductSort/ProductSort';
import ProductCard from '../../components/ProductListing/productCard/ProductCard';
import ProductFilters from '../../components/ProductListing/productfilters/ProductFilters';
import Footer from '../../layouts/Footers/Footer';
import Header from '../../layouts/Headers/Header';
import './productListPage.css';
import NavBar from '../../layouts/Navbar/NavBar';

const ProductListPage = () => {
  return (
    <>
      <Header />

      <NavBar />




      {/* PRODUCT LISTING SECTION */}
      <section className="product-listing">
        <div className="product-listing-container">
          {/* PRODUCT FILTERS */}
          <ProductFilters />

          {/* PRODUCT DETAILS SECTION */}
          <div className="product-details-container">
            {/* PRODUCT SORT */}
            <ProductSort />

            {/* PRODUCT CARD LIST */}
            <ProductCard />
          </div>
        </div>

        {/* PRODUCT PAGINATION */}
        < ProductPagination />

      </section>

      {/* SHOWING RESULT  FIX ,  PAGEINATION FIX BY IF THREIS MORE THAN 20 PRODUT THEN SHOW THE PAGINATION UPTO PAGE 2 
      SET UP BREAD CRUMB ON THE BASE OF THE PAGE NAVIGATION */}


      <Footer />
    </>
  );
};

export default ProductListPage;