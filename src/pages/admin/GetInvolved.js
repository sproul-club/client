import React, { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

const GetInvolved = ({ profile }) => {
  const [involvedDescr, setInvolvedDescr] = useState(profile.description);
  /*const [involvedDesc, setInvolvedDesc] = useState(profile.description);*/
  const [descrChars, setChars] = useState(250 - involvedDescr.length);

  const descrChange = (e) => {
    setInvolvedDescr(e.target.value);
    setChars(250 - e.target.value.length);
  };

  const submitValue = (e) => {
    const formDetails = {
      'involved-desc': involvedDescr,
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
           value={involvedDescr}
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

export default GetInvolved;
