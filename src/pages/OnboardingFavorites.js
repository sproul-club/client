import React, {useState} from 'react';
import './OnboardingFavorites.css'
import coloredBall from './assets/status1.png'
import uncoloredBall from './assets/status2.png'
import favorite from './assets/favorite.png'
import OnboardingModal from '../layout/OnboardingModal';
import OnboardingEvents from './OnboardingEvents';
import OnboardingSkip from './OnboardingSkip';

const OnboardingFavorites = ({
  closeOnlySkip,
  close
}) => {
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
            src={favorite} 
            className="favorite" 
            alt="favorite picture" 
            />
        </div>
        <br>
        </br>
        <div className="caption-text">
          <p>
            In the Discover page, there's a catalog of clubs where you will be
            able to favorite the clubs that catch your eye. These can then be
            found under "Account" in "Favorites.
          </p>
        </div>

        <div className="second">
            <button id="next-button" onClick={goToNext}> Next </button>
            <button id="skip-button" onClick={() => setSkipModal(true)}> skip </button>

            <button id="invalid-button"> 
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
            <img
                src={uncoloredBall}
                id="uncoloredBall"
                className="balls"
                alt="uncoloredBall"
            />
            </button>

        </div>
    
        <OnboardingModal
          showModal={showNextModal}
          setShowModal={setNextModal}
        >
          <div className="onboarding-modal">
            <OnboardingEvents close={exitOnboarding}/>
          </div>
        </OnboardingModal>

        <OnboardingModal
          showModal={showSkipModal}
          setShowModal={setSkipModal}
        >
          <div className="onboarding-modal">
            <OnboardingSkip closeOnlySkip={exitSkip} close={exitOnboarding}/>
          </div>
        </OnboardingModal>

      </div>
    </div>
  );
};


export default OnboardingFavorites;
