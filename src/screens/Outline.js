import React, {Component}  from 'react'
import classes from  './Outline.module.css'
import Card from '../components/Card'
import Menu from '../components/Menu'




export class Outline extends Component {

   render() {

      return (
         <div className={classes.Outline}>
            <Card />
            
            <Menu />

            
         </div>
            
         
      );
   }

}

export default Outline