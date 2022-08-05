import classes from './Input.module.css'

const Input= props=>{

        return(
          <div className={classes.input}>
              <label htmlFor="amount_">{props.label}</label>
              <input id='amount_' type="number" min='1' max='5' step="1" defaultValue='1'/>
          </div>
        );

}
export default Input;
