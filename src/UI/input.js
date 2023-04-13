import React from "react";
import classes from './input.module.css'

const input =(props)=>{
     return <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input {...props.input}></input>
     </div>

}
export default input