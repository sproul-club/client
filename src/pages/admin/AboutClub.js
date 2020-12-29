import React, { useState } from 'react';
import { updateProfile } from '../../actions/profile';
import { connect } from 'react-redux';
import { NotificationManager } from 'react-notifications';
import RichText from '../RichText'
import {stateFromHTML} from 'draft-js-import-html';
import {stateToHTML} from 'draft-js-export-html';

const AboutClub = ({
  profile,
  updateProfile,
}) => {
  const [descr, setDescr] = useState(stateFromHTML(profile.about_us));
  const [descrChars, setDescrChars] = useState(750 - profile.about_us.replace(/<[^>]*>?/gm, '').length);

  const descrChange = (e) => {
    setDescr(e.target.value);
    setDescrChars(750 - e.target.value.length);
  }; 

  const submit = async () => {
    const newProfile = {
      name: profile.name,
      about_us: stateToHTML(descr),
    };

    try {
      await updateProfile(newProfile);
      NotificationManager.success('Changes to About ' + profile.name + ' saved successfully!', '', 1500);
    } catch (err) {
      NotificationManager.error('Changes to About ' + profile.name + ' did not save successfully!', '', 1500);
    }
  };

  return (
    <div>
      <h3> About {profile.name} </h3>
        <div className="admin-modal-text">Enter a short description about your organization.</div>
          <div className="input-holder">
            <div className="input-title">Description</div>
            <RichText setChars={setDescrChars} setDescr={setDescr} descr={descr}/>
          </div>
          <div className="subtitle">{descrChars} characters remaining</div> 
        <div id="buttons-flex">
          <button id="save-button" onClick={submit}>
            Save
          </button>
        </div>
      
    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile.profile,
});

export default connect(mapStateToProps, { updateProfile })(AboutClub);