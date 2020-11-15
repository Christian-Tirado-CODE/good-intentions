import classes from './Post.module.css';
import React from 'react';

const Post = (props) => {
    return (
        <div className={classes.Post}>
            <div className={classes.PostImage}><p className={classes.ImageSize}>718 X 300</p></div>
            <div className={classes.PostText}>
            <h2>{props.title}</h2>
            <p>{props.body}</p>
            </div>
            
        </div>
    );
};

export default Post;