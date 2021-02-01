import React, {useState} from 'react';
import MainHeader from './MainHeader/MainHeader';
import classes from './MainNavigation.module.css';
import {Link} from 'react-router-dom';
import SideDrawer from './SideDrawer/SideDrawer';
import NavLinks from './NavLinks/NavLinks';
import Backdrop from '../UIElements/Backdrop/Backdrop';

const MainNavigation = props => {
   const [drawerIsOpen, setDrawerIsOpen] = useState(false);
   
   const openDrawer = ()=> {
       setDrawerIsOpen(true);
   }
   const closeDrawer = ()=> {
       setDrawerIsOpen(false);
   }

    return (
        <React.Fragment>
        {drawerIsOpen && (<Backdrop onClick={closeDrawer}/>)}
        
        <SideDrawer show={drawerIsOpen}>
            <nav>
                <NavLinks/>
            </nav>
        </SideDrawer>
        
        <MainHeader>
            <div className={classes.HamburguerIcon} onClick={openDrawer}>
            <div className={classes.HamburguerIcon__Line}></div>
            <div className={classes.HamburguerIcon__Line}></div>
            <div className={classes.HamburguerIcon__Line}></div>
            </div>

           <Link to="/"><img src="logo.png" alt="" className={classes.MainNavigation__Logo}/></Link>
        </MainHeader>
        </React.Fragment>
    );
};

export default MainNavigation;