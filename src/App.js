import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import {useEffect, useState} from "react";
import CartProvider from "./store/CartProvider";

function App() {
    const [cartIsShown,setCardIsShown]= useState(false);

    const showCartHandler=()=>{
        setCardIsShown(true);
    }

    const hideCartHandler=()=>{
        setCardIsShown(false);
    }

  return (
    <CartProvider>
        {cartIsShown && <Cart hideModal={hideCartHandler}/>}
        <Header showModal={showCartHandler} />
        <main>
            <Meals/>
        </main>
    </CartProvider>
  );
}

export default App;
