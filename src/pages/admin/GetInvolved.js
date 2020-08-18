import React, { useState } from 'react';
import { updateProfile } from '../../actions/profile';
import { connect } from 'react-redux';

const GetInvolved = ({ profile, updateProfile }) => {
  const [involvedDesc, setInvolvedDesc] = useState(profile['get-involved']);

  const submitValue = (e) => {
    updateProfile({ ...profile, 'get-involved': involvedDesc });
  };

  return (
    <div>
      <h3>How to get involved</h3>
      <div className="admin-text">
        Let propspective members know how to join or be part of your
        organization!
      </div>
      <div className="formGroup">
        <div className="formElementDescription">
          <p>Description</p>
          <textarea
            className="descriptionInput"
            placeholder="Enter a short description about how to get involved! (500 char. max)"
            type="text"
            maxLength={500}
            value={involvedDesc}
            onChange={(e) => setInvolvedDesc(e.target.value)}
          />
        </div>
      </div>
      <button className="saveButton" onClick={submitValue}>
        Save changes{' '}
      </button>
    </div>
  );
};

export default connect(null, { updateProfile })(GetInvolved);
