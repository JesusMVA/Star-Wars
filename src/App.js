import Home from "./pages/Home";
import Personajes  from "./pages/Personajes";
import DetallePersonaje from "./pages/DetallePersonaje";
import Planetas  from "./pages/Planetas";
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Personajes' element={<Personajes/>}/>
      <Route path='/Planetas' element={<Planetas/>}/>
      <Route path='/DetallePersonaje:id' element={<DetallePersonaje/>}/>
    </Routes>
  );
}

export default App;
