import React, { useState } from 'react';
import Modal from '../../layout/Modal';

const Events = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <h3>Events</h3>
      <button onClick={() => setShowModal(true)}>Add Event</button>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <div className="add-resource">
          <div className="input">
            <div className='input-label'>Event Name</div>
            <input type="text" />
          </div>
          <div className="input">
            <div className='input-label'>Event Link</div>
            <input type="text" />
          </div>
          <div className="input">
            <div className='input-label'>Start Time</div>
            <input type="date" />
            <input type="date" />
            <input type="date" />
          </div>
          <div className="input">
            <div className='input-label'>Description</div>
            <input type="textarea" />
          </div>
          <button type="submit">Add Resource</button>
        </div>
      </Modal>
    </div>
  );
};

export default Events;
