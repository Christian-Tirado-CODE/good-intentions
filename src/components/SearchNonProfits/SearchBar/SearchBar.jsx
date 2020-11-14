import React from 'react';
import classess from './SearchBar.module.css';

const searchBar = (props) => {
  
        return (
            <div className={classess.SearchBarContainer}>
            <input className={classess.SearchBar} value={props.inputValue} onChange={props.handleChange} onKeyDown={props.searchCategoryHandler}/>
            </div>
        );
    
}

export default searchBar;