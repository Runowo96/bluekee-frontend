import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import NavBar from './Components/NavBar/NavBar';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  return (
<>
  <BrowserRouter>
  <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>
  </BrowserRouter>
</>
  );
}

export default App;
