import CartContext from "./cart-context";
import { useReducer } from "react";
//Here we manage the cart context data and provide it to all the components inside it that need it
const ACTIONS = {
    ADD_ITEM: 'ADD',
    REMOVE_ITEM: 'REMOVE'
}

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    switch(action.type){
        case ACTIONS.ADD_ITEM:
           
            const newAmount = state.totalAmount + action.item.price * action.item.amount;

            const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);

            const existingCartItem = state.items[existingCartItemIndex];

            let updatedItem;
            let updatedItems;

            if(existingCartItem){
                updatedItem = {
                    ...existingCartItem,
                    amount: existingCartItem.amount + action.item.amount
                }


                //Here we are copying the current array of items stored in the state
                updatedItems = [...state.items];

                //Then, because the item we're adding already exists in the array, we just access it and
                //Manually adjust the amount

                updatedItems[existingCartItemIndex] = updatedItem;
            } else {
                updatedItem = {
                    ...action.item
                }

                updatedItems = state.items.concat(updatedItem);
            }

            return {items: updatedItems, totalAmount: newAmount};
        

        case ACTIONS.REMOVE_ITEM:
            return "Remove";
        default:
            return state;
    }
}


const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    //We also want to make the item that we wish to add available to the reducer so we pass it in the object
    const addItemToCartHandler = (item) => {
        dispatchCartAction({type: ACTIONS.ADD_ITEM, item: item})
    }

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({type: ACTIONS.REMOVE_ITEM, id: id})
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;