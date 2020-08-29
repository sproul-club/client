import React from 'react';
import './Loading.css';

const Loading = () => {
  return (
    <div className="load">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
