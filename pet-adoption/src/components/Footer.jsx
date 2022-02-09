import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';


function Footer() {
    return (
        <div className="App">
            <footer class="Head py-2 mt-5 mb-0">
            <Container className='px-5 pt-2'>
                <p class="text-center text-white">
                Copyright &copy; NCIJ Pet Adoptions 2022
                </p>
            </Container>
            </footer>
        </div>
    );
   }

   export default Footer;