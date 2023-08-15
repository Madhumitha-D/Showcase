import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './contact.css';

const Skills = ({ Show, handleClose }) => {
    
return (
    <>
        
      <Modal show={Show} onHide={handleClose} >
      <Modal.Header closeButton>
          <Modal.Title >CONTACT DETAILS</Modal.Title>
        </Modal.Header>
            <Modal.Body id="Modal"> <dl>
                  <dt>whatsapp number</dt>
                  <dd>- 8838564440</dd>
                  <dt>Mail ID</dt>
                  <dd>-madhumithadhayalan@gmail.com</dd>
                  <dt><a href="https://www.linkedin.com/in/madhumithadhayalan/">Linked In</a></dt>
                  <dt><a href="https://github.com/Madhumitha-D">Git hub</a></dt>
               </dl>     
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} id="Modal">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Skills;