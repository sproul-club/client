import React from 'react';
import "./Tag.css";
/*
  icon: [optional] tag icon
  label: tag label
  color: tag background color
*/
const Tag = (props) => {
  return (
    <div className="tag" style={{backgroundColor: props.color ? props.color : '#e2e2e2'}}>
      <span>{props.label} </span>
    </div>
  );
};

export default Tag;
