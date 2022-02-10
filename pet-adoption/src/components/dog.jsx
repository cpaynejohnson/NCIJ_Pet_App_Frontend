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
                {props.dog.tidbit}
                </Card.Text>
                <Button href={`/dogs/${props.dog.id}`} variant="primary">Meet {props.dog.name}</Button>
            </Card.Body>
           </Card>    
        
        </div>
    );
}

export default Dog;

