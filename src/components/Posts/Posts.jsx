import classes from './Posts.module.css';
import React from 'react';
import Post from './Post/Post';
const Posts = (props) => {
    const posts = (props.posts.map(post =>  <Post title={post.title} body={post.description} />));
    return (
        <div className={classes.Posts}>
            {posts}
        </div>
    );
};

export default Posts;