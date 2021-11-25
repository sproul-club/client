import React, { useState, useEffect } from 'react';
import Modal from '../../layout/Modal';
// import { normalizeUrl, validURL } from '../../utils/normalizeUrl';
import { NotificationManager } from 'react-notifications';

const DescModal = (profile) => {
  /*Tracks input values for edit modal*/
  const [descr, setDescr] = useState(profile.about_us);
  const [descrChars, setChars] = useState(750 - descr.length);

  /*Tracks current values in saved resources array*/
  const [propsText, setPropsText] = useState(props.text); // check useState das shady

  /*Control displaying of each modal*/
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDelModal, setShowDelModal] = useState(false);

  /*Updates main resource array with entries in the edit modal*/
  function singleSave() {
    if (text.length === 0) {
      NotificationManager.error('Please enter a description', '', 1500);
      return;
    }
    setShowEditModal(false);
    props.entryChange(props.text);
    setPropsText(text);
  }


  function cancelEdit() {
    setShowEditModal(false);
    setText(propsText);
  }

  /*Update states to reflect current value in array*/
  if (propsText !== props.text) {
    setPropsText(props.text);
  }

  const descrChange = (e) => {
    setDescr(e.target.value);
    setChars(750 - e.target.value.length);
  };

  const submit = async () => {
    const newProfile = {
      name: orgName.trim(),
      owner: orgEmail,
      tags: tags.map((tags) => tags.value),
      about_us: descr,
      app_required: !!appReq.value,
      new_members: !!recruiting.value,
    };

    try {
      await updateProfile(newProfile);
      NotificationManager.success('Profile changes saved successfully!', '', 1500);
    } catch (err) {
      NotificationManager.error('Profile changes unsuccessful!', '', 1500);
    }

    await Promise.all([
      uploadLogoPic(logoImage),
      uploadBannerPic(bannerImage)
    ]);
  };

  /*Updates entries in the edit modal to reflect saved resources*/
  useEffect(() => {
    setText(propsText);
  }, [propsText]);

  return (
    <div className="res-flex">
      <div className="title-buttons-flex">
        <div className="res-num">Resource #{props.num + 1}</div>
        <div className="del-edit-flex">
          <img
            alt="edit"
            onClick={() => setShowEditModal(true)}
            src={require('../assets/linkImages/editLink.png')}
          />
          <img
            alt="remove"
            onClick={() => setShowDelModal(true)}
            src={require('../assets/linkImages/removeLink.png')}
          />
        </div>
      </div>
      <div className="event-link-flex">
        <div>{propsName}</div>
        <a href={propsLink} target="_blank" without rel="noopener noreferrer">
          <img
            alt="resources"
            id="link"
            src={require('../assets/linkImages/resLink.png')}
          />
        </a>
      </div>

      {/*EDIT RESOURCE MODAL*/}
      <Modal
        showModal={showEditModal}
        setShowModal={setShowEditModal}
        close={cancelEdit}
      >
        <div className="res-modal">
          <h3 id="res-bold">Edit Resource</h3>
          <p id="res-desc">Update the information for this resource!</p>
          <div className="gray-modal">
            <div className="input-holder">
              <div className="input-title">Resource Title</div>
              <input
                value={name}
                placeholder="Type resource name"
                className="resourcesInput"
                type="text"
                onChange={(e) => setName(e.target.value)}
              ></input>
              <div className="input-title">URL Link</div>
              <input
                value={link}
                placeholder="+ Add a link (google drive, google form, youtube, etc)"
                className="resourcesInput"
                type="text"
                onChange={(e) => setLink(e.target.value)}
              ></input>
            </div>
          </div>
          <div id="buttons-flex">
            {/*(name !== propsName || link !== propsLink) ? <p>You have unsaved changes!!</p>: null */}
            <button class="cancel-button button-red-outline" onClick={cancelEdit}>
              {' '}
              Cancel{' '}
            </button>
            <button class="save-button button-blue-fill" onClick={singleSave}>
              Save
            </button>
          </div>
        </div>
      </Modal>

      {/*DELETE RESOURCE MODAL*/}
      <Modal
        showModal={showDelModal}
        setShowModal={setShowDelModal}
        close={() => setShowDelModal(false)}
      >
        <div className="del-modal">
          <p className="del-text">Are you sure you want to delete this?</p>
          <div className="del-buttons-flex">
            <button id="del-cancel" onClick={() => setShowDelModal(false)}>
              Cancel
            </button>
            <button id="del-del" onClick={singleDelete}>
              Delete
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile.profile,
});

// export default DescModal;
export default connect(mapStateToProps, { updateProfile })(DescModal);
