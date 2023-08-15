import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Navbar, Nav, Container } from 'react-bootstrap'; // Import Bootstrap components
import './Header.css'
import { useState } from 'react';
import Info from './Info';
import Skills from './contact';
import FBSkills from './FBSkills';
import Qualification from '../Qualification/Qual';
import Project from '../Project/Project';


function Header() {


  
    const [skill, setSkill] = useState(false);

    const ShowSkill = () => { setSkill(true);}
    function CloseSkill() { setSkill(false); }
  
const styleMe = {
  backgroundColor :'#ADD8E6',
  

};

  function handleClickHome(event) {
    //event.preventDefault();
    const classNameElement = document.querySelector('.Head1'); // Replace 'classname' with the actual class name you want to scroll to
    if (classNameElement) {

      classNameElement.scrollIntoView({ behavior: 'smooth' });
    }


  }
const handleClickProject = (event) => {
  //event.preventDefault();

  const classNameElement = document.querySelector('#head'); // Replace 'classname' with the actual class name you want to scroll to
  if (classNameElement) {
 
    classNameElement.scrollIntoView({ behavior: 'smooth' });
  }
 
  };
const handleClickSkill = (event) => {
  //event.preventDefault();
  const classNameElement = document.querySelector('.skill-container'); // Replace 'classname' with the actual class name you want to scroll to
  if (classNameElement) {
    classNameElement.scrollIntoView({ behavior: 'smooth' });
  }
};
const handleDownload = () => {
  const resumeFilePath = '/Madhu_CV.pdf';
  const link = document.createElement('a');
  link.href = resumeFilePath;
  link.download = 'Resume.pdf'; 
  link.click();
  };


  return (
      <>
          <Navbar expand="lg" id="Style">
          <Container>
            <Navbar.Brand href="#home" className="me" >WELCOME TO MY PORTFOLIO</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <br></br>
              <br></br>
              <Nav className="me-auto">
                <Nav.Link onClick={handleClickSkill} className="me-auto">Skills</Nav.Link>
                <Nav.Link onClick={handleClickHome} className="me-auto" >Experience & Education </Nav.Link>
                <Nav.Link onClick={handleClickProject} className="me-auto" >Project </Nav.Link>
                <Nav.Link onClick={ShowSkill} className="me-auto"> Contact</Nav.Link>
                <button onClick={handleDownload}>Download CV</button> 
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Skills Show={skill} handleClose={CloseSkill}></Skills>
        
      </>

    
  );
}

export default Header;
