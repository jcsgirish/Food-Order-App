
import classes from './Cartbutton.module.css'
import CartIcon from '../Components/Cart/CartIcon'


const CartButton =(props)=>{

    return (
        <button className={classes.button}>
            <span className={classes.icon}>

                <CartIcon></CartIcon>
            </span>
            <span
            >Your Cart</span>
            <span  className={classes.badge}>
                7
            </span>

        </button>

    )
}

export default CartButton