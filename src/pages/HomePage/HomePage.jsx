import React ,{useEffect,useState} from 'react';
import './HomePage.css';
import CategoryTab from '../../components/CategoryTab/CategoryTab';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import axios from 'axios';
import ProductCard from '../../components/ProductCard/ProductCard';

function HomePage() {

  const [categories,setCategories] = useState([])
  const [products,setProducts] = useState([])

    useEffect(()=>{
        
        axios.get(`https://fakestoreapi.com/products/categories`)
        .then(res=>{
            
        
       const categoryMenu = (["All"]);
        for (let i = 0; i < res.data.length ; i++ ){
            
           if (/\s/.test(res.data[i])){
            const words = res.data[i].split(" ")
            
            const wordsIn = words.map((word)=>{return word[0].toUpperCase() + word.substring(1)
            }).join(" ")
            
            categoryMenu.push(wordsIn)
            }
           else{

           
            const words= res.data[i].charAt(0).toUpperCase() + res.data[i].slice(1);
            categoryMenu.push(words)
            }
        }
        console.log(categoryMenu)
        setCategories(categoryMenu)
         })
        .catch(err => console.log(err))
    },[])

    useEffect(()=>{
      axios.get(`https://fakestoreapi.com/products`)
      .then(res=>{
        setProducts(res.data)
        

      })
      .catch((err)=>console.log(err))
    },[])
    console.log(products)
  return (
    <div className='homepage-container'>
      
      <div className="categories-container">
    { categories.map((category,index)=><CategoryTab category={category} key={index} />

  )  


}
      </div>
      <div className="products-container">
     {

     products.map((product)=>{return <ProductCard product={product} key={product.id}/>})
     
     } 
      </div>
      
    </div>
  )
}

export default HomePage