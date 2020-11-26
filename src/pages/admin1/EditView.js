import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateProfile } from '../../actions/profile';
import { NotificationManager } from 'react-notifications';
import '../ClubPage.css';
import Modal from '../../layout/Modal';

const EditView = ({
  profile,
  updateProfile,
}) => {
  const [descr, setDescr] = useState(profile.about_us);
  const [descrChars, setDescrChars] = useState(750 - descr.length);

  const [involvedDesc, setInvolvedDesc] = useState(profile.get_involved);
  const [involvedChars, setInvolvedChars] = useState(500 - involvedDesc.length);

  const descrChange = (e) => {
    setDescr(e.target.value);
    setDescrChars(750 - e.target.value.length);
  }; 

  const involvedChange = (e) => {
    setInvolvedDesc(e.target.value);
    setInvolvedChars(500 - e.target.value.length);
  };
  
  const [showDescrModal, setShowDescrModal] = useState(false);
  const [showInvolvedModal, setShowInvolvedModal] = useState(false);

  const submit = async () => {
    const newProfile = {
      about_us: descr,
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
      <div className="flex-container-chungus">
        <div className="flex-container-left">
            <div className="left-box">
              <p>Description <button onClick={() => setShowDescrModal(true)}><i class="far fa-edit"></i></button></p>
              <div className="desc-text">{profile.about_us}</div>
            </div>
        </div>
        <div className="flex-container-right">
        <div className="right-box">
          <p>How to Get Involved <button onClick={() => setShowInvolvedModal(true)}><i class="far fa-edit"></i></button></p>
          <div className="desc-text" id="right-text">
            {profile.get_involved}
          </div>
        </div>
        </div>
      </div>

      <Modal
        showModal={showDescrModal}
        setShowModal={setShowDescrModal}
      >
        DESCRIPTIONSFDSAKLF;LS
      </Modal>

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
})(EditView);
