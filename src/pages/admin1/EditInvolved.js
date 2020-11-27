import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateProfile } from '../../actions/profile';
import { NotificationManager } from 'react-notifications';
import './EditView.css';
import Modal from '../../layout/Modal';

const EditInvolved = ({
  profile,
  updateProfile,
}) => {
  const [involvedDesc, setInvolvedDesc] = useState(profile.get_involved);
  const [involvedChars, setInvolvedChars] = useState(500 - involvedDesc.length);

  const involvedChange = (e) => {
    setInvolvedDesc(e.target.value);
    setInvolvedChars(500 - e.target.value.length);
  };
  
  const [showInvolvedModal, setShowInvolvedModal] = useState(false);

  const submit = async () => {
    const newProfile = {
      get_involved: involvedDesc,
    };

    try {
      await updateProfile(newProfile);
      NotificationManager.success('Profile changes saved successfully!', '', 1500);
    } catch (err) {
      NotificationManager.error('Profile changes unsuccessful!', '', 1500);
    }
  };

  return (
    <div>
          <p>How to Get Involved pls<button onClick={() => setShowInvolvedModal(true)}><i class="far fa-edit"></i></button></p>
          <div className="desc-text" id="right-text">
            {profile.get_involved}
          </div>
     

      <Modal
        showModal={showInvolvedModal}
        setShowModal={setShowInvolvedModal}
      >
        getting involved bitch
      </Modal>

    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile.profile,
});

export default connect(mapStateToProps, {
  updateProfile,
})(EditInvolved);
