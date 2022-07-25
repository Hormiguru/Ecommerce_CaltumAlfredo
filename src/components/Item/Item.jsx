import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({item}) => {
    // deconstruimos item para obtener las variables...
    const {id, name, category, detail, price, stock, imagen}=item

  return (
    <Card style={{ width: '18rem', margin: 20 }}>
      <Card.Img variant="top" style={{height:'300px'}} className='' src={imagen} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Precio: ${price}
          <br/>
          Inventario: {stock} piezas
          <br/>
          Categoria: {category}
        </Card.Text>
        {/* agregamos el link por cada item */}
        <Link to={`/item/${id}`}>
        <Button variant="primary" >Detalles</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default Item