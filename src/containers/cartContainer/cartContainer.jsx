import React from 'react'
import { useCartContext } from '../../context/CartContext'

function CartContainer() {
  const {cartList} = useCartContext()
  return (
    <div>
      {cartList.map(producto=><li key="q">
        {producto.name} {producto.price}
        </li>)}
    </div>
  )
}

export default CartContainer