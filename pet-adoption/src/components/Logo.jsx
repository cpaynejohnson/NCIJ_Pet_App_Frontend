import React from 'react';
import {Container, Row, Col, Image } from 'react-bootstrap';

function Logo() {
    return (
        <div>
          <Container>
       <Row className="p-4 my-5">
        <Col sm={6}>
          <Image 
            src="/images/pets.png" alt="pet-logo" 
            fluid 
            rounded
          />
        </Col>
        <Col sm={6}>
          <h1>Helping Dogs Find Their "Forever" Home!</h1>
          <p>
            We have been helping dogs find their home at the end of the rainbow since 2008. 
          </p>
          {/* <Button>About Us</Button> */}
        </Col>
      </Row>
      </Container>
        </div>
    );
}

export default Logo;