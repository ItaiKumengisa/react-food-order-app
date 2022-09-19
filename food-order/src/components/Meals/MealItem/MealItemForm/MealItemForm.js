import classes from './MealItemForm.module.css';
import Input from '../../../UI/Input/Input';
import { useContext, useRef, useState } from 'react';
import CartContext from '../../../../store/cart-context';
const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const cartCtx = useContext(CartContext);

    const amountInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        
        //This is the value from the input element that we are referring to w/ useRef
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        //Some validation to see whether the input value is valid
        if (
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 5
        ) {
            //At this point, if we ever get to this point, the form has been submitted and we should let the user
            //know that their input isn't valid
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    }

    return <form className={classes.form} onSubmit={submitHandler}>
        <Input ref={amountInputRef} label="Amount" input={{
            id: `amount_${props.id}`,
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1'
        }}
        />

        <button>+ Add</button>
        {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
}

export default MealItemForm;