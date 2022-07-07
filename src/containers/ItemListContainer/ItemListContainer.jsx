import React from 'react'

// le ponemos la prop greeting
export const ItemListContainer = ({greeting}) => {
  return (
    <div className='d-flex justify-content-center'>
      {/* usamos la prop */}
      {greeting}
    </div>
  )
}
export default ItemListContainer