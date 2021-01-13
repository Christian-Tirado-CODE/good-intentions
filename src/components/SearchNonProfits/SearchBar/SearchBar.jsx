import React from 'react';
import classess from './SearchBar.module.css';

const searchBar = (props) => {
  
        return (
            <div className={classess.SearchBarContainer}>
            <input className={classess.SearchBar} value={props.inputValue} onChange={props.handleChange} onKeyDown={props.searchCategoryHandler} placeholder="Enter a Category Or Choose From Below"/>
            </div>
        );
    
}

export default searchBar;