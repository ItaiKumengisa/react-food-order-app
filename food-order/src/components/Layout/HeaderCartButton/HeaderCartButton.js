import React, {useContext} from 'react'; 
import CartIcon from '../../Cart/CartIcon';
import classes from './HeaderCartButton.module.css'
import CartContext from '../../../store/cart-context';

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);

    const reducer = (acc, item) => {
        return acc + item.amount;
    }

    const numberOfCartItems = cartCtx.items.reduce(reducer, 0);
    return <button className={classes.button} onClick={props.onClick}>
        {/* Icon */}
        <span className={classes.icon}>
            <CartIcon />
        </span>
        {/* Text */}
        <span >Your Cart</span>
        {/* Badge */}
        <span className={classes.badge}>
            {numberOfCartItems}
        </span>
    </button>
} 

export default HeaderCartButton;