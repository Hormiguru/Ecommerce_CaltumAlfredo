import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFetch } from '../../json/productos'

import ItemCount from '../../components/ItemCount/ItemCount'

function ItemDetail({dataDetalle}) {
const [producto,setProducto]=useState(false)

const onAdd= (count) =>{
  alert(`Compraste ${count} piezas`);
 }


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
  // 
  return (
    <div>
    {producto&&producto.length>0?
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={producto[0].imagen} />
      <Card.Body>
        <Card.Title> {producto[0].name} </Card.Title>
        <Card.Text> {producto[0].detail} </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Precio ${producto[0].price}</ListGroup.Item>
        <ListGroup.Item>inventario: {producto[0].stock} </ListGroup.Item>
        <ItemCount initial={1} stock={producto[0].stock} onAdd={onAdd}/>
      </ListGroup>
    </Card>
    
    </div>
    :""}
  </div>
  )
}

export default ItemDetail