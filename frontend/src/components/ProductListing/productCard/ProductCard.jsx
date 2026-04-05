import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import productImage from '../../../assets/product_list/product_filter_section_product_card_img.png';
import './productcard.css';

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const handleView = (id) => {
    navigate(`/product/${id}`)
  }

  const { catId } = useParams();


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Use categoryId instead of subCategoryId
        const url = catId
          ? `http://localhost:54807/product/cat-list/${catId}`
          : "http://localhost:54807/product/all-list";



        const res = await axios.get(url);
        setProducts(res.data.data); // Set fetched products in state

        console.log(res.data.data);

      } catch (error) {
        console.error("Error fetching products", error);
      }
    };

    fetchProducts();
  }, [catId]); // Re-fetch whenever category changes

  return (
    <div className="product-card-container">
      {products.length > 0 ? (
        products.map((product) => (
          <div className="card-container" key={product.product_id}>
            <div className="img-container">
              <img
                className='img-setup'
                src={product.images[0]?.media_url
                  ? `http://localhost:54807${product.images[0].media_url}`
                  : productImage
                }
                alt={product.product_name}
              />
            </div>

            <div className="card-detail-container">
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

              <div className="title-desc-container">
                <div className="title-container">
                  <h2>{product.product_name}</h2>
                </div>
                <div className="desc-container">
                  <ul>
                    {product.specifications.slice(0, 5).map((spec) => (
                      <li key={spec.spec_id}>
                        <p className="title">{spec.spec_name}:</p>
                        <p className="info">{spec.spec_value}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="rupees-cart-container">
                <p className='currency-price'>
                  <span>₹</span>
                  <span>{product.current_price}</span>
                </p>

                <div className='button-group'>
                  <button className='view-button' onClick={() => handleView(product.product_id)} >View</button>
                  <button className='cart-button'>
                    <i className="ri-shopping-cart-2-line header-icon"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No products found in this category.</p>
      )}
    </div>
  );
};

export default ProductCard;