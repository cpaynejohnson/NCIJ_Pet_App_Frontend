<<<<<<< HEAD
import React from 'react';
import {Accordion, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function DogAdoption(props) {

    return (
 <Container className = 'Accordion-container'>
    <div className = 'Accordion-size'> 
    <Accordion defaultActiveKey="0">
        <Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header><h4>Dog Details</h4></Accordion.Header>
    <Accordion.Body className = 'Accordion-body'>
        <p className = 'Accordion-text'> <b>Purpose:</b> {props.dog.purpose} </p>
        <p className = 'Accordion-text'> <b>Breed:</b> {props.dog.breed} </p>
        <p className = 'Accordion-text'> <b>Color:</b> {props.dog.color} </p>
        <p className = 'Accordion-text'> <b>Size:</b> {props.dog.size} </p>
        <p className = 'Accordion-text'> <b>Gender:</b> {props.dog.gender} </p>

    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header><h4>Adoption Process</h4></Accordion.Header>
    <Accordion.Body className = 'Accordion-body'>
                    
        <p className = 'Accordion-text'> <b>1.</b> Submit Application </p>
        <p className = 'Accordion-text'> <b>2.</b> Meet the Dog </p>
        <p className = 'Accordion-text'> <b>3.</b> Home Check </p>         
                 
    </Accordion.Body>
  </Accordion.Item>
  </Accordion>
</Accordion>

</div>
</Container>
    );
   
    }

=======
import React from 'react';
import {Accordion, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function DogAdoption(props) {

    return (
 <Container className = 'Accordion-container'>
    <div className = 'Accordion-size'> 
    <Accordion defaultActiveKey="0">
        <Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header><h4>Dog Details</h4></Accordion.Header>
    <Accordion.Body className = 'Accordion-body'>
        <p className = 'Accordion-text'> <b>Purpose:</b> {props.dog.purpose} </p>
        <p className = 'Accordion-text'> <b>Breed:</b> {props.dog.breed} </p>
        <p className = 'Accordion-text'> <b>Color:</b> {props.dog.color} </p>
        <p className = 'Accordion-text'> <b>Size:</b> {props.dog.size} </p>
        <p className = 'Accordion-text'> <b>Gender:</b> {props.dog.gender} </p>

    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header><h4>Adoption Process</h4></Accordion.Header>
    <Accordion.Body className = 'Accordion-body'>
                    
        <p className = 'Accordion-text'> <b>1.</b> Submit Application </p>
        <p className = 'Accordion-text'> <b>2.</b> Meet the Dog </p>
        <p className = 'Accordion-text'> <b>3.</b> Home Check </p>         
                 
    </Accordion.Body>
  </Accordion.Item>
  </Accordion>
</Accordion>

</div>
</Container>
    );
   
    }

>>>>>>> f09eac3e5d628391de02cf0a91e2cab20a70405a
export default DogAdoption;