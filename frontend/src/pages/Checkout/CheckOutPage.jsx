import axios from 'axios';
import { useEffect, useState } from 'react';
import CheckOutCartSummary from '../../components/Checkout_components/Checkout-Cart/CheckOutCartSummary';
import CheckOutShippingAddress from '../../components/Checkout_components/checkOutShippingAddress/CheckOutShippingAddress';
import CheckOutShippingMethod from '../../components/Checkout_components/checkoutShippingMethods/CheckOutShippingMethod';
import Footer from '../../layouts/Footers/Footer';
import Header from '../../layouts/Headers/Header';
import NavBar from '../../layouts/Navbar/NavBar';
import './checkoutpagedesign.css';

const CheckOutPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totals, setTotals] = useState({
    subtotal: 0,
    discount: 0,
    gst: 0,
    total: 0,
  });

  const [shipping, setShipping] = useState({
    type: "Standard",
    cost: 0,
  });

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:54807/product-cart/show', {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log("Here : ", response.data.data);

        setCartItems(response.data.data || []);
        setTotals(response.data.totals || {});
      } catch (error) {
        console.error('Failed to fetch cart:', error);
      }
    };
    fetchCart();
  }, []);

  return (
    <>
      <Header />
      <NavBar />

      <div className='container-checkout'>
        <h1>Checkout</h1>

        <div className="grid">

          {/* LEFT */}
          <div>
            <CheckOutShippingAddress />
            <CheckOutShippingMethod shipping={shipping} setShipping={setShipping} />
          </div>

          {/* RIGHT */}
          <CheckOutCartSummary cartItems={cartItems} totals={totals} shipping={shipping} />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CheckOutPage;