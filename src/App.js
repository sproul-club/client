import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';

import { Landing } from './pages/Landing.js';
import { ComingSoon } from './pages/ComingSoon.js';
import Catalog from './pages/catalog.js';
import { SignUp } from './pages/SignUp.js';
import { SignIn } from './pages/SignIn.js';
import { RecoverPassword } from './pages/RecoverPassword.js';
import Admin from './pages/admin/Admin.js';
import Modal from './pages/Modal.js';
import store from './store';
import { Provider } from 'react-redux';
import RecoverForm from './pages/RecoverPasswordForm.js';
import ClubPage from './pages/ClubPage.js';
import Dropdown from './pages/Dropdown.js';
import EventAccord from './pages/EventAccord.js';
import SignInForm from './pages/SignInForm.js';
import GridComponent from './pages/GridComponent.js';
import Footer from './layout/Footer.js';
import Navbar from './layout/Navbar.js';
import { Card } from '@material-ui/core';
import auth from './reducers/auth.js';
import catalog from './reducers/catalog.js';

class App extends Component {
  previousLocation = this.props.location;

  componentWillUpdate() {
    let { location } = this.props;

    if (!(location.state && location.state.modal)) {
      this.previousLocation = location;
    }
  }

  render() {
    // const { location } = this.props;

    // console.log(location);
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/comingsoon" component={ComingSoon} />
            <Route path="/admin" component={ComingSoon} />
            <Route path="/signin" component={ComingSoon} />
            <Route path="/catalog" component={ComingSoon} />
            <Route exact path="/signup" component={ComingSoon} />
            <Route exact path="/signin" component={ComingSoon} />
            <Route exact path="/recover" component={ComingSoon} />
            <Route exact path="/club/:id" component={ComingSoon} />
            <Route>{'404'}</Route>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default withRouter(App);
