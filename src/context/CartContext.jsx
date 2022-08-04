import { useContext, useState } from 'react';
import { children, createContext } from 'react';

export const CartContext = createContext([]);


// para q no se tengan que hacer doble importacion
export const useCartContext = () => useContext(CartContext)

const CartContextProvider =({children})=>{

// estados y funciones
const [cartList,setCartList] = useState([])

// funcion que agrega los productos al carrito
const agregarCarrito = (objProducto)=>{
        setCartList([
            ...cartList,
            objProducto
        ])
}

    return(
        <CartContext.Provider value={{
            cartList,
            agregarCarrito

        }}>
            { children }
        </CartContext.Provider>

    )



}

export default CartContextProvider