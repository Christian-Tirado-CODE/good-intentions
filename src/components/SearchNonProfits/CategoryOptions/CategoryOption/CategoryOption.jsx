import React from 'react';
import classes from './CategoryOption.module.css';
const CategoryOption = (props) => {
    return (
        <div className={classes.CategoryOption}>
             {props.categoryOptionName}
        </div>
    );
};

export default CategoryOption;