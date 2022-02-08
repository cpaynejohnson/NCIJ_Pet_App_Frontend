import React from 'react';
import { Card, Row, Badge } from 'react-bootstrap';
import './App.css';

function Card1() {
    return (

    <main>
      <Row>
        <Card className="Card-custom text-white text-center my-5 py-4">
          <Card.Body>
          <div> 
            <h1>
            All Pets Currently Available for Adoption<Badge></Badge>
            </h1>
          </div>
          </Card.Body>
        </Card>
      </Row>
      </main>
    );
}

export default Card1;