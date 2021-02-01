import React from 'react';
import classes from './NavLinks.module.css';
import {NavLink} from 'react-router-dom';
const NavLinks = props => {
    return (
        <ul className={classes.NavLinks}>
            <li>
                <NavLink to="/" exact>Log In</NavLink>
            </li>
            <li>
                <NavLink to="/">Log In</NavLink>
            </li>
            <li>
                <NavLink to="/">Log In</NavLink>
            </li>
        </ul>
    );
};

export default NavLinks;