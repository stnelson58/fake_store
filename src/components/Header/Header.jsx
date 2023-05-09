import React from 'react';
import './Header.css';
import { GrCart} from "react-icons/gr";


function Header() {
  return (
    <div className='header-container'>
        <h2>Fake Store</h2>
        <div className="cart-container">
        <GrCart className='cart'/>
        <div className="cart-pointer">
          1
        </div>
        </div>
        
        
        </div>
  )
}

export default Header