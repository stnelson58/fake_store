import {useEffect,useState,createContext} from 'react'
//create this context
export const CartContext = createContext()

//create provider

export default function CartContextProvider(props) {
    //create global state
    const[cart,setCart] = useState([])

    useEffect(()=>{
        // Good use of use effect to fetch cartlist after page reload
        const storedCart = localStorage.getItem('cartList')
        if(storedCart){
            setCart(JSON.parse(storedCart))
        }

    
    },[])

    // Great setup for add and remove product components
    const addProduct = (item) => {
        console.log("Added item")
        let newCart = [...cart,item]
        setCart(newCart);
        
        localStorage.setItem('cartList',JSON.stringify(newCart))

    }

    const removeProduct = (productId) => {
        console.log("removed")
        let newCart = cart.filter((item)=>item.id !== productId)
        setCart(newCart)
        
        localStorage.setItem('cartList',JSON.stringify(newCart))

    }

  return (
    <CartContext.Provider value={{cart,addProduct,removeProduct}}>
     {props.children}
    </CartContext.Provider>
  )
}

