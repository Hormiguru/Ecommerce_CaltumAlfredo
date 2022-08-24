import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/itemDetail/itemDetail";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryProduct = doc(db, "items", id);
    getDoc(queryProduct).then((resp) =>
      setProducto({ id: resp.id, ...resp.data() })
    );
  }, [id]);

  return (
    <div className="text-center d-flex justify-content-center m-3">
      <ItemDetail producto={producto} />
    </div>
  );
};

export default ItemDetailContainer;
