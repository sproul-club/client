import React from 'react';
import Navbar from '../../components/layout/navbar/Navbar';
import { Route, Switch, Link } from 'react-router-dom';
import './Admin.css';
import './Security.css';
import ChangeLogin from './ChangeLogin.js';
import { connect } from 'react-redux';
import { updatePassword } from '../../redux/actions/profile';

const Security = () => {
  return (
    <div className="security">
      <Navbar />
      <div className="admin-page">
        <div className="admin-sidebar">
          <h3>Account Settings</h3>
          <Link
            to="/security"
            className={
              window.location.pathname === '/security'
                ? 'selected page-link'
                : 'page-link'
            }>
            Password
          </Link>
        </div>
        <div className="admin-content">
          <Switch>
            <Route path="/security" render={() => <ChangeLogin />} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { updatePassword })(Security);
