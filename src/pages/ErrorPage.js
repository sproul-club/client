import React from 'react';

import './ErrorPage.css'

const ErrorPage = () => {
  return (
    <div className="errorpage">
      <div className="content">
        <div className="imageContainer">
          {/* Image here */}
        </div>
        <div className="text">
          <h3>404 Error</h3>
          <p>
            We couldn't find that page!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
