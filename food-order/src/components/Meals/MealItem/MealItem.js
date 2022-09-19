import MealItemForm from './MealItemForm/MealItemForm';
import classes from './MealItem.module.css';
import { useContext } from 'react';
import CartContext from '../../../store/cart-context';

const MealItem = props => {
    const cartCtx = useContext(CartContext);
    //Wrapping each meal item in a li because it's rendered in a ul
    const price = `$${props.price.toFixed(2)}`;

    const addItemToCartHandler = (enteredAmount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            // description: props.description,
            price: props.price,
            amount: enteredAmount
        })
    }

    return <li className={classes.meal}>
        <div>
            <h3 className={classes.name}>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
            {/*Here we'll have a component to hold our form  */}
            <MealItemForm id={props.id} onAddToCart={addItemToCartHandler}/>
        </div>
    </li>
}
export default MealItem;