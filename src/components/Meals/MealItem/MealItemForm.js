import classes from './MealItemForm.module.css';
import Input from "../../UI/input";
import {useRef, useState} from "react";

const MealItemForm = props => {

const [amountIsValid, setAmountIsValid] = useState(true);
const amountInputRef = useRef()


const submitHandler = event => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value; //currentliy entered value, always string
    const enteredAmountNumber= +enteredAmount; // string to nr

    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
        setAmountIsValid(false);
        return;
    }
    props.onAddToCart(enteredAmountNumber);
}

return (
    <form className={classes.form} onSubmit={submitHandler}>
        <Input label="Amount" ref={amountInputRef}/>
        <button>+ add</button>
        {!amountIsValid && <p> pls enter a valid amount</p>}
    </form>
);
};
export default MealItemForm;
