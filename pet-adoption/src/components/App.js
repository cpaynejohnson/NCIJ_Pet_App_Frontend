import React, { useState, useEffect } from 'react';
import DogsList from './DogsList';
import DogDetail from './DogDetail';
import Header from './Header';
import Logo from './Logo';
import Card1 from './Card1';
import Footer from './Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


//importing Routes and Route components from react-router-dom
import { Route, Routes } from 'react-router-dom';

function App() {

  //name of the state,
  //function that sets state,
  //default value of the state as an argument to useState
  const [dogs, setDogs]=useState([])

  //function to fetch dogs and store in state
  async function fetchDogs(){
    try{
        const response = await fetch('http://localhost:3000/dogs', {
          method: 'GET'
        });
        const responseJSON = await response.json()
        //updates state with sauce list
        setDogs(responseJSON)
        } catch(err) {
      console.log(err)
      }
    }
    

  //upon initial render, run the fetchDogs() function
  useEffect(() => {
    fetchDogs()
  }, [])

  //render a list of all dogs, using data from state

  //Routes contains all Route components
  //Each Route has a path (url) and element (component to render)
  return (
    <div className="App">
      <Header/>
      <Logo/>
      <Card1/>

        <Routes>
          <Route path='/' element={<DogsList dogs={dogs}/>}/>
          <Route path='/dogs' element={<DogsList dogs={dogs}/>}/>
          <Route path='/dogs/:id' element={<DogDetail/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
