import classes from './Cart.module.css';
import Modal from "../UI/Modal/Modal";
import CartContext from '../../store/cart-context';
import { useContext } from 'react';
import CartItem from './CartItem/CartItem';

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const onRemoveHandler = (id) => {
        cartCtx.removeItem(id)
    }

    const onAddHandler = (item) => {
        cartCtx.addItem({
            id: item.id,
            name: item.name,
            price: item.price,
            amount: 1
        })

    }

    const cartItems = <ul className={classes["cart-items"]}>
        {
            cartCtx.items.map(item =>
                <CartItem
                    key={item.id}
                    onRemove={onRemoveHandler.bind(null, item.id)}
                    onAdd={onAddHandler.bind(null, item)}
                    {...item}
                />
            )
        }
    </ul>;

    const hasItems = cartCtx.items.length > 0;

    return <Modal onClickBackDrop={props.onClose}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button onClick={props.onClose} className={classes["buttons--alt"]}>
                Close
            </button>
            {hasItems && <button className={classes.button}>
                Order
            </button>}
        </div>
    </Modal>
}

export default Cart;