import { useState } from 'react'

import './App.css'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import HomePage from './pages/HomePage/HomePage'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import CheckOut from './pages/CheckOut/CheckOut'

function App() {
  

  return (
    <div className="App">
      Hello React!
      <Header />
      <ProductDetail/>
      <HomePage/>
      <Footer/>
      <CheckOut/>

    </div>
  )
}

export default App
