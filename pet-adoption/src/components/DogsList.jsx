import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Dog from './Dog';

function DogsList(props) {
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

    return (
    <Container>
        <Row className="dog-grid">
                {dogs.map((dog)=>{
                return (<Col xs={12} sm={6} lg={4}><Dog key={dog.id} dog={dog}/>
                    </Col>)         
            })}   
        </Row>
    </Container>
           
    );
}

export default DogsList;