import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import { Landing } from './pages/Landing.js';
import Catalog from './pages/catalog.js';
import { SignUp } from './pages/SignUp.js';
import store from './store';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/catalog" component={Catalog} />
            <Route exact path="/signup" component={SignUp} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
