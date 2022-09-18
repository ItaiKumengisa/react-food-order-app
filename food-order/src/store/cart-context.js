import React from "react";

//The default data here won't actually be used but 
//apparently provides better auto completion
const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {}
})

export default CartContext;