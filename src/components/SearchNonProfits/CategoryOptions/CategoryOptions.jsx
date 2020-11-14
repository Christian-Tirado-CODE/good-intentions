import classes from './CategoryOptions.module.css';
import React, { Component } from 'react';
import CategoryOption from './CategoryOption/CategoryOption';



class CategoryOptions extends Component {
    state = {
        categories: [
            "Politics",
            "Social",
            "Economics",
            "Environment",
            "Religion"
        ]
    }
    render() {
    let categories = (
        <div>{   /* ======= USE AUX INSTEAD OF DIV} ========= */}
        {this.state.categories.map(category => {
           return  <CategoryOption CategoryOptionName = {category}/>
        })};
        </div>
    );

        return (
            <div className={classes.CategoryOptions}>
                
            </div>
        );
    }
}

export default CategoryOptions;