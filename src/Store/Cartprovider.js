import React from "react";
import Cartcontext from "./Cart-context";

const Cartprovider=(props)=>{
    const addItemTocartHandler=item=>{}
    const removeItemTocarthandler=id=>{}
    const cartcontext ={
        items:[],
        totalAmount: 0,
        addItem:addItemTocartHandler,
        removeItem: removeItemTocarthandler

    }
    return <Cartcontext.Provider value={cartcontext}>
        {props.children}
    </Cartcontext.Provider>
}

export default Cartprovider