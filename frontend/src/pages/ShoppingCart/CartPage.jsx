import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import CartFooter from '../../components/shoppingCartComponenets/cartFooter/CartFooter';
import CartLayoutComponent from '../../components/shoppingCartComponenets/cartLayout/CartLayoutComponent';
import CartOrderSummary from '../../components/shoppingCartComponenets/cartOrderSummary/CartOrderSummary';

import Footer from '../../layouts/Footers/Footer';
import Header from '../../layouts/Headers/Header';

import './cartpagedesign.css';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch cart items
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:54807/product-cart/show', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCartItems(response.data.data);
        toast.success('Cart items loaded successfully!');
      } catch (error) {
        console.error(error);
        toast.warn(error.response?.data?.message || 'Failed to load cart items');
      } finally {
        setLoading(false);
      }
    };
    fetchCartItems();
  }, []);

  // Remove item handler
  const handleRemove = async (product_id) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`http://localhost:54807/product-cart/remove/${product_id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success(response.data.message);

      setCartItems((prevItems) => prevItems.filter((item) => item.product_id !== product_id));
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || 'Failed to remove item');
    }
  };

  // Calculate totals: subtotal, discount, GST (18%), total
  const calculateTotals = () => {
    let subtotal = 0;
    let discount = 0;

    cartItems.forEach((item) => {
      const itemTotal = item.current_price * item.quantity;
      subtotal += itemTotal;

      const itemDiscount = ((item.discount_percentage || 0) / 100) * itemTotal;
      discount += itemDiscount;
    });

    const gst = 0.18 * (subtotal - discount);
    const total = subtotal - discount;

    return { subtotal, discount, gst, total };
  };

  const { subtotal, discount, gst, total } = calculateTotals();

  return (
    <>
      <Header />

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
          />

          <CartOrderSummary
            subtotal={subtotal}
            discount={discount}
            gst={gst}
            total={total}
          />
        </div>

        <CartFooter />
      </div>

      <Footer />
    </>
  );
};

export default CartPage;