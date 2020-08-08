import React from 'react';
import "./ComingSoon.css";
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import ball1 from './assets/ball1cropped.svg';
import ball2 from './assets/ball2cropped.svg';
import ball3 from './assets/ball3cropped.svg';
import ball4 from './assets/ball4cropped.svg';
import blob1 from './assets/blobyellow.png';
import blob2 from './assets/blobblue.png';

const ComingSoon = () => {
  return (
      <div className="comingsoon">
        <Navbar />
        <div className="text">
          <h3>We are <b>almost</b> there</h3>
          <p>Stay tuned for something amazing.</p>
          <div className="buttonContainer">
            <a href="/">Return to home</a>
          </div>
        </div>
        <div className="dotContainer">
          <img src={ball1} className="ball1" />
          <img src={ball2} className="ball2" />
          <img src={ball3} className="ball3" />
          <img src={ball4} className="ball4" />
        </div>
        <div className="blobContainer">
          <img src={blob2} className="blob2" />
          <img src={blob1} className="blob1" />
        </div>
        <Footer />
      </div>
  );
};

export { ComingSoon };
