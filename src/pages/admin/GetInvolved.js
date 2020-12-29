import React, { useState } from 'react';
import { updateProfile } from '../../actions/profile';
import { connect } from 'react-redux';
import { NotificationManager } from 'react-notifications';

const GetInvolved = ({ profile, get_involved, updateProfile }) => {
  const [involvedDesc, setInvolvedDesc] = useState(get_involved);
  const [descrChars, setInvolvedChars] = useState(500 - involvedDesc.length);
  const [involvedLink, setInvolvedLink] = useState(''); // placeholder: need API endpoint for application link


  const descrChange = (e) => {
    setInvolvedDesc(e.target.value);
    setInvolvedChars(500 - e.target.value.length);
  };

  const involvedLinkChange = (e) => {
    setInvolvedLink(e.target.value);
  };

  function cancelEdit() {
    setInvolvedDesc(profile.get_involved);
    setInvolvedChars(500 - involvedDesc.length);
    setInvolvedLink(''); // placeholder: need API endpoint for application link
  }

  const submitValue = async () => {
    const newProfile = {
      get_involved: involvedDesc,
      // get_involved_link: involvedLink, // placeholder: need API endpoint for application link
    };

    try {
      await updateProfile(newProfile);
      NotificationManager.success('Changes to How to Get Involved saved successfully!', '', 1500);
    } catch (err) {
      console.log(err);
      NotificationManager.error('Changes to How to Get Involved did not save successfully!', '', 1500);
    }
  };

  return (
    <div>
      <h3>How to get involved</h3>
      <div className="admin-text">
        Let prospective members know how to join or be part of your
        organization!
      </div>
      <div className="formGroup">
        <div className="formElement">
          <p>Description</p>
          <textarea
            className="descriptionInput"
            placeholder="Enter a short description about how to get involved!"
            type="text"
            maxLength={500}
            /*value={involvedDesc}
            onChange={(e) => setInvolvedDesc(e.target.value)}
            */
            value={involvedDesc}
            onChange={descrChange}
          />
        </div>
        <p className="subtitle">{descrChars} characters remaining</p>

        <div className="formElement">
          <p>Application Link</p>
          <input
            className="descriptionInput"
            placeholder="Enter link"
            type="text"
            maxLength={500}
            /*value={involvedDesc}
            onChange={(e) => setInvolvedDesc(e.target.value)}
            */
            value={involvedDesc}
            onChange={descrChange}
          />
        </div>
      </div>
      <button className="saveButton" onClick={submitValue}>
        Save changes{' '}
      </button>
    </div>
  );
};
const mapStateToProps = (state) => ({
  profile: state.profile.profile,
  get_involved: state.profile.get_involved,
});

export default connect(mapStateToProps, { updateProfile })(GetInvolved);
