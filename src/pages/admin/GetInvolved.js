import React, { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

const GetInvolved = ({ profile }) => {
  const [involvedDesc, setInvolvedDesc] = useState(profile.description);

  const submitValue = (e) => {
    const formDetails = {
      'involved-desc': involvedDesc,
    };

    // axios({
    //   method: 'POST',
    //   url: 'https://sc-backend-v0.herokuapp.com/api/future-sign-up',
    //   data: formDetails,
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': '*',
    //   },
    // })
    //   .then(function (response) {
    //     //handle success
    //   })
    //   .catch(function (error) {
    //     //handle error
    //     alert(error.response.data.reason);
    //   });
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

export default GetInvolved;
