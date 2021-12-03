import React, { useState, useEffect } from 'react';
import registerbear from '../../assets/register.png';
import './Onboarding.css';
import coloredBall from '../../assets/status1.png';
import uncoloredBall from '../../assets/status2.png';
import OnboardingModal from '../../../components/onboardingModal/OnboardingModal';
import OnboardingFavorites from './OnboardingFavorites';
import OnboardingSkip from './OnboardingSkip';

const Onboarding = ({ student, close }) => {
  const [showNextModal, setNextModal] = useState(false);
  const [showSkipModal, setSkipModal] = useState(false);

  function exitOnboarding() {
    close();
    setNextModal(false);
    setSkipModal(false);
  }

  function exitSkip() {
    setSkipModal(false);
  }

  function goToNext() {
    setNextModal(true);
  }

  return (
    <div className="onboarding">
      <div className="content">
        <div className="imageContainer">
          <img
            src={registerbear}
            className="register-bear"
            alt="welcome bear"
          />
        </div>
        <div className="text">
          <h3>Hi {student.name},</h3>
          <h3>welcome to your sproul.club student dashboard!</h3>
        </div>
        <div className="caption-text">
          <br></br>
          <p>
            Let's get you aquainted with the several features on your dashboard
            that'll help you throughout recruitment this semester.
          </p>
        </div>

        <div className="first">
          <button id="next-button" onClick={goToNext}>
            {' '}
            Next{' '}
          </button>
          <button id="skip-button" onClick={() => setSkipModal(true)}>
            {' '}
            skip{' '}
          </button>

          <button id="invalid-button">
            <img
              src={coloredBall}
              id="coloredBall"
              className="balls"
              alt="coloredBall"
            />
            <img
              src={uncoloredBall}
              id="uncoloredBall"
              className="balls"
              alt="uncoloredBall"
            />
            <img
              src={uncoloredBall}
              id="uncoloredBall"
              className="balls"
              alt="uncoloredBall"
            />
            <img
              src={uncoloredBall}
              id="uncoloredBall"
              className="balls"
              alt="uncoloredBall"
            />
            <img
              src={uncoloredBall}
              id="uncoloredBall"
              className="balls"
              alt="uncoloredBall"
            />
          </button>
        </div>

        <OnboardingModal showModal={showNextModal} setShowModal={setNextModal}>
          <div className="onboarding-modal">
            <OnboardingFavorites close={exitOnboarding} />
          </div>
        </OnboardingModal>

        <OnboardingModal showModal={showSkipModal} setShowModal={setSkipModal}>
          <div className="onboarding-modal">
            <OnboardingSkip closeOnlySkip={exitSkip} close={exitOnboarding} />
          </div>
        </OnboardingModal>
      </div>
    </div>
  );
};

export default Onboarding;
