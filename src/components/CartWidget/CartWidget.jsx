import React from 'react'

// importamos el logo del carrito
import shopingCart from '../../img/Personalizado/shopping-cart.png'


// creamos el componente
const CartWidget = () => {
    return (
        <div >
            {/* importado de un archivo */}
            <img src={shopingCart} />

            {/* importado desde web */}
            {/* <img src={'https://flyclipart.com/thumbs/login-online-shopping-cart-icon-1281208.png'} /> */}
        
        </div>

    )
}

// exportamos el componente
export default CartWidget