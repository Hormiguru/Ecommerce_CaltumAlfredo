import React, { useState } from 'react'

const ItemCount = ({initial,stock,onAdd}) => {
    const [count,setCount]=useState(initial)

    const suma = () =>{
        count<stock ? setCount(count+1) : alert(`no puedes comprar mas de ${stock}`)
    }

    const resta = () =>{
        count>initial ? setCount(count-1): alert(`compra minimama ${initial}` )
    }

    const resetea = () =>{
        setCount(initial)
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={resta}>-</button>
        <button onClick={suma}>+</button>
        <button onClick={()=>onAdd(count) }>Agregar</button>
        <button onClick={resetea}>Reset</button>
    </div>
  )
}

export default ItemCount