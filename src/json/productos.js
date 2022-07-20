const productos = [
  { "id": 1, "name": "Producto 1", "price": 100, "stock": 15, "imagen": "https://i.ibb.co/7j6tb41/croqueta-1.jpg" },
  { "id": 2, "name": "Producto 2", "price": 150, "stock": 10, "imagen": "https://i.ibb.co/7j6tb41/croqueta-1.jpg" },
  { "id": 3, "name": "Producto 3", "price": 200, "stock": 8, "imagen": "https://i.ibb.co/7j6tb41/croqueta-1.jpg" },
  { "id": 4, "name": "Producto 4", "price": 250, "stock": 5, "imagen": "https://i.ibb.co/7j6tb41/croqueta-1.jpg" },
  { "id": 5, "name": "Producto 5", "price": 300, "stock": 55, "imagen": "https://i.ibb.co/7j6tb41/croqueta-1.jpg" }
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