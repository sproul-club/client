import React, { useState } from 'react';
import { NotificationManager } from 'react-notifications';
import './EditView.css';
import Modal from '../../layout/Modal';

const EditInvolved = ({
  profile,
  updateProfile,
}) => {
  const [involvedDesc, setInvolvedDesc] = useState(profile.get_involved);
  const [involvedChars, setInvolvedChars] = useState(500 - involvedDesc.length);
  const [involvedLink, setInvolvedLink] = useState(''); // placeholder: need API endpoint for application link

  const involvedDescChange = (e) => {
    setInvolvedDesc(e.target.value);
    setInvolvedChars(500 - e.target.value.length);
  };

  const involvedLinkChange = (e) => {
    setInvolvedLink(e.target.value);
  };
  
  const [showInvolvedModal, setShowInvolvedModal] = useState(false);

  function cancelEdit() {
    setShowInvolvedModal(false);
    setInvolvedDesc(profile.get_involved);
    setInvolvedChars(500 - involvedDesc.length);
    setInvolvedLink(''); // placeholder: need API endpoint for application link
  }

  const submit = async () => {
    const newProfile = {
      get_involved: involvedDesc,
      // get_involved_link: involvedLink; // placeholder: need API endpoint for application link 
    };

    try {
      await updateProfile(newProfile);
      NotificationManager.success('Profile changes saved successfully!', '', 1500);
    } catch (err) {
      NotificationManager.error('Profile changes unsuccessful!', '', 1500);
    }

    setShowInvolvedModal(false);
  };

  return (
    <div>
          <p>How to Get Involved<button onClick={() => setShowInvolvedModal(true)}><i class="far fa-edit"></i></button></p>
          <div className="desc-text" id="right-text">
            {profile.get_involved}
          </div>
     

      <Modal
        showModal={showInvolvedModal}
        setShowModal={setShowInvolvedModal}
        close={cancelEdit}
      >
        <div className="admin-modal">
          <div className="admin-modal-header">How to get involved</div>
          <div className="admin-modal-text">Let prospective members know how to join or be a part of your organization!</div>
          <div className="input-holder">
            <div className="input-title">Description</div>
            <input
              value={involvedDesc}
              placeholder="Enter a description"
              className="input-text"
              type="text"
              onChange={(e) => involvedDescChange(e)}
              style={{height: '150px',}}
            ></input>
            <div className="subtitle">{involvedChars} characters remaining</div> 

          </div>
          <div className="input-holder">
            <div className="input-title">Application Link</div>
            <input
              value={involvedLink}
              placeholder="Enter link"
              className="input-text"
              type="text"
              onChange={(e) => involvedLinkChange(e)}
            ></input>
          </div>
        </div>
        <div id="buttons-flex">
          <button id="cancel-button" onClick={cancelEdit}>
            {' '}
            Cancel{' '}
          </button>
          <button id="save-button" onClick={submit}>
            Save
          </button>
        </div>
      </Modal>

    </div>
  );
};

export default EditInvolved;
