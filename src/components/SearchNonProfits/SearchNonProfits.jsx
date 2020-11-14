import React from 'react';
import classes from './SearchNonProfits.module.css';
import CategoryOptions from './CategoryOptions/CategoryOptions';
const SearchNonProfits = () => {
    return (
        <div className={classes.BackGround}>
            <h1>Search Categories</h1>
            <CategoryOptions/>
        </div>
    );
};

export default SearchNonProfits;