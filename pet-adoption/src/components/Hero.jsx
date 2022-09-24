import React from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';

function Hero(props) {
    return (
        <div>
            <div className = "logo-slogan ">
          <Container>
          <Row className="p-4 my-5" className = "logo-slogan ">
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

    <main className= "card1-width">
      <Row>
        <Card className="Card-custom text-white text-center mb-4">
          <Card.Body>
          <div> 
            <h4>
            All Pets Currently Available for Adoption
            </h4>
          </div>
          </Card.Body>
        </Card>
      </Row>
      </main>
            
        </div>


    );
}

export default Hero;

