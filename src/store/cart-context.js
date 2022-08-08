import React from 'react';
//stellt ein objekt bereit wird in provider js befüllt
const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {}
});

export default CartContext;
