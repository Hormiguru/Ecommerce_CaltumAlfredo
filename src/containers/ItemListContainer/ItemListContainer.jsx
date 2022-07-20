import React, { useEffect } from 'react'
import { useState } from 'react'
import ItemCount from '../../components/ItemCount/ItemCount'
import ItemList from '../../components/ItemList/ItemList'
import ItemDetail from '../../components/itemDetail/itemDetail'
import { getFetch } from '../../json/productos'




// le ponemos la prop greeting
export const ItemListContainer = ({greeting}) => {

  const[items,setItems] =useState([])
  const[loading,setLoading]=useState([true])
  const [productos,setProductos]=useState([])
  


  useEffect(() => {

    // getTask()

    getFetch()
    // combierte productos en items
      .then(res=>setItems(res))
      .catch (error => console.log(error))
      .finally(() =>setLoading(false)) // se ejecuta siempre al final
    // return () => {

    // }
  }, [])
   /*Nota: Efectos despues del cierre de corchete:  
  1. si no hay nada entre el corchete y el parentecis de cierre se repetira cada q se actualice
  2. si hay [] vacio se repite SOLO UNA VEZ 
  3. si hay un nombre solo solo se repite cuando se cambia ese componente */ 

    
  const onAdd= (count) =>{
   alert(`Compraste ${count} piezas`);
  }
  return (
    loading?<div>Cargando...</div>:
    <div style={{ textAlign: 'center', maginTop: 200}}>
      {/* usamos la prop */}
      {greeting}
      <ItemCount initial={1} stock={10} onAdd={onAdd}/>
      <ItemList items={items}/>
      <ItemDetail />
    </div>
  )
}
export default ItemListContainer