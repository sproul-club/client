import React, { useState } from 'react';
import { updateProfile } from '../../actions/profile';
import { connect } from 'react-redux';
import { NotificationManager } from 'react-notifications';
import RichText from '../RichText'
import {stateFromHTML} from 'draft-js-import-html';
import {stateToHTML} from 'draft-js-export-html';
import './Admin.css';

const AboutClub = ({
  profile,
  updateProfile,
  close,
}) => {
  const [descr, setDescr] = useState(stateFromHTML(profile.about_us));
  const [descrChars, setDescrChars] = useState(750 - profile.about_us.replace(/<[^>]*>?/gm, '').length);

  const submit = async () => {
    const newProfile = {
      ...profile,
      name: profile.name,
      about_us: stateToHTML(descr),
      is_reactivating: false
    };

    try {
      await updateProfile(newProfile);
      NotificationManager.success('Changes to About ' + profile.name + ' saved successfully!', '', 1500);
      close();
    } catch (err) {
      console.log(err)
      NotificationManager.error('Changes to About ' + profile.name + ' did not save successfully!', '', 1500);
    }
  };

  return (
    <div>
      <h3> About {profile.name} </h3>
        <p>Enter a short description about your organization.</p>
        <div className="formGroup">
          <div className="formElement">
            <RichText setChars={setDescrChars} setDescr={setDescr} descr={descr}/>
          </div>
          <div style={{ alignSelf: 'flex-end', "margin-right": "100px"}} className="subtitle">{descrChars} characters remaining</div> 
        </div>
        
        <button id="save-button" onClick={submit}> Save </button>
        
    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile.profile,
});

export default connect(mapStateToProps, { updateProfile })(AboutClub);