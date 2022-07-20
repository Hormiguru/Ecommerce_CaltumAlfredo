import React, { Fragment, useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFetch } from '../../json/productos'

const ItemDetailContainer = () => {
const [producto,setProducto]=useState(false)
let{id}=useParams()
  useEffect(() => {

    // getTask()

    getFetch()
    // combierte productos en items
      .then(res=>setProducto(res.filter(prod=>prod.id==id)))
      .catch (error => console.log(error))
    // return () => {

    // }
  }, [id])
  // console.log(producto[0].name)
  return (
      <div>
        {producto&&producto.length>0?
        <div>{producto[0].name}</div>
        :"cargando"}
      </div>
  )
}

export default ItemDetailContainer