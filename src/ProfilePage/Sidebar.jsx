import React from 'react';
import classes from './ProfilePage.css';

const Sidebar = () => {
    return (
        <div id="mySidebar" class="sidebar">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a>
  <a href="#">About</a>
  <a href="#">Services</a>
  <a href="#">Clients</a>
  <a href="#">Contact</a>
</div>
    );
};

export default Sidebar;