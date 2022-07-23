const productos = [
  { "id": 1, "name": "Producto 1", "detail": "Informacion del producto donde dira una breve descripcion del producto 1", "price": 100, "stock": 15, "imagen": "https://i.ibb.co/zQjfBbq/croqueta-1.jpg" },
  { "id": 2, "name": "Producto 2", "detail": "Informacion del producto donde dira una breve descripcion del producto 2", "price": 150, "stock": 10, "imagen": "https://i.ibb.co/Czc0KJS/croqueta-2.jpg" },
  { "id": 3, "name": "Producto 3", "detail": "Informacion del producto donde dira una breve descripcion del producto 3", "price": 200, "stock": 8, "imagen": "https://i.ibb.co/qjTgLBc/croqueta-3.jpg" },
  { "id": 4, "name": "Producto 4", "detail": "Informacion del producto donde dira una breve descripcion del producto 4", "price": 250, "stock": 5, "imagen": "https://i.ibb.co/dL3jzzp/croqueta-4.png" },
  { "id": 5, "name": "Producto 5", "detail": "Informacion del producto donde dira una breve descripcion del producto 5", "price": 300, "stock": 55, "imagen": "https://i.ibb.co/9V09qWB/croqueta-5.jpg" }
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