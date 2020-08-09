import React, { useState } from 'react';
import Modal from '../../layout/Modal';

const Resources = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <h3>Resources</h3>
      <button onClick={() => setShowModal(true)}>Add Resource</button>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <div className="add-resource">
          <div className="input">
            <div className='input-label'>Title</div>
            <input type="text" />
          </div>
          <div className="input">
            <div className='input-label'>Link</div>
            <input type="text" />
          </div>
          <button type="submit">Add Resource</button>
        </div>
      </Modal>
    </div>
  );
};

export default Resources;
