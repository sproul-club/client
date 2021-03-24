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
import Catalog from './pages/Catalog.js';
import { SignUp } from './pages/SignUp.js';
import { SignIn } from './pages/SignIn.js';
import RegisterStudent from './pages/RegisterStudent.js';
import { ResetPassword } from './pages/ResetPassword.js';
import { ResetPassword2 } from './pages/ResetPassword2.js';
import Security from './pages/admin/Security.js';
import ErrorPage from './pages/ErrorPage';
import AboutPage from './pages/AboutPage';
import About from './pages/AboutPage';
import FAQ from './pages/FAQ';
import Admin from './pages/admin/Admin.js';
import ConfirmEmailBanner from './pages/admin/ConfirmEmailBanner.js';
import ClubPage from './pages/ClubPage';
import Dashboard from './pages/Dashboard.js';
import Favorites from './pages/Favorites.js';
import Activation from './pages/Activation.js';
import store from './redux/store';
import ContactUs from './components/layout/contactUs/ContactUs.js';
import { loadProfile, getTags, getSizeTags } from './redux/actions/profile';
import { loadAllClubs } from './redux/actions/catalog';
import { Provider } from 'react-redux';
import PrivateRoute from './utils/PrivateRoute';
import Navbar from './components/layout/navbar/Navbar';
import UnderConstruction from './pages/UnderConstruction';

import Moment from 'react-moment';
import 'moment-timezone';
import StudentSettings from './pages/student/StudentSettings.js';

Moment.globalTimezone = 'America/Los_Angeles';

const App = () => {
  useEffect(() => {
    store.dispatch(loadProfile());
    store.dispatch(loadAllClubs());
    store.dispatch(getTags());
    store.dispatch(getSizeTags());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/about" component={AboutPage} />
          <PrivateRoute path="/admin" component={Admin} />
          <Route path="/catalog" component={Catalog} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/recover" component={ResetPassword} />
          <Route exact path="/resetpassword" component={ResetPassword2} />
          <Route path="/club/:id" component={ClubPage} />
          <PrivateRoute exact path="/security" component={Security} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/FAQ" component={UnderConstruction} />
          <Route exact path="/favorites" component={Favorites} />
          <Route exact path="/student/settings" component={StudentSettings} />
          <PrivateRoute exact path="/security" component={Security} />
          <Route exact path="/comingsoon" component={ComingSoon} />
          {/* <Route exact path="/activation" component={Activation} /> */}
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
