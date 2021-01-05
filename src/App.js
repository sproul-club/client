import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';

import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';

import { Landing } from './pages/Landing.js';
import { ComingSoon } from './pages/ComingSoon.js';
// import Catalog from './pages/catalog.js';
import Catalog2 from './pages/Catalog2.js';
import { SignUp } from './pages/SignUp.js';
import { SignIn } from './pages/SignIn.js';
import { ResetPassword } from './pages/ResetPassword.js';
import { ResetPassword2 } from './pages/ResetPassword2.js';
import Security from './pages/admin/Security.js';
import ErrorPage from './pages/ErrorPage';
import AboutPage from './pages/AboutPage';
import FAQ from './pages/FAQ';
import Admin from './pages/admin/Admin.js';
import ClubPage from './pages/ClubPage';
import store from './store';
import ContactUs from './layout/ContactUs.js';
import { loadProfile, getTags } from './actions/profile';
import { loadAllClubs} from './actions/catalog';
import { Provider } from 'react-redux';
import PrivateRoute from './utils/PrivateRoute';
import Navbar from './layout/Navbar';

import Moment from 'react-moment';
import 'moment-timezone';

Moment.globalTimezone = 'America/Los_Angeles';

const App = () => {
  useEffect(() => {
    store.dispatch(loadProfile());
    store.dispatch(loadAllClubs())
    store.dispatch(getTags());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/comingsoon" component={ComingSoon} />
          <Route exact path="/about" component={AboutPage} />
          <PrivateRoute path="/admin" component={Admin} />
          <Route path="/catalog" component={Catalog2} />
          {/* <Route path="/catalog2" component={Catalog2} /> */}
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/recover" component={ResetPassword} />
          <Route exact path="/resetpassword" component={ResetPassword2} />
          <Route exact path="/club/:id" component={ClubPage} />
          <Route exact path="/FAQ" component={FAQ} />
          <PrivateRoute exact path="/security" component={Security} />
          <Route>
            <ErrorPage />
          </Route>
        </Switch>
        <ContactUs />
        <NotificationContainer />
      </Router>
    </Provider>
  );
};
export default withRouter(App);
