import { BrowserRouter, Route, Routes } from 'react-router'
import SignupPage from './pages/Signup/SignupPage'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignupPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App