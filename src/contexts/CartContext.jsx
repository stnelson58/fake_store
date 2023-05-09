import {useEffect,useState,createContext} from 'react'
//create this context
export const CartContext = createContext()

//create provider

export default function CartContextProvider(props) {
    //create global state
    const[cart,setCart] = useState([])

    const addProduct = (item) => {
        console.log("Added item")
        let newCart = [...cart,item]
        setCart(newCart);
        console.log(cart)

    }

    const removeProduct = (productId) => {
        console.log("removed")
        let newCart = cart.filter((item)=>item.id !== productId)
        setCart(newCart)
        console.log(cart)

    }

  return (
    <CartContext.Provider value={{cart,addProduct,removeProduct}}>
     {props.children}
    </CartContext.Provider>
  )
}

