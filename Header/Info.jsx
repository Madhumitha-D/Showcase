import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Navbar, Nav, Container } from 'react-bootstrap'; // Import Bootstrap components
import './Header.css'



function Info(){

    return(
        <>

        <br></br>
        <br></br>
        <br></br>
    
        <div className="Auth-form-container">
            <form className="Auth-form">
              <div className="Auth-form-content">
                <h4 id="Auth-form-title"> D Madhumitha </h4>
                  <div id="text-center">
                  Motivated and detail-oriented entry-level professional with a passion for
learning, aiming to leverage skills and bring fresh perspectives to contribute to
organizational success. Eager to apply my strong technical skills, problem solving abilities, and passion for coding to contribute to the development of
company success. Committed to continuous learning and growth in a dynamic
and collaborative work environment.
                 </div><br></br>
              </div>
            </form>
      </div>
       
      {/* <h1 id="EE"> Experience & Education </h1>

      <br></br>
        <br></br>
        <br></br> */}

        {/* <div className="Auth-form-container2">

            <form className="Auth-form">
              <div className="Auth-form-content">
                <br/>
                <h4 className="text-center"><strong>WORK EXPERIENCE</strong></h4>
                  <div className="text-center">
                  
                  <dl>
                    <dt>Technical support - Intern</dt>
                    <dd>Securin.io (2023 - present)
                        <dd>Proficiently troubleshoot issues using Linux commands, demonstrating
                        expertise in utilizing nmap for network analysis.</dd>
                        <dd>Conduct regular and thorough analyses using Zoho Analytics to efficiently
                        track and manage tickets.</dd>
                        <dd>Skillfully utilize the ASM platform to grant users access to customer data
                        as required.</dd>
                      </dd><br/>
                      <h4 className="text-center"><strong>EDUCATION</strong></h4>
                    <dt>BE - Electronics and Communication Engineering</dt>
                      <dd>- RMK College of Engineering and Technology <br/>2018-2022 <br/> 8.72 CGPA</dd>
                    <dt>Higher Secondary School Certificate</dt>
                      <dd>Sethu Bhaskara Matric Hr Sec School<br/>2017-2018<br/>87.83%</dd>
                    <dt>Secondary School Leaving Certificate</dt>
                      <dd>Sethu Bhaskara Matric Hr Sec School<br/>2015-2016<br/>92.6%</dd> 
                </dl>     
              
                </div>
              </div>
            </form>
      </div> */}
       
        
      </>

    );

}
export default Info;