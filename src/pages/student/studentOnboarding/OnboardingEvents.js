import React, { useState, useEffect } from 'react';
import events from './assets/events.png';
import './OnboardingEvents.css';
import coloredBall from './assets/status1.png';
import uncoloredBall from './assets/status2.png';
import OnboardingModal from '../components/onboardingModal/OnboardingModal';
import OnboardingInterested from './OnboardingInterested';
import OnboardingSkip from './OnboardingSkip';
import { GolfCourseTwoTone } from '@material-ui/icons';

const OnboardingEvents = ({ close }) => {
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
          <img src={events} className="events" alt="events picture" />
        </div>
        <br></br>
        <div className="caption-text">
          <p>
            At the top, your events are listed out so you can readily see what's
            happening today and in the future.
          </p>
          <p className="little-caption">
            <i>
              Note: Only public events displayed. Invite-only events are hidden.
            </i>
          </p>
        </div>

        <div className="third">
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
          </button>
        </div>

        <OnboardingModal showModal={showNextModal} setShowModal={setNextModal}>
          <div className="onboarding-modal">
            <OnboardingInterested close={exitOnboarding} />
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

export default OnboardingEvents;
