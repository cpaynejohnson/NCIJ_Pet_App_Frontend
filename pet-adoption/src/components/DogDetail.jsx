import React, {useState,useEffect} from 'react';
import { Link, useParams } from "react-router-dom";

function DogDetail() {
    //get the id from the Route parameters
    let { id } = useParams();

    //dogState will store the specific dog we fetch
    const [dogState, setDogState]=useState({})

    //function to fetch dogs and store in state
    const fetchDogDetail = async () =>{
        try{
            console.log(id)
            const response = await fetch(`http://localhost:3000/dogs/${id}`, {
            method: 'GET'
            });
            const responseJSON = await response.json()
            //updates state with dog list
            console.log(responseJSON.singleDog)
            setDogState(responseJSON.singleDog)
        } catch(err) {
        console.log(err)
        }
    }
    
    //useEffect will call the fetchDogDetail when this component mounts
    useEffect(() => {
        fetchDogDetail()
    },[id])

    return (
        dogState
        ? 
        <div className='DogDetail'>
            <h2 id="dog-name">{dogState.name}</h2>
            <img className="dog-img" src={dogState.image} alt={dogState.name} />
            <br/>
            <br/>
            <button id="see-detail-btn" >See Details</button>
            <br/>
            <br/>
            <Link to="/">Back</Link>
            <br/>
            <br/>
        </div>
        :
        <p>loading..</p>

    );
}

export default DogDetail;