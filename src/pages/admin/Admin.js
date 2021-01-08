import React, { useEffect } from 'react';
import './Admin.css';
import { loadProfile } from '../../actions/profile';
import { connect } from 'react-redux';
import Profile from './Profile';
import ContactInfo from './ContactInfo';
import GetInvolved from './GetInvolved';
import Events from './Events';
import Resources from './Resources';
import ClubPage from '../ClubPage';

const Admin = ({ profile, admin, loadProfile }) => {
  useEffect(() => {
    if (profile && profile.link_name && profile.link_name.length === 0) loadProfile();
  }, [loadProfile, profile]);

  return (
    <ClubPage admin={admin} />
  );
};

const mapStateToProps = (state) => ({
  admin: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { loadProfile })(Admin);
