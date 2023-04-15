import { useContext } from 'react'
import classes from './Cartbutton.module.css'
import CartIcon from '../Components/Cart/CartIcon'
import Cartcontext from '../Store/Cart-context'

const CartButton =(props)=>{
    const cartctx=useContext(Cartcontext)
    
    let numberOfCartItems = 0;
    for (const item of cartctx.items) {
      numberOfCartItems += item.amount;
    }
    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>

                <CartIcon></CartIcon>
            </span>
            <span
            >Your Cart</span>
            <span  className={classes.badge}>{numberOfCartItems}</span>
        </button>

    )
}

export default CartButton