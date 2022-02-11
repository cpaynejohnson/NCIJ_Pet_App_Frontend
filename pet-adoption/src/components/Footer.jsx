import React from 'react';
import { Container } from 'react-bootstrap';


function Footer() {
    return (
        <div>
            <footer className="Head py-2 mt-5 mb-0">
            <Container className='px-5 pt-2'>
                <p className="text-center text-white">
                Copyright &copy; NCIJ Pet Adoptions 2022
                </p>
            </Container>
            </footer>
        </div>
    );
   }

   export default Footer;