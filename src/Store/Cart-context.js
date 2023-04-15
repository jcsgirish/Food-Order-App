import React from "react";


const Cartcontext = React.createContext({
    items:[],
    totalAmount:0,
    additem:(item)=>{},
    removeitem:(item)=>{},

})

export default Cartcontext