import {  useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/itemDetail/itemDetail'
import { getFetch } from '../../json/productos';


const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const { id } = useParams();


  useEffect(() => {    
    getFetch()
    // combierte productos en items
    // .then((res) =>console.log(res))
    .then((res) => setProducto(res.find((prod) => prod.id === parseInt(id))))
    .catch((error) => console.log(error));
    
    }, [id]);

  return (
    <div className='text-center d-flex justify-content-center m-3'>
      <ItemDetail producto={producto} />
    </div>

  )
}

export default ItemDetailContainer