import React, {  } from 'react';
import {Link} from 'react-router-dom';

function Dog(props) {
    
    
    //render the sauce details
    return (
        <div className='Dog'>
        <h2 id="dog-name">{props.dog.name}</h2>
        <img className="dog-img" src={props.dog.image} alt={props.dog.name} />
        <br/>
        <Link to={`/dogs/${props.dog.id}`}>Meet {props.dog.name}</Link>
        
        </div>
    );
}

export default Dog;