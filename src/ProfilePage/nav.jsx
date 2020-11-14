import React from 'react';
import classes from './ProfilePage.css';

const Nav = () => {
    return (
        <div class="topnav">
  <button class="openbtn" onclick="openNav()">☰ Open Sidebar</button> 
  <a class="active" href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
</div>
    );
};

export default Nav;