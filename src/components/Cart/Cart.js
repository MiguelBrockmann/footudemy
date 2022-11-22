import classes from './Cart.module.css'
import Modal from "../UI/Modal";
import {useContext} from "react";
import CartContext from "../../store/cart-context";

const Cart= props =>{
    const cartCtx = useContext(CartContext);
    const cartItems =(
        <ul className={classes['cart-tems']}>
            {cartCtx.items.map((item) =>(<li>{item.name}</li>
    ))}
        </ul>
);
        return(
            <Modal>
            {cartItems}
            <div className={classes.total}>
                <span> total amount</span>
                <span>35</span>
            </div>
            <div className={classes.actions}>
            <button className={classes["button-alt"]} onClick={props.hideModal}> close</button>
            <button className={classes.button}>order</button>
            </div>
            </Modal>
        );
};
export default Cart;
