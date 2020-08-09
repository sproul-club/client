import React, { useRef } from 'react';
import useOnClickOutside from '../utils/useOnClickOutside';
import './Modal.css';

const Modal = ({ showModal, setShowModal, children }) => {
  const ref = useRef();

  useOnClickOutside(ref, () => {
    setShowModal(false);
  });

  return (
    <div classname="modal">
      {showModal && (
        <div className="popup">
          <div className="popup_inner" ref={ref}>
            <div className="exit" onClick={() => setShowModal(false)}>
              <i className="fas fa-times"></i>
            </div>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
