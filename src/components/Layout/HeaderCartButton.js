import Carticon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = props =>{
     return(
         <button className={classes.button}>
             <span className={classes.icon}> <Carticon/></span>
             <span> Your cart</span>
             <span className={classes.badge}>3</span>
         </button>
     )
}

export default HeaderCartButton;