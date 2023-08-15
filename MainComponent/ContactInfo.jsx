import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Figure from 'react-bootstrap/Figure';
import image from './Madhu.jpg'
import './ContactInfo.css'

export function Contact() {
    return(
        
        <>
        <Container className="container">
          <Figure>
            <Figure.Image
              width={200}
              left={500}
              height={230}
              alt="171x180"
              src={image} 
              className="right-corner" />
          </Figure>
        </Container></>





    );
    

}

export default Contact;