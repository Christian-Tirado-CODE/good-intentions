import React, { Component } from 'react';
import classess from './SearchBar.module.css';
import axios from '../../../axios/axios-categories';
class SearchBar extends Component {
    state = {
        inputValue: ''
    };

    handleChange = (event) => {
        
        this.setState({inputValue: event.target.value});
      }

      searchCategoryHandler = (event) => {
            if(event.keyCode === 13){
                const inputCpy = "^" + event.target.value;
                let re = new RegExp(inputCpy, "i");
                axios.get('/organizations.json')
                .then(response => {
                  response.data.organizations.map(organization => {
                    
                       if(re.test(organization.category)){
                         console.log(organization.category);
                       }
                  });
                });
                
            }
      }
    

    render() {
        return (
            <div className={classess.SearchBarContainer}>
            <input className={classess.SearchBar} value={this.state.inputValue} onChange={this.handleChange} onKeyDown={this.searchCategoryHandler}/>
            </div>
        );
    }
}

export default SearchBar;