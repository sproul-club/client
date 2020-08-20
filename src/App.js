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
import { RecoverPassword } from './pages/RecoverPassword.js';
import { Security } from './pages/admin/Security.js';
import Admin from './pages/admin/Admin.js';
// import Modal from './pages/Modal.js';
import store from './store';
import { loadProfile } from './actions/profile';
import { Provider } from 'react-redux';
<<<<<<< HEAD
import RecoverForm from './pages/RecoverForm.js';
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
            <Route path="/catalog" component={Comingsoon} />
            <Route exact path="/signup" component={Comingsoon} />
            <Route exact path="/signin" component={Comingsoon} />
            <Route exact path="/recover" component={ComingSoon} />
            <Route exact path="/club/:id" component={ComingSoon} />
            <Route>{'404'}</Route>
          </Switch>
        </Router>
      </Provider>
    );
  }
}
=======
import PrivateRoute from './utils/PrivateRoute';

const App = () => {
  useEffect(() => {
    console.log('reload app');
    store.dispatch(loadProfile());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/comingsoon" component={ComingSoon} />
          <PrivateRoute path="/admin" component={ComingSoon} />
          <Route path="/catalog" component={ComingSoon} />
          <Route exact path="/signup" component={ComingSoon} />
          <Route exact path="/signin" component={ComingSoon} />
          <Route exact path="/club/:id" component={ComingSoon} />
          <Route exact path="/security" component={ComingSoon} />
          <Route>{'404'}</Route>
        </Switch>
      </Router>
    </Provider>
  );
};
>>>>>>> 13ebaabd8ffca50f91348ea188180d76ef4c3022

export default withRouter(App);
