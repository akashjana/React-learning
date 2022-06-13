import { Route } from "react-router-dom";
import { Fragment } from "react";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";
import { Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";

function App() {
  return (
    <div>
      <Fragment>
        <MainHeader></MainHeader>
        <main>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/welcome"></Redirect>
            </Route>
            <Route path="/welcome">
              <Welcome></Welcome>
            </Route>
            <Route path="/products" exact>
              <Products></Products>
            </Route>
            <Route path="/products/:productId">
              <ProductDetail></ProductDetail>
            </Route>
          </Switch>
          <h3>Home Page!</h3>
        </main>
      </Fragment>
    </div>
  );
}

export default App;
