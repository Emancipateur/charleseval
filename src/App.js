import logo from './logo.svg';
import './App.css';
import Galerie from './pages/Galerie';

import Contact from './pages/Contact';
import { Route, Routes } from 'react-router';
import { BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import Prestation from './pages/Prestation';

function App() {
  return (

      <BrowserRouter >
     <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/galerie' element={<Galerie />}/>
        <Route path='/prestation' element={<Prestation />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
 </BrowserRouter>


  );
}

export default App;
