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

const Resources = ({
  profile,
  addResource,
  updateResource,
  deleteResource,
}) => {
  /*Holds all existing resources and keeps count*/
  const [resources, setResources] = useState(profile.resources);
  const [resCount, setResCount] = useState(0);

  /*Determines if add resource shown*/
  const [showModal, setShowModal] = useState(false);

  /*Holds input values in add modal*/
  const [newName, setNewName] = useState('');
  const [newLink, setNewLink] = useState('');

  /*Passed down to resComp to allow editing of resources array above*/
  function entryChange(id, name, link) {
    let tempArr = [...resources];
    const tempObj = {
      id: id,
      name: name,
      link: link,
    };
    tempArr[id] = tempObj;
    setResources(tempArr);
  }

  function changeTitle(event) {
    setNewName(event.target.value);
  }

  function changeLink(event) {
    setNewLink(event.target.value);
  }

  /*Adds resource to array, count++, resets title and link state values */
  function addRes() {
    const emptyRes = {
      name: newName,
      link: newLink,
    };
    setResources([...resources, emptyRes]);
    setResCount((prevCount) => prevCount + 1);
    console.log('resources: ', resCount);
    addResource(emptyRes, resources);
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
    /*Split into left and right to decrement id's of listings to right of delete entry*/
    const newResLeft = resources.filter((res) => res.id < id);
    const newResRight = resources.filter((res) => res.id > id);
    const renumberedRight = newResRight.map(function test(res) {
      return {
        id: res.id - 1,
        name: res.name,
        link: res.link,
      };
    });
    const newResList = [...newResLeft, ...renumberedRight];
    setResCount((prevCount) => prevCount - 1);
    setResources(newResList);
  }

  /*Create all resource components based on content saved in array*/
  const resComps = resources.map((res, i) => (
    <ResComp
      key={i}
      data={res}
      entryChange={entryChange}
      removeRes={removeRes}
    />
  ));

  return (
    <div>
      <h3>Resources</h3>
      <div className="admin-text">
        Link important resources for prospective or current members!
      </div>
      <div className="gray-back">
        {resComps}
        <img
          className="add-button"
          alt="add resource"
          src={require('../assets/linkImages/addLink.png')}
          onClick={() => setShowModal(true)}
        />
      </div>

      {/*ADD RESOURCE MODAL*/}
      <Modal showModal={showModal} setShowModal={setShowModal}>
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
                onChange={changeTitle}
              ></input>
              <div className="input-title">URL Link</div>
              <input
                value={newLink}
                placeholder="+ Add a link (google drive, google form, youtube, etc)"
                className="resourcesInput"
                type="text"
                onChange={changeLink}
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
    </div>
  );
};

export default connect(null, { addResource, updateResource, deleteResource })(
  Resources
);
