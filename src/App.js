import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from '../src/containers/ItemListContainer/ItemListContainer';
// importamos el navBar
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />  {/* greeting='Saludos humano' */}
    </div>
  );
}

export default App;
