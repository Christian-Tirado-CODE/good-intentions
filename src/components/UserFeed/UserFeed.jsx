 import React from 'react';
import UserFeedIdentity from './UserFeedIdentity/UserFeedIdentity';
import UserFeedPosts from './UserFeedPosts/UserFeedPosts';
import classes from './UserFeed.module.css';
import UserFeedRecommendations from './UserFeedRecommendations/UserFeedRecommendations';


const UserFeed = () => {
    return (
        <div className={classes.UserFeed}>
            <UserFeedIdentity />
            <UserFeedPosts/>
            <UserFeedRecommendations />
        </div>
    );
};

export default UserFeed;