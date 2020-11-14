import React from 'react';
import classes from './SearchNonProfits.module.css';
import CategoryOptions from './CategoryOptions/CategoryOptions';
import SearchBar from './SearchBar/SearchBar';
const SearchNonProfits = () => {
    return (
        <div className={classes.BackGround}>
            <SearchBar />
            <CategoryOptions />
        </div>
    );
};

export default SearchNonProfits;