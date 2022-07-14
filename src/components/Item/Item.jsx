import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({item}) => {
    // deconstruimos item para obtener las variables...
    const {id,name, price, stock, imagen}=item

  return (
    <Card style={{ width: '18rem', margin: 20 }}>
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Precio: ${price}
          <br/>
          Inventario: {stock} piezas
        </Card.Text>
        <Button variant="primary">Detalles</Button>
      </Card.Body>
    </Card>
  )
}

export default Item