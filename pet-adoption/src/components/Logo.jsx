import React from 'react';
import {Container, Row, Col, Image } from 'react-bootstrap';

function Logo() {
    return (
        <div className = "logo-slogan">
          <Container >
          <Row className="p-4 my-5" class = "logo-slogan">
              <Col sm={5}>
                <Image 
                  src="/images/pets.png" alt="pet-logo" 
                  fluid 
                  rounded
                />
              </Col> 
              <Col sm={7}  >
                <h1 className = "slogan-margin">Helping Dogs Find Their "Forever" Home!</h1>
               
                {/* <Button>About Us</Button> */}
              </Col>
              <Col sm={12}>
              <p className = "slogan-margin slogan-italic logo-b-margin">
                  We have been helping dogs find their home at the end of the rainbow since 2008. 
                </p>
              </Col>
            </Row>
      </Container>
        </div>
    );
}

export default Logo;