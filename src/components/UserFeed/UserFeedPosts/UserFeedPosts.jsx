import classes from './UserFeedPosts.module.css';
import React from 'react';
import UserFeedPost from './UserFeedPost/UserFeedPost';
const UserFeedPosts = () => {
    return (
         <div className={classes.UserFeedPosts}>
             <UserFeedPost />
         </div>
    );
};

export default UserFeedPosts;