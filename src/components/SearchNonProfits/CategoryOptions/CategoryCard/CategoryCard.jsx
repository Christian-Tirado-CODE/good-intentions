import classes from './CategoryCard.module.css';
import React from 'react';
const categoryCard = (props) => {
    return (
        <div className={classes.CategoryCard}>
            {/* IMAGE, ORG.NAME, DESCRIPTION*/}
            <img src={props.imageLink} alt="" className={classes.categoryCardImage}/>
           <h2 className={classes.CategoryCardTitle}>{props.categoryCardTitle}</h2>
           <p className={classes.CategoryCardDescription}>{props.categoryCardDescription}</p>
        </div>
    );
};

export default categoryCard;