// import React from 'react'
import { useCartContext } from "../../context/CartContext";
import Table from "react-bootstrap/Table";

import { Link } from "react-router-dom";

const CartContainer = () => {
  const { cartList, limpiarCarrito, quitaProducto, piezasTotal } =
    useCartContext();
  // suma todos los precios

  const precioTotal = cartList.reduce(
    (acumulado, actual) => acumulado + actual.price * actual.cantidad,
    0
  );

  return cartList.length > 0 ? (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Precio Unitario</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartList.map((producto) => (
            <tr key={producto.id}>
              <td>
                <img src={producto.imagen} alt={producto.name} height="100" />
              </td>
              <td>{producto.name}</td>
              <td>{producto.cantidad}</td>
              <td>${producto.price}</td>
              <td>${producto.cantidad * producto.price}</td>
              <td>
                <button onClick={() => quitaProducto(producto.id)}>
                  Quitar del carrito
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td>Precio Total ${precioTotal}</td>
            <td>Cantidad Total {piezasTotal()}</td>
          </tr>
        </tbody>
      </Table>
      <button onClick={limpiarCarrito}>Borrar el Carrito</button>
    </div>
  ) : (
    <div>
      <div>Carrito Vacio</div>
      <Link to={"/"}>
        <button>Ve al inicio</button>
      </Link>
    </div>
  );
};

export default CartContainer;
