import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { updateProfile } from '../../actions/profile';
import { NotificationManager } from 'react-notifications';
import './EditView.css';
import Modal from '../../layout/Modal';

const EditDesc = ({
  profile,
  updateProfile,
}) => {
  const [descr, setDescr] = useState(profile.about_us);
  const [descrChars, setDescrChars] = useState(750 - descr.length);

  const descrChange = (e) => {
    setDescr(e.target.value);
    setDescrChars(750 - e.target.value.length);
  }; 

  const [showDescrModal, setShowDescrModal] = useState(false);

  function cancelEdit() {
    setShowDescrModal(false);
    setDescr(profile.about_us);
    setDescrChars(750 - descr.length);
  }

  /*Updates entries in the edit modal to reflect saved resources*/
  // useEffect(() => {
  //   setDescr(profile.about_us);
  //   setDescrChars(750 - descr.length);
  // }, [profile.about_us, 750 - descr.length]);

  const submit = async () => {
    const newProfile = {
      about_us: descr,
    };

    try {
      await updateProfile(newProfile);
      NotificationManager.success('Profile changes saved successfully!', '', 1500);
    } catch (err) {
      NotificationManager.error('Profile changes unsuccessful!', '', 1500);
    }

    setShowDescrModal(false);
  };

  return (
    <div>
      <p>Description <button onClick={() => setShowDescrModal(true)}><i class="far fa-edit"></i></button></p>
      <div className="text">{profile.about_us}</div>
           
      <Modal
        // showModal={showDescrModal}
        showModal={true}
        setShowModal={setShowDescrModal}
        close={cancelEdit}
      >
        <div className="admin-modal">
          <div className="admin-modal-header">About {profile.name}</div>
          <div className="admin-modal-text">Enter a short description about your organization.</div>
          <div className="input-holder">
            <div className="input-title">Description *</div>
            <input
              value={descr}
              placeholder="Enter a description"
              className="input-text"
              type="text"
              onChange={(e) => descrChange(e)}
            ></input>
          </div>
          <div className="subtitle">{descrChars} characters remaining</div> 
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

const mapStateToProps = (state) => ({
  profile: state.profile.profile,
});

export default connect(mapStateToProps, {
  updateProfile,
})(EditDesc);
