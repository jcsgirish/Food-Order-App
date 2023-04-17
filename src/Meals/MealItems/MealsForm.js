import React ,{useRef,useState} from "react";
import Input from "../../UI/input";
import classes from './MealsForm.module.css'


 
const MealItemForm=(props) => {
  const [amountIsValid,setAmountIsvalid]=useState(true)
  const amountinputRef=useRef();


    const submithandler=(event)=>{
  event.preventDefault();

  const enteredAmount= amountinputRef.current.value;
  const enteredAmountNumber=+enteredAmount;

if(enteredAmount.trim().length===0||enteredAmountNumber<1||enteredAmountNumber>5)
{
  setAmountIsvalid(false)
  return;
}
props.onAddCart(enteredAmountNumber);
    }
    return (
      <form   className={classes.form} onSubmit={submithandler}>
        <Input
        ref={amountinputRef}
          label="Amount"
          input={{
            id: "amount" +props.id,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        ></Input>
        <button  onClick={submithandler}>+Add</button>
        {!amountIsValid&& <p>please enter a valid amount </p>}
      </form>
    );
  }
  export default MealItemForm;