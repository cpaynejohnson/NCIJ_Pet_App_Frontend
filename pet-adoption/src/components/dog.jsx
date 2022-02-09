import React, {  } from 'react';

import {Card, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Dog(props) {
    
    
    //render the dog details
    return (
        <div className='Dog'>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.dog.image} />
            <Card.Body>
                <Card.Title>{props.dog.name}</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button href={`/dogs/${props.dog.id}`} variant="primary">Meet {props.dog.name}</Button>
            </Card.Body>
           </Card>    
        
        </div>
    );
}

export default Dog;

