import React from 'react';
import classes from './UserFeedRecommendation.module.css';
import Aux from '../../../../hoc/Auxiliary';
const UserFeedRecommendation = () => {
    return (
            <Aux>

                <div className={classes.UserFeedRecommendation}>
                     <div className={classes.UserFeedRecommendationLogo}></div>
                    <div>
                    <div className={classes.UserFeedRecommendationName}>Foundation For Puerto Rico</div>
                    <div className={classes.UserFeedRecommendationDescription}>Tourism</div>
                    <button className={classes.UserFeedRecommendationFollowAction}> + Follow</button>
                    </div>
                    
                </div>
            </Aux>
            
    );
};

export default UserFeedRecommendation;