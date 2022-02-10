import React, { useState, useEffect } from 'react';
import { useParams} from "react-router-dom";
import DogsList from './DogsList';

function Gender(props) {

     //get the id from the Route parameters
     let { gender } = useParams();
    console.log(gender);
    //name of the state,
    //function that sets state,
    const [genders, setGenders]=useState([])

  //function to fetch dogs and store in state
  async function fetchGenders(){
    try{
        const response = await fetch(`http://localhost:3000/gender/${gender}`, {
          method: 'GET'
        });
        const responseJSON = await response.json()
        console.log(responseJSON);
        //updates state with dog list
        setGenders(responseJSON.dogByGender)
        } catch(err) {
      console.log(err)
      }
    }
    

  //upon initial render, run the fetchBreeds() function
  useEffect(() => {
    fetchGenders()
  }, [])

    return (
        genders
        ? 
       <DogsList dogs={genders}/>
        :
        <p>loading..</p>
    );
}

export default Gender;