import React from 'react'; 
import CartIcon from '../../Cart/CartIcon';
import classes from './HeaderCartButton.module.css'
const HeaderCartButton = (props) => {
    return <button className={classes.button}>
        {/* Icon */}
        <span className={classes.icon}>
            <CartIcon />
        </span>
        {/* Text */}
        <span >Your Cart</span>
        {/* Badge */}
        <span className={classes.badge}>
            3
        </span>
    </button>
} 

export default HeaderCartButton;