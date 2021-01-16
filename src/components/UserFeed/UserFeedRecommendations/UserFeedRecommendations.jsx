import classes from './UserFeedRecommendations.module.css';
import React from 'react';
import UserFeedRecommendation from './UserFeedRecommendation/UserFeedRecommendation';

const UserFeedRecommendations = () => {
    return (
        <div className={classes.UserFeedRecommendations}>
        <h2 className={classes.UserFeedRecommendationHeader}>Add to your feed</h2>

            <UserFeedRecommendation />
        </div>
        
    );
};

export default UserFeedRecommendations;