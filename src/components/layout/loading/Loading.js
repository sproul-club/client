import React, { useEffect } from 'react';
import './Loading.scss';

const Loading = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="loading">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="loading-text">Loading...</div>
    </div>
  );
};

export default Loading;
