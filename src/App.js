import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import {useEffect, useState} from "react";

function App() {
    const [cartIsShown,setCardIsShown]= useState(false);

    const showCartHandler=()=>{
        setCardIsShown(true);
    }

    const hideCartHandler=()=>{
        setCardIsShown(false);
    }

  return (
    <>
        {cartIsShown && <Cart hideModal={hideCartHandler}/>}
        <Header showModal={showCartHandler} />
        <main>
            <Meals/>
        </main>
    </>
  );
}

export default App;
