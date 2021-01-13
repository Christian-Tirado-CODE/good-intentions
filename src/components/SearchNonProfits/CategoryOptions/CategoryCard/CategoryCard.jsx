import classes from './CategoryCard.module.css';
import React from 'react';
import {Link} from 'react-router-dom';
const categoryCard = (props) => {
    return (<Link to={"/organization/" + props.categoryCardTitle} style={{ textDecoration: 'none', color: 'black' }} key={props.id}>
        <div className={classes.CategoryCard}>
           
           <img src={require("../../../../img/" + props.categoryCardImage + ".jpg").default} className={classes.CategoryCardImage}/>
           <div className={classes.CategoryCardTextContainer}>
           <h2 className={classes.CategoryCardTitle}>{props.categoryCardTitle}</h2>
           <p className={classes.CategoryCardDescription}>{props.categoryCardDescription}</p>
           </div>
        </div>
        </Link>
    );
};

export default categoryCard;