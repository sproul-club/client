import React from 'react';
import './Admin.css';
import { Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from '../../layout/Navbar';
import Profile from './Profile';
import ContactInfo from './ContactInfo';
import GetInvolved from './GetInvolved';
import Events from './Events';
import Resources from './Resources';

const Admin = ({ profile, events, resources }) => {
  return (
    <div className="clubEdit">
      <Navbar />
      <div className="admin-page">
        <div className="admin-sidebar">
          <Link
            to="/admin/profile"
            className={
              window.location.pathname === '/admin/profile' ||
              window.location.pathname === '/admin'
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
            How to Get Involved
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
            <Route
              path="/admin/contact"
              render={() => <ContactInfo profile={profile} />}
            />
            <Route
              path="/admin/getinvolved"
              render={() => <GetInvolved profile={profile} />}
            />
            <Route
              path="/admin/resources"
              render={() => <Resources resources={resources} />}
            />
            <Route
              path="/admin/events"
              render={() => <Events events={events} />}
            />
            <Route path="/admin" render={() => <Profile profile={profile} />} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile.profile,
  events: state.profile.events,
  resources: state.profile.resources
});

export default connect(mapStateToProps)(Admin);
