
import React, { useState, useEffect } from 'react';
import Hero from './Hero';
import SearchBar from './SearchBar';
import DogsList from './DogsList';

function Home(props) {
    //name of the state,
    //function that sets state,
    const [dogs, setDogs]=useState([])

  //function to fetch dogs and store in state
  async function fetchDogs(){
    try{
        const response = await fetch('http://localhost:3000/dogs', {
          method: 'GET'
        });
        const responseJSON = await response.json()
        //updates state with dog list
        setDogs(responseJSON)
        } catch(err) {
      console.log(err)
      }
    }
    

  //upon initial render, run the fetchDogs() function
  useEffect(() => {
    fetchDogs()
  }, [])

    return (
        <div>
            <Hero/>
            <SearchBar dogs={dogs}/>
            <DogsList dogs={dogs}/>   
        </div>
    );
}

export default Home;