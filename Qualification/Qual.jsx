import { useState } from 'react';
import './Qualification.css';
import Button from 'react-bootstrap/Button';
import ShowOne from './ShowOne';
import ShowTwo from './ShowTwo';
import ShowThree from './ShowThree';


function Qualification() {

    const[show, setshow] = useState(1);
    const[open, setShow] = useState(false);
    const[opentwo, setShowtwo] = useState(false);
    const[openthree, setShowthree] = useState(false);


    const toggle = (index) =>{
        setshow(index);
    };
   
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const handleShowTwo = () => setShowtwo(true);
    const handleCloseTwo = () => setShowtwo(false);

    const handleShowThree = () => setShowthree(true);
    const handleCloseThree = () => setShowthree(false);
  
return (

    <><section className='quali-section'>
        {/* <h2 className='section-title'>Qualification</h2>
    <span className='section-subtitle'>My Journey</span> */}

    <h1 className='Head1'>Experience & Education</h1><br/>

        <div className="quali-container">

            <div className="quali-tabs">
                <div
                    className={show === 1
                        ? "quali-button quali-active"
                        : "quali-button"}
                    onClick={() => toggle(1)}
                >
                    <b className="uil-graduation-cap"></b>{" "} Experience
                </div>
                <div
                    className={show === 2
                        ? "quali-button quali-active"
                        : "quali-button"}
                    onClick={() => toggle(2)}
                >
                    <b className="uil-briefcase-alt "></b>{" "} Education
                </div>

            </div>

            <div className="quali-section">

                <div
                    className={show === 1
                        ? "quali-content quali-content-active"
                        : "quali-content"}>

                    <div className="quali-data">
                        <div>
                            <h3 className="quali-title">Technical support - Intern</h3>
                            <span className="quali-subtitle">Securin.io</span>
                            <div className="quali-calender">
                                <i className="uil-calender-alt"></i> June 2023-July 2023
                            </div><br></br>
                            <div>
                                <Button variant="dark" size="sm" onClick={handleShow}><i class='bx bx-message-dots'></i>More Info</Button>
                            </div>

                        </div>
                        <div>
                            <span className="quali-rounder"></span>
                            <span className="quali-line"></span>
                        </div>
                    </div>


                  
                </div>

                <div
                    className={show === 2
                        ? "quali-content quali-content-active"
                        : "quali-content"}>

                    <div className="quali-data">
                        <div>
                            <h3 className="quali-title">Bachelor's Degree in Electronic and Communication Engineering</h3>
                            <span className="quali-subtitle">RMK College of Engineering and Technology</span>
                            <div className="quali-calender">
                                <i className="uil-calender-alt"></i> 2018 - 2022<br/>
                                <i className="uil-calender-alt"></i> 8.72 CGPA
                            </div>
                        </div>
                        <div>
                            <span className="quali-rounder"></span>
                            <span className="quali-line"></span>
                        </div>
                    </div>

                    <div className="quali-data">
                        <div></div>

                        <div>
                            <span className="quali-rounder"></span>
                            <span className="quali-line"></span>
                        </div>

                        <div>
                            <h3 className="quali-title">Higher Secondary School Certificate</h3>
                            <span className="quali-subtitle">Sethu Bhaskara Matric Hr Sec School</span>
                            <div className="quali-calender">
                                <i className="uil-calender-alt"></i> 2017-2018<br/>
                                <i className="uil-calender-alt"></i> 87.83%

                            </div>
                        </div>

                    </div>

                    <div className="quali-data">
                        <div>
                            <h3 className="quali-title">Secondary School Leaving Certificate</h3>
                            <span className="quali-subtitle">Sethu Bhaskara Matric Hr Sec School</span>
                            <div className="quali-calender">
                                <i className="uil-calender-alt"></i>2015-2016 <br/>
                                <i className="uil-calender-alt"></i> 92.6% 
                            </div>
                        </div>
                        <div>
                            <span className="quali-rounder"></span>
                            <span className="quali-line"></span>
                        </div>
                    </div>

                   

                    




                </div>



            </div>

        </div>
    </section>
    <ShowOne show={open} handleClose={handleClose} />
    <ShowTwo show={opentwo} handleClose={handleCloseTwo}/>
    <ShowThree show={openthree} handleClose={handleCloseThree}/>
    </>
  );
}

export default Qualification;