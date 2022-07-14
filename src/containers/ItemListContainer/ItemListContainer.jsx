import React, { useEffect } from 'react'
import { useState } from 'react'
import ItemCount from '../../components/ItemCount/ItemCount'
import ItemList from '../../components/ItemList/ItemList'

// importamos las imagenes
import Croqueta1 from '../../img/Productos/croqueta 1.jpg'
import Croqueta2 from '../../img/Productos/croqueta 2.jpg'
import Croqueta3 from '../../img/Productos/croqueta 3.jpg'
import Croqueta4 from '../../img/Productos/croqueta 4.jpg'
import Croqueta5 from '../../img/Productos/croqueta 5.jpg'


// le ponemos la prop greeting
export const ItemListContainer = ({greeting}) => {

  const[items,setItems] =useState([])
  const productos =[
    {id: 1,name: 'Producto 1', price: 100, stock: 15, imagen: Croqueta1},
    {id: 2,name: 'Producto 2', price: 150, stock: 10, imagen: Croqueta2},
    {id: 3,name: 'Producto 3', price: 200, stock: 8, imagen: Croqueta3},
    {id: 4,name: 'Producto 4', price: 250, stock: 5, imagen: Croqueta4},
    {id: 5,name: 'Producto 5', price: 300, stock: 55, imagen: Croqueta5},
  ]

  const task=new Promise((resolve,reject) =>{
    setTimeout(() => {
      resolve(productos)
    },2000)
  })

  // En lugar del .then el metodo Async await
// const getTask = async () => {
//    try {
//       let res = await task
//       setItems(res)
//    } catch (error) {
//     console.log(error);
//    }
// }

  useEffect(() => {

    // getTask()

    task
      .then(res=>setItems(res))
      .catch (error => console.log(error))
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
    <div style={{ textAlign: 'center', maginTop: 200}}>
      {/* usamos la prop */}
      {greeting}
      <ItemCount initial={1} stock={10} onAdd={onAdd}/>
      <ItemList items={items}/>
    </div>
  )
}
export default ItemListContainer