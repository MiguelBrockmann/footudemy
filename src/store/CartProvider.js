import CartContext from "./cart-context";


const CartProvider= props => {

    const addItemToCartHandler = item=>{};
    const removeItemFromCartHandler=id=>{};

    const CartProvider = {
        items:[],
        totalamount:0,
        addItem:addItemToCartHandler,
        removeitem:removeItemFromCartHandler
    };

    return <CartContext.Provider value={CartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;
