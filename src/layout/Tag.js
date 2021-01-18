import React from 'react';
import "./Tag.css";
import Check from '../pages/assets/Check.svg';
import X from '../pages/assets/X.svg';
import Pen from '../pages/assets/Pen.svg';
import Face from '../pages/assets/Face.svg';
import Dot from '../pages/assets/Dot.svg';
/*
  icon: [optional] tag icon
  label: tag label
  color: tag background color
*/
const Tag = (props) => {
  return (
    <div className={Number.isInteger(props.listId) ? "tag" : "tag-row2"} style={{backgroundColor: 'white'}}>
      <img src={Check} className={props.listId === 'nm' ? 'icon' : 'hidden'}/>
      <img src={X} className={props.listId === 'nnm' ? 'icon' : 'hidden'}/>
      <img src={Pen} className={props.listId === 'ar' ? 'icon' : 'hidden'}/>
      <img src={Face} className={props.listId === 'nar' ? 'icon' : 'hidden'}/>
      <span>{props.label} </span>
      <img src={Dot} className={Number.isInteger(props.listId) || props.listId === 'mem' ? 'hidden' : 'icon'}/>
    </div>
  );
};

export default Tag;
