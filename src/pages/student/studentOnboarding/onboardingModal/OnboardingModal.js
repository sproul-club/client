import React, { useRef } from 'react';
import useOnClickOutside from '../../../../utils/useOnClickOutside';
import './OnboardingModal.css';

const OnboardingModal = ({ showModal, setShowModal, children }) => {
  const ref = useRef();

  useOnClickOutside(ref, () => {
    if (showModal) {
      setShowModal(true);
    }
  });

  // delete this after
  // const closeFunction = close || setShowModal(false);

  return (
    <div>
      {showModal && (
        <div className="popup">
          <div className="popup-wrapper">
            <div className="popup_inner" ref={ref}>
              {/* delete this after */}
              {/* <div className="exit" onClick={closeFunction}>
                <i className="fas fa-times"></i>
              </div> */}
              {children}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OnboardingModal;
