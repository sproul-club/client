import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';

import { Landing } from './pages/landing.js';
import Catalog from './pages/catalog.js';
import { SignUp } from './pages/signup.js';
import Modal from './pages/Modal.js';
import store from './store';
import { Provider } from 'react-redux';

class App extends Component {
  previousLocation = this.props.location;

  componentWillUpdate() {
    let { location } = this.props;

    if (!(location.state && location.state.modal)) {
      this.previousLocation = location;
    }
  }
 
  render() {
    const { location } = this.props;

    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    ); // not initial render
    
    console.log(location);
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/catalog" component={Catalog} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/club/:id" component={Catalog}/>
            <Route>{'404'}</Route>
          </Switch>
          <Route exact path="/club/:id" component={Modal} />
        </Router>
      </Provider>
    );
  }
}

export default withRouter(App);
