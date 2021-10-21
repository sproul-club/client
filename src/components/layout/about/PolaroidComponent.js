import React from 'react';
import './PolaroidComponent.css';
import defaultbear from '../../../pages/assets/default_logo.jpg';

const PolaroidComponent = ({ name, image, position, linkedin }) => {
  return (
    <a href={linkedin != null ? `${linkedin}` : "https://www.linkedin.com/company/sproul-club/"} target="_blank" rel="noopener noreferrer">
    <div className="polaroid">
      <div className="imageContainer">
        {image != null ? image :
          <img
            className="default-image"
            src={defaultbear}
            alt="a light blue bear with a dark blue background"
          />
        }
      </div>
      <div className="text">
        <h1>
          {name}
        </h1>
        <h2>
          {position}
        </h2>
      </div>
    </div>
    </a>
  );
}

export default PolaroidComponent;
