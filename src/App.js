import React from "react";

import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HeaderComponent from "./components/HeaderComponent.jsx";
import FooterComponent from "./components/FooterComponent.jsx";
import ListProductComponents from "./components/ListProductComponents.jsx";
import ViewProductComponents from "./components/ViewProductComponents.jsx";
import UpdateProductComponent from "./components/UpdateProductComponent.jsx";
import CreateProductComponent from "./components/CreateProductComponent.jsx";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListProductComponents}></Route>
            <Route path="/view" exact component={ViewProductComponents}></Route>
            <Route
              path="/create"
              exact
              component={CreateProductComponent}
            ></Route>
            <Route
              path="/update"
              exact
              component={UpdateProductComponent}
            ></Route>
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
