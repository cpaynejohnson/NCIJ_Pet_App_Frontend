import React from 'react';
import Dog from './dog';

function DogsList(props) {
    //maps through list of dogss, creating a component for each
    return (
        <div>
            {props.dogs.map((dog)=>{
                return <Dog key={dog.id} dog={dog}/>
            })}
        </div>
    );
}

export default DogsList;