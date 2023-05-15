import React, { useEffect, useState ,useContext } from 'react';
import './ProductDetail.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CartContext } from '../../contexts/CartContext';
import { MdEuro } from "react-icons/md";





function ProductDetail() {

const {addProduct,removeProduct} = useContext(CartContext)

const [product,setProduct] = useState(" ")
const [addtocart,setAddToCart] = useState(true)
const{productId} = useParams()
//
useEffect(()=>{
  axios.get(`https://fakestoreapi.com/products/${productId}
  `)
  .then(res=>{
    console.log(res.data)
    setProduct(res.data)

  })
  .catch(err=>console.log(err))
},[])

  return (
    <div className='detail-container'>
      <img src={product.image}  />
      <div className="product-info">
        <h3>{product.title}</h3>
      <h4>{product.price}<MdEuro className='euro-icon'/></h4>
      <label >Description</label>
      <p>{product.description}</p>
      <button onClick={()=>{
        addtocart?addProduct(product):removeProduct(product.id)
        setAddToCart(!addtocart)}} className='cart-btn'>{addtocart? "Add To Cart" : "Remove"}</button>
      </div>
      
    
      </div>
  )
}

export default ProductDetail