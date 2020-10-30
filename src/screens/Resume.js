import React, {Component}  from 'react'
import classes from './Resume.module.css'
import Card from '../components/Card'



export class Resume extends Component {

   render() {

      return (
         <div>
            <div className={classes.Header}>
               <Card />
            </div>
            <div className={classes.resume}>
               <div className={classes.header}>
                  <div className={classes.title}>EMMANUEL AFOLABI OYEKAN</div>
                  <div className={classes.lining}></div>
               </div>
               <div className={classes.lining2}></div>
               <div className={classes.content}>
                  <div className={classes.left}>

                     <div className={classes.section}>
                        <span className={classes.sectionTitle}>CONTACT</span>
                        <div className={classes.sectionText}>
                           <div> <span className={classes.subsection}>Address: </span><br/> 17 Chief Yesufu Abiodun Oniru Road, Victoria Island, Lagos.</div>
                           <div> <span className={classes.subsection}>Phone:</span><br/> +234 909 333 1735</div>
                           <div> <span className={classes.subsection}>Email:</span><br/> <a href="mailto:emmanueloyekan33@gmail.com"> emmanueloyekan33@gmail.com</a> </div>
                           <div> <span className={classes.subsection}>Portfolio:</span><br/> bit.ly/oyekanPortfolio</div>
                        </div>   
                     </div>

                     <div className={classes.section}> 
                        <span className={classes.sectionTitle}>SKILLS</span>
                        <span className={classes.sectionText}>
                           <ul>
                              <li>SOFTWARE DEVELOPMENT</li>
                              <li>HTML</li>
                              <li>CSS</li>
                              <li>JAVASCRIPT</li>
                              <li>REACT</li>
                              <li>REACT NATIVE</li>
                              <li>ANGULAR</li>
                              <li>NODE JS</li>
                              <li>MICROSOFT POWER BI</li>
                           </ul>
                        </span>
                     </div>

                     <div className={classes.section}>
                        <span className={classes.sectionTitle}>ATTRIBUTES</span>
                        <span className={classes.sectionText}>
                           <ul>
                              <li>Excellent Communication skills</li>
                              <li>Excellent Time Management</li>
                              <li>Organizational and Analytical skills</li>
                              <li>Self-motivated and Target-oriented</li>
                              <li>Capacity to function in group or team settings</li>
                              <li>Leadership Skills</li>
                              <li>Performance Improvement</li>
                              <li>Integrity and Trustworthiness</li>
                           </ul>
                        </span>
                     </div>
                     
                     <div className={classes.section}>
                        <span className={classes.sectionTitle}>LEADERSHIP EXPERIENCE</span>
                        <span className={classes.sectionText}>
                           <ul>
                              <li>President, U-Genius Club, UI chapter (2017 - 2019)</li> 
                              <li>Director, Gospel Pillars Campus Fellowship, UI chapter (2018 - 2019)</li> 
                              <li>Head, H.S.S.E. Unit, Society of Petroleum Engineers, UI Chapter (2018 - 2020)</li> 
                           </ul>
                        </span>
                     </div>
                  </div>
         
         
                  <div className={classes.right}>
                     
                     <div className={classes.section}>
                        <div className={classes.sectionTitle}>PERSONAL PROFILE</div>
                        <div className={classes.sectionText}> Young Engineer seeking valuable working and learning
                        opportunity. <br/>
                        Effective planner and problem solver, able to learn quickly and
                        readily adapts to change. Work in a timely, efficient and effective
                        manner to complete tasks and providing solutions with a drive
                        to achieve positive impact on organisational growth. <br/>
                        Possess skill sets suitable for the modern workplace. Willing to
                        offer my full professional capacity in whichever way I may be of
                        service.
                        </div>
                     </div>
                     
                     <div className={classes.section}>
                        <div className={classes.sectionTitle}>WORK HISTORY</div>
                        <span className={classes.sectionSubTitle}>NNPC/DPR RELATIONS INTERN, <span className="indright">10/2018 to 04/2019</span></span><br/>
                        <span className={classes.sectionSubTitle}>CHEVRON NIGERIA LIMITED <span className="indright">- Lekki, LAGOS</span></span>
                        <span className={classes.sectionText}>
                           <ul>
                              <li>Facilitated Productive and Sustainable relationship between company and Government Bodies and other JV partners.</li> 
                              <li> Obtained Approvals, Licences and Permits from State and Federal agencies required for the progress and execution of Projects ranging up to millions of dollars.</li> 
                           </ul>
                        </span><br/>
                        <span className={classes.sectionSubTitle}>ASSET ENGINEERING INTERN, <span className="indright">02/2018 to 04/2018</span></span><br/>
                        <span className={classes.sectionSubTitle}>SEPLAT PETROLEUM DEVELOPMENT COMPANY <span className="indright">- Ikoyi, LAGOS</span></span>
                        <span className={classes.sectionText}>
                           <ul>
                              <li>Participated in daily activities to ensure Asset Integrity.</li> 
                              <li>Supported in execution of remedial activities to ensure optimal oil production.</li> 
                              <li>Assisted engineering and other personnel to solve operating problems.</li>
                           </ul>
                        </span>
                     </div>
                     
                     <div className={classes.section}>
                        <div className={classes.sectionTitle}>EDUCATION</div>
                        <span className={classes.sectionSubTitle}>Bachelor of Science: <span className="indright">PETROLEUM ENINEERING, 2020</span></span><br/>
                        <span className={classes.sectionSubTitle}>UNIVERSITY OF IBADAN <span className="indright">- Ibadan, OYO</span></span>
                        <span className={classes.sectionText}>
                           <ul>
                              <li> Second class Honours (Upper Division)</li>
                              <li> Dean's Honours List 2017/18 session</li>
                              <li> Dean's Honours List 2014/15 session</li>
                              <li> Recipient of AGBAMI scholarship</li>
                              <li> Recipient of TOTAL scholarship</li>
                           </ul>
                        </span><br/>
                        <span className={classes.sectionSubTitle}>GCSE: Jul 2014</span><br/>
                        <span className={classes.sectionSubTitle}> FEDERAL GOVERNMENT COLLEGE - LAGOS</span>
                        <span className={classes.sectionText}>
                           <ul>
                              <li> Obtained 7 A's out of 9 courses sat for in WAEC</li>
                              <li> Third Best Graduating Student 2013/2014 set</li>
                              <li> Awarded School Prize for Best Graduating Student in the  Further Mathematics, Physics and Book Keeping</li>
                              <li> Bronze Medallist Chemistry in 2014 Nigerian Mathematics and Science Olympiads (Lagos State)</li>
                           </ul>
                        </span>
                     </div>      
                                 
                  </div>
               </div>
            </div> 
         </div>
           
      );
   }
}



export default Resume;