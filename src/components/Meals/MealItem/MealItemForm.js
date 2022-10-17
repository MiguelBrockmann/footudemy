import classes from './MealItemForm.module.css';
import Input from "../../UI/input";

const MealItemForm = props => {

    const MealItemForm = (props) => {

        const submitHandler = event => {
            event.preventDefault();

        }

        return (
            <form className={classes.form} onSubmit={submitHandler}>
                <Input label="amount"/>
                <button>+ add</button>
            </form>
        );
    };
};
export default MealItemForm;
