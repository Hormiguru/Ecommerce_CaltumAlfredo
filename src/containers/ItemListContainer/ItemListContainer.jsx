import React from 'react'
import ItemCount from '../../components/ItemCount/ItemCount'

// le ponemos la prop greeting
export const ItemListContainer = ({greeting}) => {
    
  const onAdd= (count) =>{
   alert(`Compraste ${count} piezas`);
  }
  return (
    <div className='d-flex justify-content-center'>
      {/* usamos la prop */}
      {greeting}
      <ItemCount initial={1} stock={10} onAdd={onAdd}/>
    </div>
  )
}
export default ItemListContainer