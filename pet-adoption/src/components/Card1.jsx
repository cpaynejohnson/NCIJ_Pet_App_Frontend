import React from 'react';
import { Card, Row, Badge } from 'react-bootstrap';
import './App.css';

function Card1() {
    return (

    <main class= "card1-width">
      <Row >
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
    );
}

export default Card1;