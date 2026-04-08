import axios from 'axios';
import { useNavigate, useParams } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './rightdetaildesign.css';

const RightDetails = ({ product }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const token = localStorage.getItem("token");

  const handleAddToCart = async () => {
    if (!token) {
      toast.warning("You must be logged in to add to cart!");
      return;
    }

    try {
      await axios.post(
        `http://localhost:54807/product-cart/add/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Product added to cart!");
      navigate('/product/cart');
    } catch (err) {
      console.error("Full error:", err.response?.data || err.message);
      toast.error("Failed to add product to cart!");
    }
  };

  if (!product) return <p>Loading...</p>;

  return (
    <>
      <div className="product-info-container">
        <div className="product-desc">
          <p>{product.product_name}, {product.short_description}
            {product.full_description}
          </p>
        </div>

        <div className="rating-container">
          <div className="starts-container">
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-half-line"></i>
          </div>
          <div className="review-container">
            <a href="#">250 reviews</a>
          </div>
        </div>

        <div className="price-block">
          <span className="original-price">₹{product.original_price}</span>
          <div className="current-price-row">
            <span className="discounted-price">₹{product.current_price}</span>
            <span className="discount-badge">{product.discount_percentage}% OFF</span>
          </div>
        </div>

        <div className="cart-save-container">
          <div className="cart-container">
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              <span>Add to cart</span>
              <i className="ri-shopping-cart-2-line"></i>
            </button>
          </div>
          <div className="save-container">
            <button>
              <span>save</span>
              <i className="ri-poker-hearts-line"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Toast Container must be rendered */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </>
  );
};

export default RightDetails;