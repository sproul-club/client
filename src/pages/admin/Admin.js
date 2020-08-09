import React, { useState } from 'react';
import './Admin.css';
import { Route, Switch, Link } from 'react-router-dom';
import Navbar from '../../layout/Navbar';
import Profile from './Profile';
import ContactInfo from './ContactInfo';
import GetInvolved from './GetInvolved';
import Events from './Events';
import Resources from './Resources';

const Admin = () => {
  console.log(window.location.pathname);

  return (
    <>
      <Navbar />
      <div className="admin-page">
        <div className="admin-sidebar">
          <Link
            to="/admin/profile"
            className={
              window.location.pathname === '/admin/profile'
                ? 'selected page-link'
                : 'page-link'
            }
          >
            Profile
          </Link>
          <Link
            to="/admin/contact"
            className={
              window.location.pathname === '/admin/contact'
                ? 'selected page-link'
                : 'page-link'
            }
          >
            Contact Information
          </Link>
          <Link
            to="/admin/getinvolved"
            className={
              window.location.pathname === '/admin/getinvolved'
                ? 'selected page-link'
                : 'page-link'
            }
          >
            How to get involved
          </Link>
          <Link
            to="/admin/resources"
            className={
              window.location.pathname === '/admin/resources'
                ? 'selected page-link'
                : 'page-link'
            }
          >
            Resources
          </Link>
          <Link
            to="/admin/events"
            className={
              window.location.pathname === '/admin/events'
                ? 'selected page-link'
                : 'page-link'
            }
          >
            Events
          </Link>
        </div>
        <div className="admin-content">
          <Switch>
            <Route path="/admin/contact" component={ContactInfo} />
            <Route path="/admin/getinvolved" component={GetInvolved} />
            <Route path="/admin/resources" component={Resources} />
            <Route path="/admin/events" component={Events} />
            <Route path="/admin" component={Profile} />
          </Switch>
        </div>
      </div>
    </>
  );
};

export default Admin;
