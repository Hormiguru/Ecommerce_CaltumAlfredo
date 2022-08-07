const productos = [
  { id: 1, name: "Producto 1", categoria: "adultos", detail: "Informacion del producto donde dira una breve descripcion del producto 1", price: 100, stock: 15, imagen: "https://i.ibb.co/hKcwqDn/croqueta-1.jpg" },
  { id: 2, name: "Producto 2", categoria: "cachorros", detail: "Informacion del producto donde dira una breve descripcion del producto 2", price: 150, stock: 10, imagen: "https://i.ibb.co/vJmdgnF/croqueta-2.jpg" },
  { id: 3, name: "Producto 3", categoria: "adultos", detail: "Informacion del producto donde dira una breve descripcion del producto 3", price: 200, stock: 8, imagen: "https://i.ibb.co/VSFqF2p/croqueta-3.jpg" },
  { id: 4, name: "Producto 4", categoria: "cachorros", detail: "Informacion del producto donde dira una breve descripcion del producto 4", price: 250, stock: 5, imagen: "https://i.ibb.co/PCv72yX/croqueta-4.png" },
  { id: 5, name: "Producto 5", categoria: "adultos", detail: "Informacion del producto donde dira una breve descripcion del producto 5", price: 300, stock: 55, imagen: "https://i.ibb.co/3B9Jwm5/croqueta-5.jpg" }
]

export const getFetch = () => {
  return (
    new Promise((res, rej) => {
      setTimeout(() => {
        res(productos)
      }, 2000

      )
    }
    )
  )
}




//
// 

