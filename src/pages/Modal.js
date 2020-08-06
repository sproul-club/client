import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import './modal.css';

const Modal = ({ match, history }) => {
  const back = e => {
    e.stopPropagation();
    history.push(`/catalog`);
  };
  return (
    <div> 

      <div onClick={back} className="modal-wrapper"/>

      <div className="modal">
        <span class="modal-close" onClick={back}>&times;</span>
        <h1>{match.params.id}</h1>
        <p>content goes here</p>
      </div>

      
    
    </div>
    
  );
};
export default withRouter(Modal);
