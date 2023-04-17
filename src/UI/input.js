import React from "react";
import classes from './input.module.css'

const input =React.forwardRef((props,ref)=>{
     return <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input ref={ref}{...props.input}></input>
     </div>

})
export default input