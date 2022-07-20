import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from '../src/containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './containers/itemDetailContainer/itemDetailContainer.jsx';
// importamos el navBar
import NavBar from './components/NavBar/NavBar'

// importamos de router-dome
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route index path='/' element={<ItemListContainer />} />  {/* greeting='Saludos humano' */}
          <Route path='/detalle/:id' element={<ItemDetailContainer />} />

        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
