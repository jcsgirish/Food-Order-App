import { Fragment } from "react";
import Header from "./Layout/Header";
import Meals from "./Meals/Meals";
import Cart from "./Components/Cart/Cart";



function App() {
  return (
    <Fragment>
      <Cart></Cart>
      <Header></Header>
      <main>
        <Meals></Meals>
      </main>
    </Fragment>
  );
}

export default App;
