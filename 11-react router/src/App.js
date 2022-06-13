import { Route } from "react-router-dom";
import { Fragment } from "react";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <div>
      <Fragment>
        <MainHeader></MainHeader>
        <main>
          <Route path="/welcome">
            <Welcome></Welcome>
          </Route>
          <Route path="/products">
            <Products></Products>
          </Route>
          <h3>Home Page!</h3>
        </main>
      </Fragment>
    </div>
  );
}

export default App;
