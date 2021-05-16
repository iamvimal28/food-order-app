import React from 'react';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
    return <React.Fragment>
        <header className={classes.header}>
            <h1>Hot Meals</h1>
            <HeaderCartButton onCartClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="Hot Meals" />
        </div>
    </React.Fragment>
};

export default Header;