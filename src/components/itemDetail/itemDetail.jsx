import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import { useState } from "react";
import { Link } from "react-router-dom";

import ItemCount from "../../components/ItemCount/ItemCount";
import { useCartContext } from "../../context/CartContext";

function ItemDetail({ producto }) {
  
  const [isTrue,setIsTrue]=useState(true);

const { agregarCarrito } = useCartContext()


  const onAdd = (count) => {
    setIsTrue(false)
    // console.log(setIsTrue)
    agregarCarrito( {...producto, cantidad:count} )
  };
  

  
    
  return (
    <div>
      
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={producto.imagen} />
            <Card.Body>
              <Card.Title> {producto.name} </Card.Title>
              <Card.Text> {producto.detail} </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              {isTrue ? <ItemCount initial={1} stock={producto.stock} onAdd={onAdd} />:
              <>
              <Link to={'/cart'}>
                <button>Ir al Carrito</button>
              </Link>
              <Link to={'/'}>
                <button>Seguir comprando</button>
              </Link>
              </>
              }
              <ListGroup.Item>Precio ${producto.price}</ListGroup.Item>
              <ListGroup.Item>inventario: {producto.stock} </ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
      
    </div>
  );
}

export default ItemDetail;
