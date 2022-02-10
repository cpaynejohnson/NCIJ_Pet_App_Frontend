import React, { useState, useEffect } from 'react';
import { useParams} from "react-router-dom";
import DogsList from './DogsList';

function Breed(props) {

     //get the id from the Route parameters
     let { breed } = useParams();
    console.log(breed);
    //name of the state,
    //function that sets state,
    const [breeds, setBreeds]=useState([])

  //function to fetch dogs and store in state
  async function fetchBreeds(){
    try{
        const response = await fetch(`http://localhost:3000/breed/${breed}`, {
          method: 'GET'
        });
        const responseJSON = await response.json()
        console.log(responseJSON);
        //updates state with dog list
        setBreeds(responseJSON.dogByBreed)
        } catch(err) {
      console.log(err)
      }
    }
    

  //upon initial render, run the fetchBreeds() function
  useEffect(() => {
    fetchBreeds()
  }, [])

    return (
        breeds
        ? 
       <DogsList dogs={breeds}/>
        :
        <p>loading..</p>
    );
}

export default Breed;