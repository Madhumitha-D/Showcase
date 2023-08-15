import React from 'react';
import './FBSkills.css';
import 'boxicons';


function Skill() {
   return (
      <>

         <h1 id="Skills">Skills</h1><br/><br/>

         <div class="skill-container">
            <div class="skill-box">
               <div class="skill-form">
                  <div class="skill-content">
                     <h6 className="skill-title">Frontend Developer</h6>
                     <br/>
                     <div className='skill-split'>
                        <div className='skill-group'>
                           <div className='skill-data'>

                              <div>
                                 <div id="img1"></div>
                                 <span className='skill-name'>HTML</span>
                                 <span id='skill-level'>Advanced</span>
                              </div>
                           </div>

                           <div className='skill-data'>

                              <div>
                              <div id="img2"></div>
                                 <span className='skill-name'>CSS</span>
                                 <span id='skill-level'>Advanced</span>
                              </div>
                           </div>
                           <div className='skill-data'>

                              <div>
                              <div id="img3"></div>
                                 <span className='skill-name'>Javascript</span>
                                 <span id='skill-level'>Advanced</span>
                              </div>
                           </div>
                           <div className='skill-data'>

                              <div>
                              <div id="img4"></div>
                                 <span className='skill-name'>React</span>
                                 <span id='skill-level'>Advanced</span>
                              </div>
                           </div>
                        </div>

                        <div className='skill-group'>
                           <div className='skill-data'>

                              
                           </div>
                           {/* <div className='skill-data'>
                         <i class='bx bxl-css3' ></i>
                         <div>
                            <h6 className='skill-name'>CSS</h6>
                            <span className='skill-level'>Intermediate</span>
                         </div>
                                </div>
                                <div className='skill-data'>
                         <i class='bx bxl-javascript' ></i>
                         <div>
                            <h6 className='skill-name'>JavaScript</h6>
                            <span className='skill-level'>Intermediate</span>
                         </div>
                                </div> */}
                        </div>

                     </div>


                  </div>
               </div>
            </div>
            <div class="skill-box">
               <div class="skill-form">
                  <div class="skill-content">
                     <h6 className="skill-title">Backend Developer</h6><br/>
                     <div className='skill-split'>
                        <div className='skill-group'>
                           <div className='skill-data'>

                              <div>
                              <div id="img5"></div>
                                 <span className='skill-name'>Python</span>
                                 <span id='skill-level'>Advanced</span>
                              </div>
                           </div>
                           <div className='skill-data'>

                              <div>
                              <div id="img6"></div>
                                 <span className='skill-name'>Java</span>
                                 <span id='skill-level'>Advanced</span>
                              </div>
                           </div>
                           <div className='skill-data'>

                              <div>
                              <div id="img7"></div>
                                 <span className='skill-name'>My SQL</span>
                                 <span id='skill-level'>Advanced</span>
                              </div>
                           </div>
                           <div className='skill-data'>

                              <div>
                              <div id="img8"></div>
                                 <span className='skill-name'>Node.js</span>
                                 <span id='skill-level'>Advanced</span>
                              </div>
                           </div>
                        </div>

                        {/* <div className='skill-group'>
                       <div className='skill-data'>
                         <i class='bx bxl-html5'></i>
                         <div>
                            <h6 className='skill-name'>HTML</h6>
                            <span className='skill-level'>Advanced</span>
                         </div>
                       </div>
                       <div className='skill-data'>
                         <i class='bx bxl-css3' ></i>
                         <div>
                            <h6 className='skill-name'>CSS</h6>
                            <span className='skill-level'>Intermediate</span>
                         </div>
                       </div>
                       <div className='skill-data'>
                         <i class='bx bxl-javascript' ></i>
                         <div>
                            <h6 className='skill-name'>JavaScript</h6>
                            <span className='skill-level'>Intermediate</span>
                         </div>
                       </div>
                            </div> */}


                     </div>

                  </div>
               </div>
            </div>
         </div>


      </>
   );
}

export default Skill;
