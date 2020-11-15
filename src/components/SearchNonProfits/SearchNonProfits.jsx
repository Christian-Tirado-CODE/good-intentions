import {React, Component} from 'react';
import classes from './SearchNonProfits.module.css';
import CategoryOptions from './CategoryOptions/CategoryOptions';
import SearchBar from './SearchBar/SearchBar';
import axios from '../../axios/axios-categories';
import CategoryCard from './CategoryOptions/CategoryCard/CategoryCard';
import Aux from '../../hoc/Auxiliary';
import { CategoryCards } from './CategoryOptions/CategoryCards/CategoryCards';


class SearchNonProfits extends Component {
 state = {
    inputValue: '',
    organizations: []
 }

    searchCategoryHandler = (event) => {
        
          if(event.keyCode === 13){
              // IF STRING EMPTY SET EMPTY ARRAY
              const organizations = [];
              const inputCpy = "^" + event.target.value;
              let re = new RegExp(inputCpy, "i");
              axios.get('/organizations.json')
              .then(response => {
               response.data.organizations.map((organization, index) => {
                  if(re.test(organization.category)){
                        organizations.push(organization);
                  }
               });
                this.setState({organizations: organizations});
              });
              
          }
          
    }

    handleChange = (event) => {
        
        this.setState({inputValue: event.target.value});
      }
        
    

    render(){
        
        return (
            <div>
                <SearchBar inputValue={this.state.inputValue} 
                handleChange={this.handleChange} 
                searchCategoryHandler={this.searchCategoryHandler}/>

            <CategoryOptions />

            <CategoryCards organizations = {this.state.organizations}/>
               
            </div>
        );
    };
    
    }
   
export default SearchNonProfits;