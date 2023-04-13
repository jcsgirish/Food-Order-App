import  { Fragment } from "react"
import classes from './Header.module.css'
import mealsImage from '../Assets/meals.jpg'
import CartButton from "./Cartbutton"

const Header =(props)=>{
    return (
        <Fragment>
            <header className={classes.header}>
            <h1>React Meals</h1>
            <CartButton></CartButton>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt ='A table of delicious food!'></img>
                
            </div>

        </Fragment>
    )

}

export default Header