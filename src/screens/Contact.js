import React, {Component}  from 'react'
import classes from './Contact.module.css'
import { IoMdMailOpen, IoLogoWhatsapp } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import Card from '../components/Card'



export class Contact extends Component {

   render() {

      return (
         <div>
            <div className={classes.Header}>
               <Card />
            </div>
            <div className={classes.Contact}>
               <div className={classes.Text}>
                  <div className={classes.Touch}> Want to get in touch? </div>

                  <div className={classes.Available}>
                     I am available for Fulltime Job Roles and also open to Collaborations. <br/> Response can be expected within 24hrs. 
                  </div>
               </div>
               <div className={classes.DetCard}>
                  <div className={classes.phone}>
                     <span className={classes.Iconsp}><FiPhoneCall /></span><br/>
                     <span>+234 909 333 1735</span>
                  </div>
                  <div className={classes.whatsapp}>
                     <span className={classes.Iconsw}><IoLogoWhatsapp /></span><br/>
                     <span> +234 708 903 3857</span>
                  </div>
                  <div className={classes.mail}>
                     <span className={classes.Iconsm}><IoMdMailOpen /> </span><br/>
                     <span className={classes.mails}>emmanueloyekan33@gmail.com</span>
                  </div>
               </div>
                  
            </div>
         </div>
            
         
      );
   }

}



export default Contact