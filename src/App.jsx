import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


import { ItemListcontainer } from "./components/ItemListContainer.jsx";
import {NavBar} from "./components/NavBar.jsx";

function App() {
  return (
   <>
       <NavBar />
       <ItemListcontainer greeting="Hola, Primera entrega!!!" />
   </>
   
   
  );
}

export default App;
