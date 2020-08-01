import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import './modal.css';

class Modal extends Component {
  constructor() {
    super();
    this.modalRef = React.createRef();
  }

  render() {
    const { id } = this.props.match.params;

    if (this.props.isModal) {
      return (
        <div
          ref={this.modalRef}
          className="modal-wrapper"
          onClick={() => this.props.history.goBack()}
        >
          <div className="modal" onClick={e => e.stopPropagation()}>
            <h1>{id}</h1>
            <p>
              hey the club modal view should render here
            </p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="no-modal-wrapper">
          <h1>{id}</h1>
          <p>
            dis is the no modal wrapper view
          </p>
        </div>
      );
    }
  }
}

export default withRouter(Modal);
