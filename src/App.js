import React, {Component} from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

import { Landing } from "./pages/landing.js";
import { Catalog } from "./pages/catalog.js";
import { SignUp } from "./pages/signup.js";

class App extends Component {
  render() {
    return(
      <Router>
        <Switch>
          <Route exact path="/" component = {Landing}/>
          <Route exact path="/catalog" component = {Catalog}/>
          <Route exact path="/signup" component = {SignUp}/>
        </Switch>
      </Router>
    );
  };
};

export default App;
