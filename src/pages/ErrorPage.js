import React from 'react';
import RichText from './RichText';

import './ErrorPage.css'

const ErrorPage = () => {
  return (
    <div className="landing">
      <div className="content">
        <div className="imageContainer">
          {/* Image here */}
        </div>
        <div className="text">
          <h3>Error 404</h3>
          <p>
            We couldn't find that page! 
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
