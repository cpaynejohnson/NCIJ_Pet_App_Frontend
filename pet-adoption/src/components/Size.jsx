import React, { useState, useEffect } from 'react';
import { useParams} from "react-router-dom";
import DogsList from './DogsList';

function Size(props) {

     //get the id from the Route parameters
     let { size } = useParams();
    console.log(size);
    //name of the state,
    //function that sets state,
    const [sizes, setSizes]=useState([])

  //function to fetch dogs and store in state
  async function fetchSizes(){
    try{
        const response = await fetch(`http://localhost:3000/size/${size}`, {
          method: 'GET'
        });
        const responseJSON = await response.json()
        console.log(responseJSON);
        //updates state with dog list
        setSizes(responseJSON.dogBySize)
        } catch(err) {
      console.log(err)
      }
    }
    
  //upon initial render, run the fetchBreeds() function
  useEffect(() => {
    fetchSizes()
  }, [])

    return (
        sizes
        ? 
       <DogsList dogs={sizes}/>
        :
        <p>loading..</p>
    );
}

export default Size;