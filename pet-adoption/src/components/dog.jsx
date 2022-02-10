import React, {  } from 'react';
import { Button, Card } from 'react-bootstrap';
import {Link} from 'react-router-dom';


function Dog(props) {
    
    
    //render the sauce details
    return (
        <div className='Dog'>
            <Card style={{ width: '100%' }}>
            <Card.Img variant="top" style= {{height:'350px'}} src={props.dog.image} />
            <Card.Body>
            <Card.Title>{props.dog.name}</Card.Title>   
            </Card.Body>
            </Card>
        {/* <h2 id="dog-name">{props.dog.name}</h2>
        <img className="dog-img" src={props.dog.image} alt={props.dog.name}/>
        <br/> */}
        <Link to={`/dogs/${props.dog.id}`}>Meet {props.dog.name}</Link>
        </div>
    );
}

export default Dog;