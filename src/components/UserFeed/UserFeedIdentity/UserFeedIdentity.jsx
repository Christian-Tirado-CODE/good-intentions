import React from 'react';
import classes from './UserFeedIdentity.module.css';

const UserFeedIdentity = () => {
    return (
        <div className={classes.FeedIdentity}>
                    <div className={classes.FeedIdentityPic}>

                    </div>
                    <div className={classes.FeedIdentityName}>Christian Tirado</div>
                    <div className={classes.FeedIdentityDescription}>Computer Science student at the University 
                    of Puerto Rico(Arecibo). Passionate and focused on front-end technologies: HTML, CSS, SASS, 
                    JavaScript, React and Git.</div>
            </div>
    );
};

export default UserFeedIdentity;