import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateProfile } from '../../actions/profile';
import { NotificationManager } from 'react-notifications';
import './EditView.css';
import EditDesc from './EditDesc';
import EditInvolved from './EditInvolved';

const EditView = ({
  profile,
  updateProfile,
}) => {

  return (
    <div>
      <div className="flex-container-chungus">
        <div className="flex-container-left">
            <div className="left-box">
              <EditDesc profile = {profile} updateProfile={updateProfile}/>
            </div>
        </div>
        <div className="flex-container-right">
        <div className="right-box">
              <EditInvolved profile = {profile} updateProfile={updateProfile}/>
        </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile.profile,
});

export default connect(mapStateToProps, {
  updateProfile,
})(EditView);
