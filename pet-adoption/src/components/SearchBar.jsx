import React from 'react';
import {Dropdown, DropdownButton, ButtonGroup, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function SearchBar(props) {
  // console.log(props)
  // console.log(props.dogs)
const breedArray=[];
const colorArray=[];
const sizeArray=[];
const genderArray=[];

props.dogs.map((dog)=>{
    if(!breedArray.includes(dog.breed)){
      breedArray.push(dog.breed)
    }
    if(!colorArray.includes(dog.color)){
      colorArray.push(dog.color)
    }
    if(!sizeArray.includes(dog.size)){
      sizeArray.push(dog.size)
    }
    if(!genderArray.includes(dog.gender)){
      genderArray.push(dog.gender)
    }
})
    return (

      <div className="Searchbar-container">
        <Row>
          <Col xs={12} lg={6}>
          <div className="Search-header-container">
            <h5 className="Search-header">Search the Perfect Pet</h5>
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
              {breedArray.map((breed,index)=>{
                return(
                  <Dropdown.Item  eventKey={index}> <Link className="Dropdown-content" to={`/breed/${breed}`}>{breed}</Link></Dropdown.Item>
                )

              })}
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
             {colorArray.map((color,index)=>{
                return(
                  <Dropdown.Item eventKey={index}> <Link className="Dropdown-content" to={`/color/${color}`}>{color}</Link></Dropdown.Item>
                )

              })}
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
              {sizeArray.map((size,index)=>{
                return(
                  <Dropdown.Item eventKey={index}> <Link className="Dropdown-content" to={`/size/${size}`}>{size}</Link></Dropdown.Item>
                )

              })}
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
              {genderArray.map((gender,index)=>{
                return(
                  <Dropdown.Item eventKey={index}> <Link className="Dropdown-content" to={`/gender/${gender}`}>{gender}</Link></Dropdown.Item>
                )

              })}
              </DropdownType>
        ))} 
          </Col>
        </Row>
          </Col>

          <Col xs={12} lg={6}>
          <div className="dog-profile-pic ">
            <img src="/images/dog-profile.png" className= "Pro-img-size" alt="dog picture"></img>
        </div>
          </Col>
        </Row>
      </div>

      
    );
 
}


export default SearchBar;