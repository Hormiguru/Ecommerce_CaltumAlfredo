import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from '../src/containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './containers/itemDetailContainer/itemDetailContainer.jsx';

// importamos el navBar
import NavBar from './components/NavBar/NavBar'



// importamos de router-dome
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import CartContainer from './containers/cartContainer/cartContainer';
import CartContextProvider from './context/CartContext';




function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <div className="App">
          <NavBar />
          <Routes>
            <Route index path='/' element={<ItemListContainer />} />  {/* greeting='Saludos humano' */}
            <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/items' element={<ItemListContainer />} />
            {/* el cart */}
            <Route path='/cart' element={<CartContainer />} />
            {/* si no existe ve a  */}
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </div>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
