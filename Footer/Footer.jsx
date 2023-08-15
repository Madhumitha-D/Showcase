import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

function Footer() {

  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Subject, setSubject] = useState('');
  const [Message, setMessage] = useState('');

  

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };
  async function handleSubmit(event) {
    event.preventDefault();
    // const datavalue=[Name,Email,Subject,Message];
    // const datavalue = { name: Name, email: Email, subject: Subject, message: Message };
    // const { name, email,subject, message } = event.target.elements;
        const datavalue = {
          name: Name,
          email: Email,
          subject:Subject,
          message: Message,
        };
        
    try {
      const response = await fetch('http://localhost:5000/Footer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datavalue),
      });
      console.log(datavalue);
      const data = await response.json();
      var mess = console.log(data); // Handle response data from backend
    }
    catch (error) {
      console.error(error);
    }
    // console.log(data)
  }
 

return (
  <>
    <br/><br/><br/><br/>
   
    <div class="footerStyle">
        <h1 id="head1">Get In Touch</h1>
        <br /><br />
    
    
        <form id="Forms"onSubmit={handleSubmit} >

          <label>Name:</label>
          <input type="text" placeholder='Name' onChange={handleNameChange}/><br /><br />
          <label>E-Mail:</label>
          <input type="email" placeholder='E-mail'  onChange={handleEmailChange} /><br /><br />
          <label>Subject:</label>
          <input type="text" placeholder='Subject of the message'  onChange={handleSubjectChange} /><br /><br />
          <label>Message:</label>
          <input placeholder='Message'  onChange={handleMessageChange} /><br /><br />
          <button type="submit">Send Message</button><br /><br/>

        </form>
      </div>
  
          <div className='footericons'>
          <div>
            <a href="https://www.instagram.com/" className='skilllevel'>Instagram</a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/madhumithadhayalan/" className='skilllevel'>LinkedIn</a>
          </div>
          <div>
            <a href="https://github.com/" className='skilllevel'>GitHub</a>
          </div>

        </div>

        <div className='footerrights'>
          <p>@madhumithadhayalan.  All rights reserved</p>
        </div>
    

  </>

);
}






export default Footer;
