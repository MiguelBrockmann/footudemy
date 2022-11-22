import Carticon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import {useContext, useEffect, useState} from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = props =>{
    const [btnIsHighlighted,setBtnIsHighLighted] = useState(false);
    const cartCtx=useContext(CartContext) //benutzt info aus cart-context.js

    const numberOfCartItems= cartCtx.items.reduce((currNumber,item) =>{return currNumber + item.amount},0) // reduced array zu einer zahl summiert alle auf
    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump :''}`;
    const {items} = cartCtx;

    useEffect(() => {
        if (cartCtx.items.length === 0){
            return;
        }
        setBtnIsHighLighted(true);
       const timer= setTimeout( () => {
            setBtnIsHighLighted(false)
        },300 );

        return () =>{
            clearTimeout(timer)
        };
    },[items])

     return(
         <button className={btnClasses} onClick={props.showModal2}>
             <span className={classes.icon}> <Carticon/></span>
             <span> Your cart</span>
             <span className={classes.badge}>{numberOfCartItems}</span>
         </button>
     )
}

export default HeaderCartButton;
