import { BrowserRouter, Route, Routes } from 'react-router'
import CheckOutPage from './pages/Checkout/CheckOutPage'
import HomePage from './pages/Home/HomePage'
import LoginPage from './pages/Login/LoginPage'
import DetailedProduct from './pages/product_detail/DetailedProduct'
import ProductListPage from './pages/ProductList/ProductListPage'
import CartPage from './pages/ShoppingCart/CartPage'
import SignupPage from './pages/Signup/SignupPage'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/product/list" element={<ProductListPage />} />
          <Route path="/product/list/:catId" element={<ProductListPage />} />
          <Route path="/product/:id" element={<DetailedProduct />} />
          <Route path="/product/cart" element={<CartPage />} />
          <Route path="/product/checkout" element={<CheckOutPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App