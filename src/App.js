import logo from './logo.svg';
import './App.css';

import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Article from './components/Articles/Articles';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/blog-article' element={<Article/>}/>
      </Routes>
    </div>
  );
}

export default App;
