import React from 'react';
import {Dropdown, DropdownButton, ButtonGroup, Row, Col} from 'react-bootstrap';


function SerachBar() {
    return (
      <div className="searchbar-container">
        <Row>
       
          <Col xs={12} lg={6}>
          <div className="search-header-container">
            <h5 class="search-header">Search the Perfect Pet</h5>
        </div>
          
        <Row style={{maxWidth: '500px', margin:'0 auto'}}>
          <Col xs={12} sm={6} style={{margin:'10px 0'} }>
        {[DropdownButton,].map((DropdownType, idx) => (
              
              <DropdownType 
              as={ButtonGroup}
              key={idx}
              id={`dropdown-button-drop-${idx}`}
              size="lg"
              variant="light"
              title="Breed..."
              >
              <Dropdown.Item eventKey="1">Action</Dropdown.Item>
              <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
              <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
              <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
              </DropdownType>
        ))} 
          </Col>
          <Col xs={12} sm={6} style={{margin:'10px 0'}}>
        {[DropdownButton,].map((DropdownType, idx) => (
              
              <DropdownType 
              as={ButtonGroup}
              key={idx}
              id={`dropdown-button-drop-${idx}`}
              size="lg"
              variant="light"
              title="Color...."
              >
              <Dropdown.Item eventKey="1">Action</Dropdown.Item>
              <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
              <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
              <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
              </DropdownType>
        ))} 
          </Col>
          <Col xs={12} sm={6} style={{margin:'10px 0'}}>
        {[DropdownButton,].map((DropdownType, idx) => (
              
              <DropdownType 
              as={ButtonGroup}
              key={idx}
              id={`dropdown-button-drop-${idx}`}
              size="lg"
              variant="light"
              title="Size......."
              >
              <Dropdown.Item eventKey="1">Action</Dropdown.Item>
              <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
              <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
              <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
              </DropdownType>
        ))} 
          </Col>
          <Col xs={12} sm={6} style={{margin:'10px 0'}}>
        {[DropdownButton,].map((DropdownType, idx) => (
              
              <DropdownType 
              as={ButtonGroup}
              key={idx}
              id={`dropdown-button-drop-${idx}`}
              size="lg"
              variant="light"
              title="Gender"
              >
              <Dropdown.Item eventKey="1">Action</Dropdown.Item>
              <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
              <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
              <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
              </DropdownType>
        ))} 
          </Col>
        </Row>
          </Col>

          <Col xs={12} lg={6}>
          <div class="dog-profile-pic ">
            <img src="/images/dog-profile.png" class= "pro-img-size" alt="dog picture"></img>
        </div>
          </Col>
        </Row>
      </div>

      
    );
}

export default SerachBar;