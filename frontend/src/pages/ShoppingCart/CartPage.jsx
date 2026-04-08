import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import CartFooter from '../../components/shoppingCartComponenets/cartFooter/CartFooter';
import CartLayoutComponent from '../../components/shoppingCartComponenets/cartLayout/CartLayoutComponent';
import CartOrderSummary from '../../components/shoppingCartComponenets/cartOrderSummary/CartOrderSummary';

import Footer from '../../layouts/Footers/Footer';
import Header from '../../layouts/Headers/Header';

import NavBar from '../../layouts/Navbar/NavBar';
import './cartpagedesign.css';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totals, setTotals] = useState({
    subtotal: 0,
    discount: 0,
    gst: 0,
    total: 0,
  });

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:54807/product-cart/show', {
          headers: { Authorization: `Bearer ${token}` },
        });

        setCartItems(response.data.data || []);
        setTotals(response.data.totals || {
          subtotal: 0,
          discount: 0,
          gst: 0,
          total: 0,
        });

        toast.success('Cart loaded successfully!');
      } catch (error) {
        console.error(error);
        toast.error(error.response?.data?.message || 'Failed to load cart items');
      } finally {
        setLoading(false); // ✅ important
      }
    };

    fetchCartItems();
  }, []);

  // Remove item handler
  const handleRemove = async (product_id) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.delete(`http://localhost:54807/product-cart/remove/${product_id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      toast.success(response.data.message);

      // Update cart items and totals after removal
      setCartItems((prevItems) => prevItems.filter((item) => item.product_id !== product_id));
      setTotals(response.data.totals || totals); // update totals from backend if returned
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || 'Failed to remove item');
    }
  };

  const handleQuantityChange = async (product_id, newQuantity) => {
    const item = cartItems.find(i => i.product_id === product_id);
    if (!item) return;

    // Only update if the quantity actually changed
    if (newQuantity === item.quantity || newQuantity < 1) return;

    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(
        `http://localhost:54807/product-cart/update/${product_id}`,
        { quantity: newQuantity },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      // Update cart items locally
      setCartItems(prevItems =>
        prevItems.map(i =>
          i.product_id === product_id ? { ...i, quantity: newQuantity } : i
        )
      );

      setTotals(response.data.totals);
    } catch (error) {
      console.error(error);
      toast.error("Failed to update quantity");
    }
  };

  return (
    <>
      <Header />
      
      <NavBar />

      <div className="page">
        <div className="breadcrumb-container-cart">
          <a href="index.html">Home</a>
          <span>/</span>
          <span>Shopping cart</span>
        </div>

        <div className="cart-layout">
          <CartLayoutComponent
            cartItems={cartItems}
            loading={loading}
            handleRemove={handleRemove}
            handleQuantityChange={handleQuantityChange}
          />

          <CartOrderSummary
            subtotal={totals.subtotal}
            discount={totals.discount}
            gst={totals.gst}
            total={totals.total}
          />
        </div>

        <CartFooter />
      </div>

      <Footer />
    </>
  );
};

export default CartPage;