import React from 'react'
import './ProductCard.css'
import { BsHeart,BsHeartFill } from "react-icons/bs"
import { useContext,useState,useEffect } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { Link } from 'react-router-dom'



function ProductCard({product}) {
    const {cart,addProduct,removeProduct} = useContext(CartContext)

    const [isCart,setIsCart] = useState()

    useEffect(()=>{
         setIsCart(cart.find((item)=>item.id===product.id))
    },[cart])
    

    
  return (
    <div className='productinfo-container'>
        <div className="product-image">
            <Link to={`/details/${product.id}`}><img  src={product.image}  /></Link>
            <div className='heart'>
            {
                isCart? < BsHeartFill onClick={()=>removeProduct(product.id)} className='heart-icon'/> : < BsHeart onClick={()=>addProduct(product)}/>
            }

            </div>
        </div>
        <div className="product-title">
        <div className="product-description">
        <h5>{product.title}</h5>
        <p>{product.category}</p>
        </div>
        <h6>{product.price}</h6>
        </div>
        </div>
  )
}

export default ProductCard