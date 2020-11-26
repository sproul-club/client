import React, { useEffect } from 'react';
import './Admin.css';
import { loadProfile } from '../../actions/profile';
import { Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Profile from './Profile';
import ContactInfo from './ContactInfo';
import GetInvolved from './GetInvolved';
import Events from './Events';
import Resources from './Resources';
import EditView from './EditView';

const Admin = ({ profile, events, resources, loadProfile }) => {
  useEffect(() => {
    if (profile && profile.link_name && profile.link_name.length === 0) loadProfile();
  }, [loadProfile, profile]);

  return (
    <div className="clubEdit">
      <div className="admin-page">
        {/* <div className="admin-sidebar">
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
        </div> */}
        <div className="admin-content">
          <Switch>
            <Route path="/admin/contact" render={() => <ContactInfo />} />
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
            <Route path="/admin" render={() => <EditView />} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile.profile,
  events: state.profile.events,
  resources: state.profile.resources,
});

export default connect(mapStateToProps, { loadProfile })(Admin);
