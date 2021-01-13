// @flow 
import classes from './Navbar.module.css';
import * as React from 'react';

const Navbar = () => {
    return (
        <div className={classes.Navbar}>
            <div className={classes.Container}>
            <img src={require("../../img/logo.png").default} className={classes.Logo}/>
            <div className={classes.ActionBtns}><button className={classes.Login}>Log In</button><button  className={classes.SignUp}>Sign Up</button></div>
            </div>
            
        </div>
    );
};
export default Navbar;