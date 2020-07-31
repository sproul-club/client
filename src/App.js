import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from 'react-router-dom';

import { Landing } from './pages/landing.js';
import Catalog from './pages/catalog.js';
import store from './store';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/catalog" component={Catalog} />>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
