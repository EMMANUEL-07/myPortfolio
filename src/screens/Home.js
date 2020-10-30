import React, {Component}  from 'react'
import classes from './Home.module.css'
import { FaSmileBeam } from 'react-icons/fa';
import { HiMenuAlt3 } from "react-icons/hi";
import { connect } from 'react-redux';
import Menu from '../components/Menu'




export class Home extends Component {

   MenuHToggle = () => {
      this.props.onMenuHToggle()
   }

   render() {

      return (
         
            
            <div className={classes.Home}>
               <div className={classes.hamCont}>
                  <div className={classes.ham} onClick={this.MenuHToggle} > <HiMenuAlt3 /> </div>
                  <div className={classes.menuHome}> {this.props.menuHTog ? <Menu /> : null} </div>
               </div>
               <div className={classes.HomeContent}>
               
                  <div className={classes.Intro}>
                     <div className={classes.Name}>Hi, I am Emmanuel, </div>
                     <div className={classes.Details}> a software developer with expertise in Web and Mobile Applications.</div>
                  </div>
                  
                  <div className={classes.Glad}> Really glad to have you on board <FaSmileBeam /></div>
               </div>
            </div>
            
         
      );
   }

}


const mapStateToProps = state => {
   return {
      menuHTog: state.menuHTog
   };
};

const mapDispatchToProps = dispatch => {
   return {
      onMenuHToggle: () => dispatch({type: 'MENUHTOGGLE'})
   };
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);