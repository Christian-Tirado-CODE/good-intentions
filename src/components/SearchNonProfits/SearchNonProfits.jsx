import {React, Component} from 'react';
import classes from './SearchNonProfits.module.css';
import CategoryOptions from './CategoryOptions/CategoryOptions';
import SearchBar from './SearchBar/SearchBar';
import axios from '../../axios/axios-categories';
import CategoryCard from './CategoryOptions/CategoryCard/CategoryCard';
import Aux from '../../hoc/Auxiliary';
class SearchNonProfits extends Component {
 state = {
    inputValue: '',
    filteredOrganizations: []
 }

    searchCategoryHandler = (event) => {
        const filteredOrganizations = [];
          if(event.keyCode === 13){
              const inputCpy = "^" + event.target.value;
              let re = new RegExp(inputCpy, "i");
              axios.get('/organizations.json')
              .then(response => {
               const organizations = response.data.organizations;
               organizations.map((organization, index) => {
                  if(!re.test(organization.category)){
                    organizations.splice(index, 1);
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
        let organizations = null;
        if(this.state.organizations){
             organizations = (
                <Aux>
                {this.state.organizations.map(organization => {
                    return <CategoryCard 
                            key={organization.id}
                            categoryCardImage={organization.imageLink}
                             categoryCardTitle={organization.title}
                             categoryCardDescription={organization.description}
                            />
                })}
                </Aux>
            );
        }
        return (
            <div className={classes.BackGround}>

                <SearchBar inputValue={this.state.inputValue} 
                handleChange={this.handleChange} 
                searchCategoryHandler={this.searchCategoryHandler}/>

                <CategoryOptions />

                {organizations}
            </div>
        );
    };
    
    }
   
export default SearchNonProfits;