import { useState } from 'react'

import './App.css'

import ProductDetail from './pages/ProductDetail/ProductDetail'
import HomePage from './pages/HomePage/HomePage'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import CheckOut from './pages/CheckOut/CheckOut'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ContactUs from './pages/ContactUs/ContactUs';
import CartContextProvider from './contexts/CartContext'
function App() {
  
// Good setup of context, react router and the components, just remove any unused lines
  return (
    <BrowserRouter>
    <CartContextProvider>
    <Header />
    <Routes>
      
      <Route path = '/' element = {<HomePage/>} />
      <Route path = '/details/:productId' element = {<ProductDetail />} />
      <Route path = '/checkout' element = {<CheckOut/>} />
      <Route path = '/contactus' element = {<ContactUs/>} />
      
      
      
    </Routes>
      <Footer/>
      </CartContextProvider>

    </BrowserRouter>
  )
}

export default App
