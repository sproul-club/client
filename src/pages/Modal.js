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
        <h1>{match.params.id}</h1>
        hellooooo modal
        <button type="button" onClick={back}>
          Close
        </button>
      </div>

      
    
    </div>
    
  );
};
export default withRouter(Modal);
