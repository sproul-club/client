import React from 'react';

import './PolaroidComponent.css';
import { makeStyles } from '@material-ui/core/styles';

import defaultbear from './assets/default_logo.jpg';

const PolaroidComponent = ({ name, image, position }) => {
  const useStyles = makeStyles({
    root: {
      minWidth: 200,
    },
    media: {
      height: 140,
    },
  });
  const { root, media } = useStyles();

  return (
    <div className="polaroid">
      <div className="imageContainer">
        <img
          className="default-image"
          src={defaultbear}
          alt="a light blue bear with a dark blue background"
        />
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
  );
}

export default PolaroidComponent;
