import logo from './logo.svg';
import './App.css';

import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutUs' element={<AboutUs/>}/>
      </Routes>
    </div>
  );
}

export default App;
