import React, { useContext } from "react";
import classes from './MealItem.module.css'
import MealsForm from "./MealsForm";
import CartContext from "../../Store/Cart-context";



const MealsItem=(props)=>{
    const Cartctx=useContext(CartContext)
    const price = `$${props.price.toFixed(2)}`;
    const addToCartHandler =amount=>{
        Cartctx.addItem({
            id:props.id,
            name:props.name,
            amount:amount,
            price:props.price
        })
    }

        return <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
            <div  className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealsForm onAddCart={addToCartHandler}></MealsForm>
                </div>
      </li>
     
     
             
       
    }
    export default MealsItem