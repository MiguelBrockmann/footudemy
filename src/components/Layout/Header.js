import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {

    return(
        <>
            <header className={classes.header}>
                <h1> React meals</h1>
                <HeaderCartButton showModal2={props.showModal}></HeaderCartButton>
            </header>
            <div className={classes['main-image']}> {/*[] weil css class eine - hat und kein ganzes wort deshalb mit braces*/}
                <img src={mealsImage}/>
            </div>
        </>
    )
};
export default Header;
