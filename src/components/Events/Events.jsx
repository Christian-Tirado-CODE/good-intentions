import classes from './Events.module.css';
import React from 'react';
import Event from  './Event/Event';

const Events = (props) => {
    const events = (props.events.map(org_event => 
       <Event 
          title={org_event.title}
          description={org_event.description}
          
       />))
    return (
        <div className={classes.Events}>
            {events}
        </div>
    );
};

export default Events;