import React, {Component} from 'react'
import classes from './Card.module.css'
import { HiMenuAlt3 } from "react-icons/hi";
import { connect } from 'react-redux';
import Menu from './Menu'


class Card  extends Component {
   
   MenuToggle = () => {
      this.props.onMenuToggle()
   }

   render(){
      return (
         <div className={classes.Card}>
            <div className={classes.ImageCont}></div>
   
            <div className={classes.Details}>
               <b className={classes.Name}>EMMANUEL OYEKAN</b><br/><br/>
               <span className={classes.Title} >WEB & MOBILE DEVELOPER</span>
               
            </div>
   
            <div className={classes.ham} onClick={this.MenuToggle} > <HiMenuAlt3 /> </div>
            {this.props.menuTog ? <Menu /> : null}
         </div>
      )
   }
   
}

const mapStateToProps = state => {
   return {
      menuTog: state.menuTog
   };
};

const mapDispatchToProps = dispatch => {
   return {
      onMenuToggle: () => dispatch({type: 'MENUTOGGLE'})
   };
};


export default connect(mapStateToProps, mapDispatchToProps)(Card);