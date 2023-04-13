import { Fragment } from "react";
import Header from "./Layout/Header";
import Meals from "./Meals/Meals";



function App() {
  return (
    <Fragment>
      <Header></Header>
      <main>
        <Meals></Meals>
      </main>
    </Fragment>
  );
}

export default App;
