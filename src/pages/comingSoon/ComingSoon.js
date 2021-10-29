import React from 'react';
import './ComingSoon.scss';
import Footer from '../../components/layout/footer/Footer';
import ball1 from '../assets/ball1cropped.svg';
import ball2 from '../assets/ball2cropped.svg';
import ball3 from '../assets/ball3cropped.svg';
import ball4 from '../assets/ball4cropped.svg';
import blob1 from '../assets/blobyellow.png';
import blob2 from '../assets/blobblue.png';

const ComingSoon = () => {
  return (
    <div className="comingsoon">
      <div className="text">
        <h3>Coming soon</h3>
        {/* <p>Stay tuned for something amazing.</p>
        <div className="buttonContainer">
          <a href="/">Return to home</a>
        </div> */}
      </div>
      <div className="dotContainer">
        <img src={ball1} className="ball1" alt="dot" />
        <img src={ball2} className="ball2" alt="dot" />
        <img src={ball3} className="ball3" alt="dot" />
        <img src={ball4} className="ball4" alt="dot" />
      </div>
      <div className="blobContainer">
        <img src={blob2} className="blob2" alt="blob" />
        <img src={blob1} className="blob1" alt="blob" />
      </div>
      <Footer />
    </div>
  );
};

export { ComingSoon };
