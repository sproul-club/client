import React, { useRef } from 'react';
import useOnClickOutside from '../../../utils/useOnClickOutside';
import './Modal.scss';

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
            <div className="popup_inner" ref={ref}>
              <div className="exit" onClick={closeFunction}>
                <i className="fas fa-times"></i>
              </div>
              {children}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
