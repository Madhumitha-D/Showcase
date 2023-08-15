import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './ShowOne.css';

const ShowOne = ({ show, handleClose }) => {
  
return (
    <>
      <Modal show={show} onHide={handleClose} >
      <Modal.Header closeButton>
          <Modal.Title >Summary</Modal.Title>
        </Modal.Header>
        <Modal.Body id="body1"> 
        <ul>
             <li>Proficiently troubleshoot issues using Linux commands, demonstrating expertise in utilizing nmap for network analysis</li>
             <li>Conduct regular and thorough analyses using Zoho Analytics to efficiently track and manage tickets</li>
             <li>Skillfully utilize the ASM platform to grant users access to customer data as required.</li>
        </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} id="body1">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ShowOne;