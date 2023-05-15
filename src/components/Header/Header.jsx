import React,{useContext} from 'react';
import './Header.css';
import { GrCart} from "react-icons/gr"
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';





function Header() {
  const {cart} = useContext(CartContext)
  return (
    <div className='header-container'>
        <h2>Fake Store</h2>
        <div className="cart-container">
       <Link to="/checkout"> <GrCart className='cart'/> </Link>
        <div className="cart-pointer">
          {cart.length}
        </div>
        </div>
        
        
        </div>
  )
}

export default Header