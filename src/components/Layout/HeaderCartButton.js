import Carticon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import {useContext} from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = props =>{

    const cartCtx=useContext(CartContext)

    const numberOfCartItems= cartCtx.items.reduce((currNumber,item) =>{return currNumber + item.amount},0) // reduced array zu einer zahl summiert alle auf

     return(
         <button className={classes.button} onClick={props.showModal2}>
             <span className={classes.icon}> <Carticon/></span>
             <span> Your cart</span>
             <span className={classes.badge}>{numberOfCartItems}</span>
         </button>
     )
}

export default HeaderCartButton;
