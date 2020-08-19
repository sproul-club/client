import React, { useState, useEffect } from 'react';
import Modal from '../../layout/Modal';
const ResComp = (props) => {
  /*Tracks input values for edit modal*/
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  /*Tracks current values in saved resources array*/
  const [propsName, setPropsName] = useState(props.data.name);
  const [propsLink, setPropsLink] = useState(props.data.link);

  /*Control displaying of each modal*/
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDelModal, setShowDelModal] = useState(false);

  /*Updates main resource array with entries in the edit modal*/
  function singleSave() {
    setShowEditModal(false);
    props.entryChange(props.data.id, name, link);
    setPropsName(name);
  }

  /*Removes selected resource from main resource array*/
  function singleDelete() {
    props.removeRes(props.data.id);
    setShowDelModal(false);
  }

  function cancelEdit() {
    setShowEditModal(false);
    setName(propsName);
    setLink(propsLink);
  }

  /*onChange for name input in edit modal*/
  function changeName(event) {
    setName(event.target.value);
  }

  /*onChange for link input in edit modal*/
  function changeLink(event) {
    setLink(event.target.value);
  }

  /*Update states to reflect current value in array*/
  if (propsName !== props.data.name) {
    setPropsName(props.data.name);
  }
  if (propsLink !== props.data.link) {
    setPropsLink(props.data.link);
  }

  /*Updates entries in the edit modal to reflect saved resources*/
  useEffect(() => {
    setName(propsName);
    setLink(propsLink);
  }, [propsName, propsLink]);

  return (
    <div className="res-flex">
      <div className="title-buttons-flex">
        <div className="res-num">Resource #{props.num + 1}</div>
        <div className="del-edit-flex">
          <img
            alt="remove"
            onClick={() => setShowDelModal(true)}
            src={require('../assets/linkImages/removeLink.png')}
          />
          <img
            alt="edit"
            onClick={() => setShowEditModal(true)}
            src={require('../assets/linkImages/editLink.png')}
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
      <Modal showModal={showEditModal} setShowModal={setShowEditModal}>
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
                onChange={changeName}
              ></input>
              <div className="input-title">URL Link</div>
              <input
                value={link}
                placeholder="+ Add a link (google drive, google form, youtube, etc)"
                className="resourcesInput"
                type="text"
                onChange={changeLink}
              ></input>
            </div>
          </div>
          <div id="buttons-flex">
            {/*(name !== propsName || link !== propsLink) ? <p>You have unsaved changes!!</p>: null */}
            <button id="cancel-button" onClick={cancelEdit}>
              {' '}
              Cancel{' '}
            </button>
            <button id="save-button" onClick={singleSave}>
              Save
            </button>
          </div>
        </div>
      </Modal>

      {/*DELETE RESOURCE MODAL*/}
      <Modal showModal={showDelModal} setShowModal={setShowDelModal}>
        <div id="del-modal">
          <p id="del-text">Are you sure you want to delete this?</p>
          <div id="del-buttons-flex">
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
export default ResComp;
