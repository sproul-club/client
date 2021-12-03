import React, { useState, useEffect } from 'react';
import registerbear from '../../assets/register.png';
import './OnboardingSkip.css';
import coloredBall from '../../assets/status1.png';
import uncoloredBall from '../../assets/status2.png';

const OnboardingSkip = ({ closeOnlySkip, close }) => {
  return (
    <div className="onboarding">
      <div className="content">
        <div className="imageContainer">
          <img
            src={registerbear}
            className="register-bear"
            alt="welcome picture"
          />
        </div>
        <br></br>
        <div className="text">
          <h3>Are you sure you want to skip?</h3>
        </div>
        <div className="caption-text">
          <p>This will no longer be displayed in future logins</p>
        </div>
        <br></br>
        <div className="iamsure">
          <button id="i-am-sure-button" onClick={close}>
            {' '}
            I am sure
          </button>
        </div>
        <div className="nevermind">
          <button id="nevermind-button" onClick={closeOnlySkip}>
            {' '}
            Never mind! Bring me back
          </button>
        </div>

        {/* <OnboardingModal
          showModal={showNextModal}
          setShowModal={setNextModal}
        >
          <div className="onboarding-modal">
            <OnboardingFinal student={student} close={exitOnboarding}/>
          </div>
        </OnboardingModal> */}
      </div>
    </div>
  );
};

export default OnboardingSkip;
