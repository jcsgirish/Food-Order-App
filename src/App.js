import { useState } from "react";
import Header from "./Layout/Header";
import Meals from "./Meals/Meals";
import Cart from "./Components/Cart/Cart";
import Cartprovider from "./Store/Cartprovider";


function App() {
  const [CartShown,setCart]= useState(false)

  const showCarthandler=()=>{
    setCart(true)

  }
  const hideCarthandler=()=>{
    setCart(false)

  }
  return (
    <Cartprovider>
      {CartShown&&<Cart onClose ={hideCarthandler}></Cart>}
      <Header onShowCart={showCarthandler}></Header>
      <main>
        <Meals></Meals>
      </main>
    </Cartprovider>
  );
}

export default App;