import React from 'react'
import './CheckOut.css'

function CheckOut() {
  return (
    <div className='checkout-container'>
      <div className="checkout-headings">
        <p>Item</p>
        <p id='unit-price'>Price</p>
        <p>Quantity</p>
        <p>Remove</p>
      </div>
      <div className="cart-items">

      </div>
      <div className="cart-sum">
      <h3>Total 218 </h3>
      <button>Checkout</button>

      </div>
    
      
    


    </div>
  )
}

export default CheckOut