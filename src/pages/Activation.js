import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter  } from 'react-router-dom';
import signup from './assets/signup.png';
import Dropdown from './Dropdown.js';
import './SignUp.css';

function Activation({}) {
  
    const [clubName, setClubName] = useState('');
    return (
        <div className="formGroup">
          <div className="formHeader">
            <div className="imageContainer">
              <img src={signup} alt="register" />
            </div>
            <h2>Register your club</h2>
          </div>
          <input
            className='userInput'
            type="text"
            placeholder="Club name"
            maxLength={100}
          />
        </div>
      );
  }
  
  // This function gets a piece of the app state that is stored in redux store
  const mapStateToProps = (state) => ({
    // clubs: state.catalog.allOrganizations,
    // formDetails: state.catalog.formDetails,
    // tagOptions: state.profile.tagOptions,
    // num_displayed: state.catalog.num_displayed
  });
  
  export default connect(mapStateToProps, {})(
    withRouter(Activation)
  );