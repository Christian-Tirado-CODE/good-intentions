import React from 'react';
import classes from './CategoryOption.module.css';
const CategoryOption = (props) => {
    return (
        <div className={classes.CategoryOption}>
            <svg width="60" height="60"
  xmlns="http://www.w3.org/2000/svg">       
  <image href="https://www.flaticon.com/svg/static/icons/svg/784/784712.svg" height="60" width="60"/>
</svg>
             <h4>{props.categoryOptionName}</h4>
        </div>
    );
};

export default CategoryOption;