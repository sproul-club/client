import React from 'react';
import './FAQ.css';
import Footer from '../layout/Footer';
import logo from './assets/logo.png';

const FAQ = () => {
  return (
    <div className="faq">
      <div className="content">
          <img src={logo} className="logo" alt="logo" width="128" height="128" />
          <h3>Frequently Asked Questions</h3>

          <div className="text">
            <h2> Question: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua? </h2>
            <p> Answer: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat sed cras ornare arcu dui vivamus arcu. Diam vulputate ut pharetra sit amet aliquam id diam maecenas. Tincidunt praesent semper feugiat nibh sed pulvinar proin. Fermentum et sollicitudin ac orci phasellus.  </p>
            
            <h2> Question: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua? </h2>
            <p> Answer: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat sed cras ornare arcu dui vivamus arcu. Diam vulputate ut pharetra sit amet aliquam id diam maecenas. Tincidunt praesent semper feugiat nibh sed pulvinar proin. Fermentum et sollicitudin ac orci phasellus.  </p>
            
            <h2> Question: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua? </h2>
            <p> Answer: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat sed cras ornare arcu dui vivamus arcu. Diam vulputate ut pharetra sit amet aliquam id diam maecenas. Tincidunt praesent semper feugiat nibh sed pulvinar proin. Fermentum et sollicitudin ac orci phasellus.  </p>
            
            <h2> Question: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua? </h2>
            <p> Answer: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat sed cras ornare arcu dui vivamus arcu. Diam vulputate ut pharetra sit amet aliquam id diam maecenas. Tincidunt praesent semper feugiat nibh sed pulvinar proin. Fermentum et sollicitudin ac orci phasellus.  </p>
          
          
          </div>
          
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
