import React, { useEffect, useState } from 'react';
import './ProductDetail.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';



function ProductDetail() {

const [product,setProduct] = useState(" ")
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
      <h4>{product.price}</h4>
      <label >Description</label>
      <p>{product.description}</p>
      <button className='cart-btn'>Add To Cart</button>
      </div>
      
    
      </div>
  )
}

export default ProductDetail