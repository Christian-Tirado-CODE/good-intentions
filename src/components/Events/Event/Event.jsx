import classes from './Event.module.css';
import React from 'react';

const Event = (props) => {
    return (
        <div className={classes.Event}>
            <div className={classes.LogoContainer}><img className={classes.Logo} src={require("../../../img/logo.png").default} alt=""/></div>
             <div className={classes.EventText}> 
        <h2 className={classes.EventTitle}>{props.title}</h2>
            <p className={classes.EventDescription}>{props.description}</p>
            <button className={classes.EventAction}>Ver mas</button>
            </div>
        </div>
    );
};

export default Event;