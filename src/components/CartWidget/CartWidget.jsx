import React from "react";
import { useCartContext } from "../../context/CartContext";

// importamos el logo del carrito cuando es desde el mismo archivo, pero se recomienda que sea desde web
// import shopingCart from '../../img/Cart/shopping-cart.png'

// creamos el componente
const CartWidget = () => {
  const { piezasTotal } = useCartContext();

  return (
    <div>
      {/* importado de un archivo */}
      {/* <img src={shopingCart} /> */}
      {/* importado desde web */}
      <p>{piezasTotal()}</p>
      <img src={"https://i.ibb.co/RYb2Dxw/shopping-cart.png"} />
    </div>
  );
};

// exportamos el componente
export default CartWidget;
