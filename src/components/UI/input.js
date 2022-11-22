import classes from './Input.module.css'
import React from "react";

//nutzen jetzt forwardRef damit wir in custom components ref benutzen köännen, benutzen in MealItemForm ref..(const amountInputRef = useRef()), weil können nicht einfach so <Input ref=x>
const Input= React.forwardRef((props,ref)=>{
    return(
      <div className={classes.input}>
          <label htmlFor="amount_">{props.label}</label>
          <input ref={ref} id='amount_' type="number" min='1' max='6' step="1" defaultValue='1'/>
      </div>
    );
});
export default Input;
