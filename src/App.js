import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';

import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';

import { Landing } from './pages/landing/Landing.js';
import { ComingSoon } from './pages/comingSoon/ComingSoon.js';
// import Catalog from './pages/catalog.js';
import Catalog from './pages/catalog/Catalog.js';
import { SignUp } from './pages/clubLogin/ClubRegister.js';
import { SignIn } from './pages/clubLogin/ClubLogin.js';
import RegisterStudent from './pages/student/RegisterStudent.js';
import { ResetPassword } from './pages/clubLogin/ResetPassword.js';
import { ResetPassword2 } from './pages/clubLogin/ResetPassword2.js';
import Security from './pages/admin/security/Security.js';
import ErrorPage from './pages/error/ErrorPage';
import AboutPage from './pages/about/AboutPage';
import About from './pages/about/AboutPage';
import FAQ from './pages/faq/FAQ';
import Admin from './pages/admin/admin/Admin.js';
import ClubPage from './pages/club/ClubPage';
import Dashboard from './pages/student/Dashboard.js';
import StudentCalendar from './pages/student/StudentCalendar';
import Bookmarks from './pages/student/Bookmarks.js';

import Activation from './pages/club/Activation.js';
import store from './redux/store';
import ContactUs from './components/layout/contactUs/ContactUs.js';
import { loadProfile, getTags, getSizeTags } from './redux/actions/profile';
import { loadAllClubs } from './redux/actions/catalog';
import { Provider } from 'react-redux';
import PrivateRoute from './utils/PrivateRoute';
import Navbar from './components/layout/navbar/Navbar';

import Moment from 'react-moment';
import 'moment-timezone';
import StudentSettings from './pages/student/StudentSettings.js';

Moment.globalTimezone = 'America/Los_Angeles';

let enableFeature = {
  "dashboard": false,
  "events": false,
  "new-club-profile": false
}

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
          <Route exact path="/dashboard" component={enableFeature["dashboard"] ?  Dashboard : ComingSoon} />
          <Route exact path="/StudentCalendar" component={enableFeature["dashboard"] ?  StudentCalendar : ComingSoon} />
          <Route exact path="/RegisterStudent" component={enableFeature["dashboard"] ?  RegisterStudent : ComingSoon} />
          <Route exact path="/FAQ" component={ComingSoon} />
          <Route exact path="/Bookmarks" component={enableFeature["dashboard"] ?  Bookmarks : ComingSoon} />
          <Route exact path="/student/settings" component={enableFeature["dashboard"] ?  StudentSettings : ComingSoon} />
          <PrivateRoute exact path="/security" component={Security} />
          <Route exact path="/comingsoon" component={ComingSoon} />
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