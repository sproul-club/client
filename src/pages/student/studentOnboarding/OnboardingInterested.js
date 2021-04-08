import React, { useState, useEffect } from 'react';
import interested from './assets/interested.png';
import './OnboardingInterested.css';
import coloredBall from './assets/status1.png';
import uncoloredBall from './assets/status2.png';
import OnboardingModal from '../components/onboardingModal/OnboardingModal';
import OnboardingTimeline from './OnboardingTimeline';
import OnboardingSkip from './OnboardingSkip';

const OnboardingInterested = ({ close }) => {
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
            src={interested}
            className="interested"
            alt="interested picture"
          />
        </div>
        <br></br>
        <div className="caption-text">
          <p>
            On your Application Tracker Board, click on "+ New" to add clubs
            that you're interested in applying to from your Favorites or the
            catalog. You can then use the arrows to move them into "Applied" or
            "Interview" throughout the club recruiting season.
          </p>
        </div>

        <div className="fourth">
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
          </button>
        </div>

        <OnboardingModal showModal={showNextModal} setShowModal={setNextModal}>
          <div className="onboarding-modal">
            <OnboardingTimeline close={exitOnboarding} />
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

export default OnboardingInterested;
