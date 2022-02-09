import React from 'react';
import {Dropdown, DropdownButton, ButtonGroup} from 'react-bootstrap';


function SerachBar() {
    return (
      
        <>
        <h5 class="search-header">Search the Perfect Pet</h5>
        <div class="dog-profile-pic ">
            
            <img src="/images/dog-profile.png" class= "pro-img-size" alt="dog picture"></img>
          </div>
        
        <div class="search-box-flex">
          
          <div class = "search-dropdown-container">
            <div className="search-dropdown">
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
        </div>

          <div className="search-dropdown">
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
          </div>
        </div>
      <div class = "search-dropdown-container">
      <div className="search-dropdown" >
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
        </div>
        <div className="search-dropdown" >
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
        </div>
      </div>
        
          
        </div>
      </>

      
    );
}

export default SerachBar;