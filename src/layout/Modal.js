import React, { useRef } from 'react';
import useOnClickOutside from '../utils/useOnClickOutside';
import './Modal.css';

const Modal = ({ showModal, setShowModal, close, children }) => {
  const ref = useRef();

  useOnClickOutside(ref, () => {
    if (showModal) {
      setShowModal(false);
    }
  });

  const closeFunction = close || setShowModal(false);

  return (
    <div>
      {showModal && (
        <div className="popup">
          <div className="popup-wrapper">
            <div className="exit" onClick={closeFunction}>
              <i className="fas fa-times"></i>
            </div>
            <div className="popup_inner" ref={ref}>
              {children}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
