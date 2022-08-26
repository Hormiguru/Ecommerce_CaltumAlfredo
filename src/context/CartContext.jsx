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
import { useContext, useState, createContext } from "react";

export const CartContext = createContext([]);

// para q no se tengan que hacer doble importacion
export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  // estados y funciones
  const [cartList, setCartList] = useState([]);

  // borra todo del carrito
  const limpiarCarrito = () => {
    setCartList([]);
  };

  const piezasTotal = () => {
    return cartList.reduce(
      (acumulado, actual) => acumulado + actual.cantidad,
      0
    );
  };

  //borra este elemento del carrito
  const quitaProducto = (id) => {
    setCartList(cartList.filter((prod) => prod.id !== id));
  };

  // funcion que agrega los productos al carrito
  const agregarCarrito = (objProducto) => {
    const index = cartList.findIndex(
      (llenaProd) => llenaProd.id === objProducto.id
    );

    if (index < 0) {
      setCartList([...cartList, objProducto]);
    } else {
      cartList[index].cantidad += objProducto.cantidad;
      setCartList([...cartList]);
    }
  };

  const order = {};

  return (
    <CartContext.Provider
      value={{
        quitaProducto,
        limpiarCarrito,
        cartList,
        agregarCarrito,
        piezasTotal,
        order,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
