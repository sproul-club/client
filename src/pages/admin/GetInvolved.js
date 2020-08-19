import React, { useState } from 'react';
import { updateProfile } from '../../actions/profile';
import { connect } from 'react-redux';

const GetInvolved = ({ profile, updateProfile }) => {
  const [involvedDesc, setInvolvedDesc] = useState(profile.get_involved);
  const [descrChars, setChars] = useState(250 - involvedDesc.length);

  const descrChange = (e) => {
    setInvolvedDesc(e.target.value);
    setChars(250 - e.target.value.length);
  };

  const submitValue = (e) => {
    updateProfile({ ...profile, get_involved: involvedDesc });
  };

  return (
    <div>
      <h3>How to get involved</h3>
      <div className="admin-text">
        Let propspective members know how to join or be part of your
        organization!
      </div>
      <div className="formGroup">
        <div className="formElement">
          <p>Description</p>
          <textarea
            className="descriptionInput"
            placeholder="Enter a short description about how to get involved!"
            type="text"
            maxLength={250}
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
    </div>
  );
};

export default connect(null, { updateProfile })(GetInvolved);
