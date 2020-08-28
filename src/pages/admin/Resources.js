import React, { useState } from 'react';
import Modal from '../../layout/Modal';
import ResComp from './ResComp';
import { connect } from 'react-redux';
import {
  addResource,
  updateResource,
  deleteResource,
} from '../../actions/profile';
import './Resources.css';
import { validURL, normalizeUrl } from '../../utils/normalizeUrl';
import {
  NotificationManager,
  NotificationContainer,
} from 'react-notifications';

const Resources = ({
  resources,
  addResource,
  updateResource,
  deleteResource,
}) => {
  /*Determines if add resource shown*/
  const [showModal, setShowModal] = useState(false);

  /*Holds input values in add modal*/
  const [newName, setNewName] = useState('');
  const [newLink, setNewLink] = useState('');

  /*Passed down to resComp to allow editing of resources array above*/
  function entryChange(id, name, link) {
    //update resource action
    updateResource(id, { name, link });
  }

  /*Adds resource to array, count++, resets title and link state values */
  function addRes() {
    const emptyRes = {
      name: newName,
      link: normalizeUrl(newLink),
    };
    if (newLink.length > 0 && !validURL(newLink)) {
      NotificationManager.error('Please enter a valid URL', '', 1500);
      return;
    }
    if (newName.length === 0) {
      NotificationManager.error('Please enter a resource name', '', 1500);
      return;
    }
    // call add resource action
    addResource(emptyRes);
    setNewName('');
    setNewLink('');
    setShowModal(false);
  }

  function cancelAdd() {
    setShowModal(false);
    setNewName('');
    setNewLink('');
  }

  /*Passed down to resComp to allow it to remove resource from state array, count--*/
  function removeRes(id) {
    deleteResource(id);
  }

  /*Create all resource components based on content saved in array*/
  const resComps = resources.map((res, i) => (
    <ResComp
      key={i}
      num={i}
      data={res}
      entryChange={entryChange}
      removeRes={removeRes}
    />
  ));

  return (
    <div className="resources">
      <h3>Resources</h3>
      <div className="admin-text">
        Link important resources for prospective or current members!
      </div>
      <div className="formGroup">
        {resComps}
        <img
          className="add-button"
          alt="add resource"
          src={require('../assets/linkImages/addLink.png')}
          onClick={() => setShowModal(true)}
        />
      </div>

      {/*ADD RESOURCE MODAL*/}
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        close={cancelAdd}
      >
        <div className="res-modal">
          <h3 id="res-bold">Add New Resource</h3>
          <p id="res-desc">
            Link additional resources for prospective or current members!
          </p>
          <div className="gray-modal">
            <div className="input-holder">
              <div className="input-title">Resource Title</div>
              <input
                value={newName}
                placeholder="Type resource name"
                className="resourcesInput"
                type="text"
                onChange={(e) => setNewName(e.target.value)}
                maxLength={100}
              ></input>
              <div className="input-title">URL Link</div>
              <input
                value={newLink}
                placeholder="+ Add a link (google drive, google form, youtube, etc)"
                className="resourcesInput"
                type="text"
                onChange={(e) => setNewLink(e.target.value)}
              ></input>
            </div>
          </div>
          <div id="buttons-flex">
            <button id="cancel-button" onClick={cancelAdd}>
              {' '}
              Cancel{' '}
            </button>
            <button id="save-button" onClick={addRes}>
              Save
            </button>
          </div>
        </div>
      </Modal>
      <NotificationContainer />
    </div>
  );
};

export default connect(null, { addResource, updateResource, deleteResource })(
  Resources
);
