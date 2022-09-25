<<<<<<< HEAD
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

=======
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

>>>>>>> f09eac3e5d628391de02cf0a91e2cab20a70405a
export default DogsList;