import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateProfile } from '../../actions/profile';
import { NotificationManager } from 'react-notifications';
import { normalizeUrl } from '../../utils/normalizeUrl';
import './RecrEvents.css';
import './Admin.css';
import RecrAccord from './RecrAccord';
 
const RecrEvents = ({profile, updateProfile}) => {
return (
    <div id="recr-main">
        <h3>Recruitment Timeline</h3>
        <div className="admin-text">
            Add events related to recruitment!
        </div>
        <hr style={{width: "97.5%", marginLeft: "-0.25%"}}></hr>
        <div style={{minHeight:"52vh"}}>
            <RecrAccord></RecrAccord>
            <RecrAccord></RecrAccord>
 
        </div>
 
        
        <div id="recr-buttons">
            <button className="recr-button" id="recr-add">+ Add Event</button>
            <button className="recr-button" id="recr-cancel">Cancel</button>
            <button className="recr-button" id="recr-save">Save</button>
        </div>
 
    </div>
)
};
 
const mapStateToProps = (state) => ({
    profile: state.profile.profile,
  });
 
export default connect(mapStateToProps, { updateProfile })(RecrEvents);