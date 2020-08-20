import React from 'react';
import { deleteEvent, deleteResource } from '../../actions/profile';
import { connect } from 'react-redux';
import Modal from '../../layout/Modal';

const DeleteModal = ({
  type,
  item,
  showModal,
  setShowModal,
  deleteEvent,
  deleteResource,
}) => {
  // type can be resource or event

  const deleteItem = () => {
    if (type === 'resource') deleteResource(item.id);
    if (type === 'event') deleteEvent(item.id);
    setShowModal(false);
  };

  return (
    <Modal showModal={showModal} setShowModal={setShowModal}>
      <div className="delete-modal">
        <div className="deleteModalText">
          Are you sure you want to delete this?
        </div>
        <div>
          <button onClick={deleteItem}>Yes</button>
          <button>No</button>
        </div>
      </div>
    </Modal>
  );
};

export default connect(null, { deleteEvent, deleteResource })(DeleteModal);
