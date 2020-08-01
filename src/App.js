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
  constructor(props){
    super(props);
    this.previousLocation = this.props.location;
  }
  
  componentWillUpdate() {
    const { location } = this.props;
    if (!(location.state && location.state.modal)) {
      this.previousLocation = this.props.location;
    }
  }  
  render() {
    const { location } = this.props;

    const isModal = (
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    );
    
    console.log(location);
    return (
      <Provider store={store}>
        <Router>
          <Switch location={isModal ? this.previousLocation : location}>
            <Route exact path="/" component={Landing} />
            <Route path="/catalog" component={Catalog} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/modal/:id" component={Modal}/>
            <Route>{'404'}</Route>
          </Switch>
          {isModal ? <Route exact path="/modal/:id" component={Modal} /> : null }
        </Router>
      </Provider>
    );
  }
}

export default withRouter(App);
