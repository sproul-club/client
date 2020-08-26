import React, { useState } from 'react';
import { updateProfile } from '../../actions/profile';
import { connect } from 'react-redux';
import {NotificationManager, NotificationContainer} from 'react-notifications';

const GetInvolved = ({ profile, get_involved, updateProfile }) => {
  const [involvedDesc, setInvolvedDesc] = useState(profile.get_involved);
  const [descrChars, setChars] = useState(250 - involvedDesc.length);

  const descrChange = (e) => {
    setInvolvedDesc(e.target.value);
    setChars(250 - e.target.value.length);
  };

  const submitValue = (e) => {
    updateProfile({ ...profile, get_involved: involvedDesc },
      function() {
        NotificationManager.success("Description changes saved successfully!", '', 3000);
      }, function() {
        NotificationManager.error("Description changes unsuccessful!", '', 3000);
      });
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
      </div>
      <button className="saveButton" onClick={submitValue}>
        Save changes{' '}
      </button>
      <NotificationContainer/>
    </div>
  );
};
const mapStateToProps = (state) => ({
  get_involved: state.profile.get_involved,
});

export default connect(mapStateToProps, { updateProfile })(GetInvolved);
