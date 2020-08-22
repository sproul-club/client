import React, { useEffect } from 'react';

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
import { ResetPassword } from './pages/ResetPassword.js';
import { ResetPassword2 } from './pages/ResetPassword2.js';
import Security from './pages/admin/Security.js';
import Admin from './pages/admin/Admin.js';
import Modal from './pages/Modal.js';
import store from './store';
import { loadProfile } from './actions/profile';
import { Provider } from 'react-redux';
import PrivateRoute from './utils/PrivateRoute';
import Navbar from './layout/Navbar';

const App = () => {
  useEffect(() => {
    store.dispatch(loadProfile());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/comingsoon" component={ComingSoon} />
          <PrivateRoute path="/admin" component={ComingSoon} />
          <Route path="/catalog" component={ComingSoon} />
          <Route exact path="/signup" component={ComingSoon} />
          <Route exact path="/signin" component={ComingSoon} />
          <Route exact path="/recover" component={ComingSoon} />
          <Route exact path="/resetpassword" component={ComingSoon} />
          <Route exact path="/club/:id" component={ComingSoon} />
          <PrivateRoute exact path="/security" component={ComingSoon} />
          <Route>{'404'}</Route>
        </Switch>
      </Router>
    </Provider>
  );
};
export default withRouter(App);
