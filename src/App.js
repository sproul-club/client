import React, {Component} from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

import { Landing } from "./pages/landing.js";

class App extends Component {
  render() {
    return(
      <Router>
        <Switch>
          <Route exact path="/" component = {Landing}/>
        </Switch>
      </Router>
    );
  };
}

export default App;
