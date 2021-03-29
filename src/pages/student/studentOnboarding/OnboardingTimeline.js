import React, { useState, useEffect } from 'react';
import timeline from './assets/timeline.png';
import './OnboardingTimeline.css';
import coloredBall from './assets/status1.png';
import uncoloredBall from './assets/status2.png';

const OnboardingTimeline = ({ close }) => {
  return (
    <div className="onboarding">
      <div className="content">
        <div className="imageContainer">
          <img src={timeline} className="timeline" alt="timeline picture" />
        </div>
        <div className="caption-text">
          <p>
            On your Master Application Timeline, you can see all of your clubs'
            events for the recruitment season to help you plan accordingly. Just
            click on the event itself to find more information.
          </p>
        </div>

        <div className="fifth">
          <button id="get-started-button" onClick={close}>
            {' '}
            Get Started!{' '}
          </button>
        </div>

        <div className="sixth">
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
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingTimeline;
