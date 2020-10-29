import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './Menu.module.css'




class Menu  extends Component {
   

   setHome = () => {
      this.props.onSetHome()
   }

   setProjects = () => {
      this.props.onSetProjects()
   }
   
   setResume = () => {
      this.props.onSetResume()
   }

   setContact = () => {
      this.props.onSetContact()
   }

   render(){

      return (
         <div className={classes.Menu}>
            <ul className={classes.List}>
               <li onClick={this.setHome} > HOME </li>
               <li onClick={this.setProjects} > PROJECTS </li>
               <li onClick={this.setResume} > RESUMÉ </li>
               <li onClick={this.setContact} > CONTACT </li>
            </ul>
            
         </div>
      )
   }
}

const mapStateToProps = state => {
   return {
      home: state.home,
      projects: state.projects,
      contact: state.contact
   };
};

const mapDispatchToProps = dispatch => {
   return {
      onSetHome: () => dispatch({type: 'HOME'}),
      onSetProjects: () => dispatch({type: 'PROJECTS'}),
      onSetResume: () => dispatch({type: 'RESUME'}),
      onSetContact: () => dispatch({type: 'CONTACT'})
   };
};


export default connect(mapStateToProps, mapDispatchToProps)(Menu);