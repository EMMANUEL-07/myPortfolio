import React, {Component} from 'react'
import Home from './Home'
import Projects from './Projects'
import Contact from './Contact'
import Resume from './Resume'
import { connect } from 'react-redux';
import classes from './Content.module.css'


class Content  extends Component  {



   render(){
      
      
      let Displayed = <Home />

      if(this.props.projects){
         Displayed = <Projects />
      }
      if(this.props.contact){
         Displayed = <Contact />
      }
      if(this.props.resume){
         Displayed = <Resume />
      }



      return (
         <div className={classes.Content}>
            {Displayed}   
         </div>
      )
   }

   
}

const mapStateToProps = state => {
   return {
    home: state.home,
    projects: state.projects,
    resume: state.resume,
    contact: state.contact
   };
};


export default connect(mapStateToProps)(Content);