import MealItemForm from './MealItemForm/MealItemForm';
import classes from './MealItem.module.css'

const MealItem = props => {
    //Wrapping each meal item in a li because it's rendered in a ul
    const price = `$${props.price.toFixed(2)}`;
    return <li className={classes.meal}>
        <div>
            <h3 className={classes.name}>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
            {/*Here we'll have a component to hold our form  */}
            <MealItemForm id={props.id}/>
        </div>
    </li>
}
export default MealItem;