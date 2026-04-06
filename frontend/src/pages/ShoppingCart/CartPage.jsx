import CartFooter from '../../components/shoppingCartComponenets/cartFooter/CartFooter';
import CartLayoutComponent from '../../components/shoppingCartComponenets/cartLayout/CartLayoutComponent';
import CartOrderSummary from '../../components/shoppingCartComponenets/cartOrderSummary/CartOrderSummary';
import Footer from '../../layouts/Footers/Footer';
import Header from '../../layouts/Headers/Header';
import './cartpagedesign.css';
const CartPage = () => {
  return (
    <>
      {/* HEADER */}
      <Header />

      <div className="page">
        {/* breadcrumb */}
        <div className="breadcrumb-container-cart">
          <a href="index.html">Home</a>
          <span>/</span>
          <span>Shopping cart</span>
        </div>

        <div className="cart-layout">
          <CartLayoutComponent />

          <CartOrderSummary />
        </div>

        <CartFooter />


      </div>

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default CartPage;