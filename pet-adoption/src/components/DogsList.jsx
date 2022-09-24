import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Dog from './dog';

function DogsList(props) {
      return (
    <Container>
        <Row className="dog-grid">
                {props.dogs.map((dog)=>{
                return (<Col xs={12} sm={6} lg={4}><Dog key={dog.id} dog={dog}/>
                    </Col>)         
            })}   
        </Row>
    </Container>
           
    );
}

export default DogsList;