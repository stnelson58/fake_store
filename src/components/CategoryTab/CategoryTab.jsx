import React,{useEffect,useState}from 'react';
import './CategoryTab.css';
import axios from 'axios';

function CategoryTab({category}) {

    // const [categories,setCategories] = useState([])

    // useEffect(()=>{
        
    //     axios.get(`https://fakestoreapi.com/products/categories`)
    //     .then(res=>{
            
        
    //    const categoryMenu = (["All"]);
    //     for (let i = 0; i < res.data.length ; i++ ){
            
    //        if (/\s/.test(res.data[i])){
    //         const words = res.data[i].split(" ")
            
    //         const wordsIn = words.map((word)=>{return word[0].toUpperCase() + word.substring(1)
    //         }).join(" ")
            
    //         categoryMenu.push(wordsIn)
    //         }
    //        else{

           
    //         const words= res.data[i].charAt(0).toUpperCase() + res.data[i].slice(1);
    //         categoryMenu.push(words)
    //         }
    //     }
    //     console.log(categoryMenu)
    //     setCategories(categoryMenu)
    //      })
    //     .catch(err => console.log(err))
    // },[])


  return (
    <div className='category-container'>
     
    </div>
  )
}

export default CategoryTab