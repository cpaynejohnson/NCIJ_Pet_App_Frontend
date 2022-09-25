import React from 'react';
import Home from './Home';
import DogsList from './DogsList';
import DogDetail from './DogDetail';
import Breed from './Breed';
import Color from './Color';
import Size from './Size';
import Gender from './Gender';
import Header from './Header';
import Footer from './Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


//importing Routes and Route components from react-router-dom
import { Route, Routes } from 'react-router-dom';


function App() {
  //Routes contains all Route components
  //Each Route has a path (url) and element (component to render)
  return (
    
    <div className="App">
      <Header/>
        <div className= "body-height">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/dogs' element={<DogsList/>}/>
          <Route path='/dogs/:id' element={<DogDetail/>}/>
          <Route path='/breed/:breed' element={<Breed/>}/> 
          <Route path='/color/:color' element={<Color/>}/>
          <Route path='/size/:size' element={<Size/>}/>
          <Route path='/gender/:gender' element={<Gender/>}/>
        </Routes>
        </div>
      <Footer/>
    </div>
  );
}

export default App;
