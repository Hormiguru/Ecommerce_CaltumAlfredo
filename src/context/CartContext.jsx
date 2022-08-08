import { useContext, useState,createContext } from 'react';

export const CartContext = createContext([]);


// para q no se tengan que hacer doble importacion
export const useCartContext = () => useContext(CartContext)

const CartContextProvider =({children})=>{

// estados y funciones
const [cartList,setCartList] = useState([])

// borra todo del carrito
const limpiarCarrito = () =>{

    setCartList([])
}

//borra este elemento del carrito
const quitaProducto = (id) => {
    setCartList( cartList.filter(prod => prod.id !== id ) )
}


// funcion que agrega los productos al carrito
const agregarCarrito = (objProducto)=>{
const index = cartList.findIndex(llenaProd => llenaProd.id === objProducto.id );
    index<0?
    setCartList([
        ...cartList,
        objProducto
    ])
    :cartList[index].cantidad =cartList[index].cantidad+objProducto.cantidad;
} 

    return(
        <CartContext.Provider value={{
            quitaProducto,
            limpiarCarrito,
            cartList,
            agregarCarrito

        }}>
            { children }
        </CartContext.Provider>

    )



}

export default CartContextProvider