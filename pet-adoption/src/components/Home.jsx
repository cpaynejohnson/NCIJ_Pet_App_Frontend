import React from 'react';
import Hero from './Hero';
import SearchBar from './SearchBar';
import DogsList from './DogsList';

function Home(props) {
    return (
        <div>
            <Hero/>
            <SearchBar/>
            <DogsList/>   
        </div>
    );
}

export default Home;