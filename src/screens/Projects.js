import React, {Component}  from 'react'
import classes from './Projects.module.css'
import projectBasic1 from '../assets/projectBasic1.jpg';
import projectBasic2 from '../assets/projectBasic2.jpg';
import burgerDelight from '../assets/burgerDelight.jpg';
import myPortfolio from '../assets/myPortfolio.jpg';
import makeHay from '../assets/makeHay.jpg';
import letsChat from '../assets/letsChat.jpg';
import comingSoon from '../assets/comingSoon.jpg';
import tummyExpress from '../assets/tummyExpress.png';
import homiesCart from '../assets/homiesCart.png';


export class Projects extends Component {

   render() {

      return (
         <div className={classes.Projects}>

            <div>
               <div className={classes.Title}> MY PROJECTS </div>
               <div className={classes.SubTitle}> Sample Projects to display understanding of core concepts </div>
            </div>

            <div>
               <div className={classes.TechTitle}>BASIC TECHNLOGIES <br/> <small><small><i>(HTML, CSS and a little JavaScript)</i></small></small></div>
               
            </div>
            <div className={classes.ProjectLane} >
               <div className={classes.ProjectCard} >
                  <img src={projectBasic1} alt="projectBasic1" className={classes.ProjectImage} />
               </div>

               <div className={classes.ProjectCard} >
                  <img src={projectBasic2} alt="projectBasic2" className={classes.ProjectImage} />
               </div>
            </div>
            <div className={classes.ProjectText}>A  simple fully responsive site accomodating different device screens with the use of media queries, flexbox without employing the use of frameworks.</div>



            <div>
               <div className={classes.TechTitle}>ANGULAR</div>
            </div>
            <div className={classes.ProjectLane} >
               <div className={classes.ProjectCard} >
                  <img src={comingSoon} alt="comingSoon" className={classes.ProjectImage} />
                  <div className={classes.ProjectTitle}>Coffee Supreme</div>
               </div>
               <div className={classes.ProjectCard} >
                  <div className={classes.ProjectImage}></div>
               </div>
            </div>
            <div className={classes.ProjectText}>A  single page fully responsive site accomodating different device screens with the use of media queries, flexbox without employing the use of frameworks.</div>
            
            

            <div>
               <div className={classes.TechTitle}>REACT</div>
               
            </div>
            <div className={classes.ProjectLane} >
               <div className={classes.ProjectCard} > 
                  <a href="https://react-my-burger-4b5dc.web.app" rel="noopener noreferrer" target="_blank" > 
                     <img src={burgerDelight} alt="burgerDelight" className={classes.ProjectImage} />
                  </a>
                  <div className={classes.ProjectTitle}>
                     <a href="https://github.com/EMMANUEL-07/burger-delight" rel="noopener noreferrer" target="_blank"> Burger Delight</a>
                  </div>
               </div>
               <div className={classes.ProjectCard} > 
                  <img src={myPortfolio} alt="myPortfolio" className={classes.ProjectImage} />
                  <div className={classes.ProjectTitle}>
                     <a href="https://github.com/EMMANUEL-07/myPortfolio" rel="noopener noreferrer" target="_blank"> My Portfolio</a>
                  </div>
               </div>
            </div>
            <div className={classes.ProjectText}>
               Some of the Skillset Employed: 
               <ul className={classes.GridCont}>
                  <li>Reusable components</li>
                  <li>Redux</li>
                  <li>Routing</li>
                  <li>Http Requests</li>
                  <li>Lifecycle Methods</li>
                  <li>Context</li>
                  <li>Hooks</li>
                  <li>Authentication</li>
                  <li>Form Validation</li>
                  <li>H.O.C.</li>
               </ul>   
            </div>



            <div>
               <div className={classes.TechTitle}>REACT NATIVE</div>
            </div>
            <div className={classes.ProjectLane} >
               <div className={classes.ProjectCard} >
                  <a href="https://expo.io/@cherish12t/projects/homies-Cart" rel="noopener noreferrer" target="_blank" > 
                     <img src={homiesCart} alt="homiesCart" className={classes.ProjectImage} />
                  </a>
                  <div className={classes.ProjectTitle}>
                     <a href="https://github.com/EMMANUEL-07/homiesCart" rel="noopener noreferrer" target="_blank"> Homie's Cart</a>
                  </div>
               </div>
               <div className={classes.ProjectCard} >
                  <a href="https://expo.io/@cherish12t/projects/tummy-Express" rel="noopener noreferrer" target="_blank" > 
                     <img src={tummyExpress} alt="tummyExpress" className={classes.ProjectImage} />
                  </a>
                  <div className={classes.ProjectTitle}>
                     <a href="https://github.com/EMMANUEL-07/tummyExpress" rel="noopener noreferrer" target="_blank"> Tummy Express</a>
                  </div>
               </div>
               <div className={classes.ProjectCard} >
                  <img src={comingSoon} alt="comingSoon" className={classes.ProjectImage} />
                  <div className={classes.ProjectTitle}>Travel Memory</div>
               </div>
            </div>
            <div className={classes.ProjectText}>
               Some of the Skillset Employed: 
               <ul className={classes.GridCont}>
                  <li>State Management</li>
                  <li>Publishing</li>
                  <li>Over-the-Air Updates</li>
                  <li>Push Notifications</li>
                  <li>Native Device Features</li>
                  <li>Maps</li>
                  <li>Authentication</li>
                  <li>React Navigation v4 & v5</li>
               </ul>   
            </div>
           
           

            <div>
               <div className={classes.TechTitle}>NODE</div>
            </div>
            <div className={classes.ProjectLane} >
               <div className={classes.ProjectCard} >
                  <a href="https://oyekan-weather-app.herokuapp.com" rel="noopener noreferrer" target="_blank" > 
                     <img src={makeHay} alt="makeHay" className={classes.ProjectImage} />
                  </a>
                  <div className={classes.ProjectTitle}>
                     <a href="https://github.com/EMMANUEL-07/node-173learn" rel="noopener noreferrer" target="_blank"> Make Hay</a>
                  </div>
               </div>
               <div className={classes.ProjectCard} >
                  <a href="https://oyekan-chat-app.herokuapp.com" rel="noopener noreferrer" target="_blank" > 
                     <img src={letsChat} alt="letsChat" className={classes.ProjectImage} />  
                  </a>
                  <div className={classes.ProjectTitle}>
                     <a href="https://github.com/EMMANUEL-07/chat-app" rel="noopener noreferrer" target="_blank"> Let's Chat</a>
                  </div>
               </div>
               
            </div>
            <div className={classes.ProjectText}>
               Some of the Skillset Employed: 
               <ul className={classes.GridCont}>
                  <li>Server</li>
                  <li>HTTP requests</li>
                  <li>CRUD Operations</li>
                  <li>Database Systems</li>
                  <li>Templating</li>
                  <li>use of API</li>
                  <li>Sending Mails</li>
                  <li>Authentication</li>
                  <li>LiveChat Communication</li>
                  <li>Testing</li>
                  <li>Deployment</li>
               </ul>   
            </div>
         </div>     
      );
   }
}



export default Projects