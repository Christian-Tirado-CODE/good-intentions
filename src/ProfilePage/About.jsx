import React from 'react';
import classes from './ProfilePage.css';

const About = () => {
    return (
        <div class="grid-container">
        <div class="grid-item">
        <h3>Mission</h3>
		<p>Transform Puerto Rico into a thriving destination for the world.</p>
        <h3>Purpose</h3>
		<p>Discover, link, and unleash Puerto Rico's potential as an active participant in the global economy. </p>
        <h3>Vision</h3>
		<p>A prosperous Puerto Rico that unleashes the talent, creativity, and passion of its people.</p>
        </div>
        <div class="grid-item">
        <iframe width="686" height="386" src="https://www.youtube.com/embed/AR_Ufjh1-Cc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
        </div>
        </div>
    );
};

export default About;