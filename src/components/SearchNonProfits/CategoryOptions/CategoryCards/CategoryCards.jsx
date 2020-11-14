 
import classes from './CategoryCards.module.css';
import * as React from 'react';
import CategoryCard from '../CategoryCard/CategoryCard';
export const CategoryCards = (props) => {
    return (
        <div className={classes.CategoryCards}>
            {props.organizations.map(organization => <CategoryCard 
                            key={organization.id}
                            categoryCardImage={organization.imageLink}
                             categoryCardTitle={organization.name}
                             categoryCardDescription={organization.description}
                            />)}
        </div>
    );
};