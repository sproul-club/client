import React, { useEffect } from 'react';
import './Admin.css';
import { loadProfile } from '../../../redux/actions/profile';
import { connect } from 'react-redux';
import ClubPage from '../../club/ClubPage';

const Admin = ({ profile, admin, loadProfile }) => {
  useEffect(() => {
    if (profile && profile.link_name && profile.link_name.length === 0)
      loadProfile();
  }, [loadProfile, profile]);

  // admin page is just club page rendered with ability to edit
  // admin variable ensures user is authenthicated (owner of club)
  return <ClubPage admin={admin} />;
};

const mapStateToProps = (state) => ({
  admin: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { loadProfile })(Admin);
