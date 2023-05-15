import React,{useState,useEffect,useContext}from 'react'
import './CheckOut.css'

import { CartContext } from '../../contexts/CartContext'
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdEuro } from "react-icons/md";
import Modal from 'react-modal';


const customStyles = {
  content:{
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%,-50%)',
  },
  

  

};

Modal.setAppElement(document.getElementById("root"));


function CheckOut() {
  const {cart,removeProduct} = useContext(CartContext)
  const [isOpen,setIsOpen] = useState(false)
  return (
    <div className='checkout-container'>
      <div className="checkout-headings">
        <p>Item</p>
        <div className="checkout2">
        <p id='unit-price'>Price</p>
        <p>Quantity</p>
        <p>Remove</p>
        </div>
      </div>
      <div className="cart-items">
       {
        cart.map((item,index)=><div key={index} className="checkout-map" >
        <img src={item.image} className="checkout-image" />
         <p className = "checkout-title">{item.title}</p>
         <p>{item.price}<MdEuro className='euro-icon'/></p>
          <p >1</p>
          < RiDeleteBin6Line onClick={()=>removeProduct(item.id)} className='bin'/>
        </div>)
       } 


      </div>
      <div className="cart-sum">
      <h3>Total &nbsp;&nbsp;&nbsp;  { 
      cart.reduce((prev,item) => {return parseInt(prev + item.price)},[0] 
      )} <MdEuro className='euro-icon'/>
        </h3>
      <button onClick={()=>setIsOpen(true)}>Checkout</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={()=>setIsOpen(false)}
        style={customStyles}
        contentLabel="Checkout Modal"
      >
        <div className="modal-header">
            <h2>Your Order was successful!</h2>
            <h2>Check your email for the order confirmation.Thank<br/>you for shopping with Fake Store!</h2>
            <button className="modal-close-btn" onClick={()=>setIsOpen(false)}>Return to Main Page</button>
        </div>
        
        
      </Modal>


      

      </div>
    
      
    


    </div>
  )
}

export default CheckOut