import React from 'react'
// CSS should be last in the import order
// the best practice is at the top any react / router imports, external modules, components, images, css
import './ProductCard.css'
import { BsHeart,BsHeartFill } from "react-icons/bs"
// There should only be one import from react, combine them together
import { useContext,useState,useEffect } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { Link } from 'react-router-dom'



function ProductCard({product}) {
    const {cart,addProduct,removeProduct} = useContext(CartContext)

    const [isCart,setIsCart] = useState()

    useEffect(()=>{
      // Nice use of useEffect to check to see if item is stored within the cart
         setIsCart(cart.find((item)=>item.id===product.id))
    },[cart])
    

    
  return (
    // TODO: review the design and make adjustments to the font size and ensuring to use the correct font. 
    // some cards the text is overflowing due to a long title, reduce the length of the title so the overflow effect does not occur
    <div className='productinfo-container'>
        <div className="product-image">
            <Link to={`/details/${product.id}`}><img  src={product.image}  /></Link>
            <div className='heart'>
            {
                isCart? < BsHeartFill onClick={()=>removeProduct(product.id)} className='heart-icon'/> : < BsHeart onClick={()=>addProduct(product)} className='heart-icon' />
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