import React, { useState } from 'react';
import { updateProfile } from '../../actions/profile';
import { connect } from 'react-redux';
import { NotificationManager } from 'react-notifications';
import { normalizeUrl } from '../../utils/normalizeUrl';
import './Admin.css';


const GetInvolved = ({ profile, get_involved, updateProfile, close }) => {
  const [involvedDesc, setInvolvedDesc] = useState(get_involved);
  const [descrChars, setInvolvedChars] = useState(500 - involvedDesc.length);
  const [involvedLink, setInvolvedLink] = useState(profile.apply_link);


  const descrChange = (e) => {
    setInvolvedDesc(e.target.value);
    setInvolvedChars(500 - e.target.value.length);
  };

  const involvedLinkChange = (e) => {
    setInvolvedLink(e.target.value);
  };

  // function cancelEdit() {
  //   setInvolvedDesc(profile.get_involved);
  //   setInvolvedChars(500 - involvedDesc.length);
  //   setInvolvedLink(''); // placeholder: need API endpoint for application link
  // }

  const submit = async () => {
    setInvolvedLink(normalizeUrl(involvedLink));
    const newProfile = {
      get_involved: involvedDesc,
      apply_link: involvedLink, 
    };

    try {
      await updateProfile(newProfile);
      NotificationManager.success('Changes to How to Get Involved saved successfully!', '', 1500);
      close();
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
        <div className="subtitle">{descrChars} characters remaining</div>

        <div className="formElement">
          <p>Application Link</p>
          <input
            className="userInput"
            placeholder="Enter link"
            type="text"
            maxLength={500}
            value={involvedLink}
            onChange={involvedLinkChange}
          />
        </div>
      </div>
      <button id="save-button" onClick={submit}> Save </button>
    </div>
  );
};
const mapStateToProps = (state) => ({
  profile: state.profile.profile,
  get_involved: state.profile.get_involved,
});

export default connect(mapStateToProps, { updateProfile })(GetInvolved);
