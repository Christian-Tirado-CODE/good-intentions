import React, { Component } from 'react';
import classess from './SearchBar.module.css';
class SearchBar extends Component {

    render() {
        return (
            <input className={classess.SearchBar}/>
        );
    }
}

export default SearchBar;