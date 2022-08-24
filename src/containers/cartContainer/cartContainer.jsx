// import React from 'react'
import { useCartContext } from "../../context/CartContext";
import Table from "react-bootstrap/Table";

import { Link } from "react-router-dom";
import {
  addDoc,
  collection,
  documentId,
  getDocs,
  getFirestore,
  query,
  where,
  writeBatch,
} from "firebase/firestore";

const CartContainer = () => {
  const { cartList, limpiarCarrito, quitaProducto, piezasTotal } =
    useCartContext();
  // suma todos los precios

  const precioTotal = cartList.reduce(
    (acumulado, actual) => acumulado + actual.price * actual.cantidad,
    0
  );

  // orden de compra
  const ordenCompra = async () => {
    console.log("generando orden");
    // generamos el objeto
    const order = {};
    order.buyer = {
      name: "Alfredo",
      phone: "123456",
      email: "alfredo@caltum.com",
    };

    order.items = cartList.map((product) => {
      return {
        id: product.id,
        name: product.name,
        price: product.price,
      };
    });
    order.total = precioTotal;

    const db = getFirestore();
    const querryOrders = collection(db, "orders");
    addDoc(querryOrders, order)
      .then((resp) => {
        console.log(resp.id);
      })
      .catch((error) => console.log(error));

    // actualizar el stock
    const queryCollectionStock = collection(db, "items");

    const queryActualizarStock = query(
      queryCollectionStock, //
      where(
        documentId(),
        "in",
        cartList.map((prod) => prod.id)
      )
    );

    const batch = writeBatch(db);

    await getDocs(queryActualizarStock)
      // .then((resp) => console.log(resp));
      // entonces por cada elemento del carrito cambia el stock a el stock - la compra
      .then((resp) =>
        resp.docs.forEach((res) =>
          batch.update(res.ref, {
            stock:
              res.data().stock -
              cartList.find((item) => item.id === res.id).cantidad,
          })
        )
      )
      .catch((err) => console.log(err));
    // .finally(() => limpiarCarrito());

    batch.commit();
  };

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

      {/* // Formulario */}
      <div className="row mt-5">
        <div className="col mt-5">
          <div className="col mt-5">
            <form
              className="border border-2 border-primary rounded shadow-lg w-75 p-3"
              style={{ margin: "auto" }}
            >
              <div className="form-group">
                <label htmlFor="">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Nombre"
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Teléfono</label>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  placeholder="Teléfono"
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Validar Email</label>
                <input
                  type="text"
                  className="form-control"
                  name="validarEmail"
                  placeholder="Repita Email"
                />
              </div>
            </form>
          </div>
          <button onClick={ordenCompra}>Generar Orden</button>
        </div>
      </div>
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
