import classes from './CategoryOptions.module.css';
import React, { Component } from 'react';
import CategoryOption from './CategoryOption/CategoryOption';
import Aux from '../../../hoc/Auxiliary';


class CategoryOptions extends Component {
    state = {
        categories: [
            "Politics",
            "Social",
            "Economics",
            "Environment",
            "Religion",
            "Child abuse"
        ]
    }
    render() {
    let categories = (
        <Aux>{   /* ======= USE AUX INSTEAD OF DIV} ========= */}
        {this.state.categories.map(category => {
           return  <CategoryOption categoryOptionName = {category}/>
        })};
        </Aux>
    );

        return (
            <div className={classes.CategoryOptions}>
                {categories}
            </div>
        );
    }
}

export default CategoryOptions;