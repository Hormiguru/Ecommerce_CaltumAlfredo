// import React from 'react'
import { useCartContext } from '../../context/CartContext'

const CartContainer = () => {
  const {cartList} = useCartContext()
  return (
    <div>
      {cartList.map(producto=><li key={producto.id}>
        {producto.name} 
        <img src={producto.imagen} alt={producto.name}  />
        ${producto.price}   
        Cantidad {producto.cantidad} 
        </li>)}
    </div>
  )
}

export default CartContainer