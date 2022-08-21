import React, { useEffect, useState } from "react";

import {
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
  where,
} from "firebase/firestore";

import ItemList from "../../components/ItemList/ItemList";
// import { getFetch } from "../../json/productos";
import { useParams } from "react-router-dom";

// le ponemos la prop greeting
export const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState([true]);
  const { categoriaId } = useParams();

  useEffect(() => {
    const db = getFirestore();

    let queryProductsCollection = collection(db, "items");
    if (categoriaId) {
      queryProductsCollection = query(
        queryProductsCollection,
        where("categoria", "==", categoriaId),
        orderBy("price", "asc")
      );
    }

    getDocs(queryProductsCollection)
      .then((resp) =>
        setItems(resp.docs.map((prod) => ({ id: prod.id, ...prod.data() })))
      )
      .catch((error) => console.log(error))
      .finally(() => setLoading(false)); // se ejecuta siempre al final
  }, [categoriaId]);

  console.log(categoriaId);

  // useEffect(() => {
  //   if (categoriaId) {
  //     getFetch()
  //       // combierte productos en items
  //       .then((res) =>
  //         setItems(res.filter((producto) => producto.categoria === categoriaId))
  //       )
  //       .catch((error) => console.log(error))
  //       .finally(() => setLoading(false)); // se ejecuta siempre al final
  //   } else {
  //     getFetch()
  //       // combierte productos en items
  //       .then((res) => setItems(res))
  //       .catch((error) => console.log(error))
  //       .finally(() => setLoading(false)); // se ejecuta siempre al final
  //   }
  // }, [categoriaId]);
  /*Nota: Efectos despues del cierre de corchete:
    1. si no hay nada entre el corchete y el parentecis de cierre se repetira cada q se actualice
    2. si hay [] vacio se repite SOLO UNA VEZ
    3. si hay un nombre solo solo se repite cuando se cambia ese componente */

  return loading ? (
    <div>Cargando...</div>
  ) : (
    <div style={{ textAlign: "center", maginTop: 200 }}>
      {/* usamos la prop */}
      {greeting}
      <ItemList items={items} />
    </div>
  );
};
export default ItemListContainer;
