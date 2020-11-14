import classes from './CategoryCard.module.css';
import React from 'react';

const categoryCard = (props) => {
    return (
        <div className={classes.CategoryCard}>
           
           <img src={require("../../../../img/" + props.categoryCardImage + ".jpg").default} className={classes.CategoryCardImage}/>
           <div className={classes.CategoryCardTextContainer}>
           <h2 className={classes.CategoryCardTitle}>{props.categoryCardTitle}</h2>
           <p className={classes.CategoryCardDescription}>{props.categoryCardDescription}</p>
           </div>
        </div>
    );
};

export default categoryCard;