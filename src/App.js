import logo from './logo.svg';
import './App.css';

import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Articles from './components/Articles/Articles';
import Article from './components/Articles/Article/Article'
import Programs from './components/Programs/Programs';
import Program from './components/Programs/Program/Program';
import ResearchPublications from './components/ResearchPublications/ResearchPublications';
import Careers from './components/Careers/Careers';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/articles' element={<Articles/>}/>
        <Route path='/article' element={<Article/>}/>
        <Route path='/programs' element={<Programs/>}/>
        <Route path='/program' element={<Program/>}/>
        <Route path='/research-and-publications' element={<ResearchPublications/>}/>
        <Route path='/careers' element={<Careers/>}/>
        <Route path='/registration-form' element={<RegistrationForm/>}/>
      </Routes>
    </div>
  );
}

export default App;
