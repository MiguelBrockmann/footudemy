import classes from './Cart.module.css'

const Cart= props =>{
    const cartItems =( //raff ich njet
        <ul className={classes['cart-tems']}>
            {[{id:"c1", name:"sushie", amout:2,price:12.199}].map((item) =>(<li>{item.name}</li>
    ))}
        </ul>
);
        return(
            <div>
            {cartItems}
            <div className={classes.total}>
                <span> total amount</span>
                <span>35</span>
            </div>
            <div className={classes.actions}>
            <button className={classes["button-alt"]}> close</button>
            <button className={classes.button}>order</button>
            </div>
            </div>
        );
};
export default Cart;