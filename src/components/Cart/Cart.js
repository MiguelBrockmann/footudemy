import classes from './Cart.module.css'
import Modal from "../UI/Modal";

const Cart= props =>{
    const cartItems =( //raff ich njet
        <ul className={classes['cart-tems']}>
            {[{id:"c1", name:"sushie", amout:2,price:12.199}].map((item) =>(<li>{item.name}</li>
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
