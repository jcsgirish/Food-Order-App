import React from "react";
import Input from "../../UI/input";
import classes from './MealsForm.module.css'


const MealsForm =(props)=>{

    return (
  <form className={classes.form}>
    <Input label ="Amount:"
     input ={{
        id:'amount_'+props.id,
        type:'Number',
        min:'1',
        max:'5',
        step:'1',
        defaultValue:'1'
    }}/>
      <button>+Add</button>
  </form>
    )
}

export default MealsForm