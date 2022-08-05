import classes from './MealItemForm.module.css';
import Input from "../../UI/input";

const MealItemForm = props =>{
        return(
            <form className={classes.form}>
                <Input label="amount"/>
                <button>+ add</button>
            </form>
        );
};

export default MealItemForm;
