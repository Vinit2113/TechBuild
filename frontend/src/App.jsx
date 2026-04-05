import { BrowserRouter, Route, Routes } from 'react-router'
import HomePage from './pages/Home/HomePage'
import LoginPage from './pages/Login/LoginPage'
import ProductListPage from './pages/ProductList/ProductListPage'
import SignupPage from './pages/Signup/SignupPage'
import DetailedProduct from './pages/product_detail/DetailedProduct'

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
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App