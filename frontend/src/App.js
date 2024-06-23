import './App.css';
import Navegacion from './components/navegacion';
import Registro from './components/registro';
import { Home } from './components/home';
import Consulta from './components/consultar';
import { Contactar } from './components/contacto';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">        
        <Navegacion />
  
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/registro_page" element={<Registro />}></Route>
          <Route path="/consulta_page" element={<Consulta />}></Route>
          <Route path="/contacto_page" element={<Contactar />}></Route>
        </Routes>

        </BrowserRouter>
      
    </div>
  );
}

export default App;
