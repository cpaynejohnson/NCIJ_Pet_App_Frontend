import React, { useState, useEffect } from 'react';
import { Link, useParams} from "react-router-dom";
import DogsList from './DogsList';

function Color(props) {

     //get the id from the Route parameters
     let { color } = useParams();
    console.log(color);
    //name of the state,
    //function that sets state,
    const [colors, setColors]=useState([])

  //function to fetch dogs and store in state
  async function fetchColors(){
    try{
        const response = await fetch(`http://localhost:3000/color/${color}`, {
          method: 'GET'
        });
        const responseJSON = await response.json()
        console.log(responseJSON);
        //updates state with dog list
        setColors(responseJSON.dogByColor)
        } catch(err) {
      console.log(err)
      }
    }
    

  //upon initial render, run the fetchBreeds() function
  useEffect(() => {
    fetchColors()
  }, [])

    return (
       
        colors
        ?
        <div> 
          <DogsList dogs={colors}/>
          <br/>
          <br/>
          <Link to="/">Back</Link>

        </div>
        :
        <p>loading..</p>
    );
}

export default Color;