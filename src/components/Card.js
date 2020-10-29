import React from 'react'
import classes from './Card.module.css'



const Card = () => {
   
   return (
      <div className={classes.Card}>
         <div className={classes.ImageCont}></div>

         <div className={classes.Details}>
            <b className={classes.Name}>EMMANUEL OYEKAN</b><br/><br/>
            <span className={classes.Title} >WEB & MOBILE DEVELOPER</span>
         </div>
      </div>
   )
}

export default Card;