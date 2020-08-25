import React, { useState } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import './SignIn.css';
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import error from './assets/error.svg';
import { isCallinkEmail } from '../actions/auth';
import {NotificationManager, NotificationContainer} from 'react-notifications';


const SignInForm = ({ login, history, isAuthenticated }) => {
  // user inputs
  const [email, setEmail] = useState('');
  const [pw, setPassword] = useState('');

   /* error indicators */
   const [emailUnverified, setEmailUnverified] = useState('noError');
   const [emptyEmail, setEmptyEmail] = useState('noError');
   const [emptyPassword, setEmptyPassword] = useState('noError');

  if (isAuthenticated) {
    return <Redirect to="/admin" />;
  }

  const submitValue = async (e) => {
    e.preventDefault();

    let hasErrors = await checkErrors();
    if (!hasErrors) {
      // passes the history object (from react-router-dom's withRouter) to redirect after login
      login(email, pw, history,
        () => history.push('/admin'),
        (errMessage) => NotificationManager.error(errMessage, "Unable to sign in!", 3000)
      );
    }
  };

  const emailOnChange = (newEmail) => {
    setEmail(newEmail);
    if (emptyEmail === 'emptyEmail') { setEmptyEmail('noError'); }
    if (emailUnverified === 'emailUnverified') { setEmailUnverified('noError'); }
  };

  const passwordOnChange = (newPassword) => {
    setPassword(newPassword);
    if (emptyPassword === 'emptyPassword') { setEmptyPassword('noError'); }
  }

  async function checkErrors() {
    var errorExists = false;
    if (email === '') {
      setEmptyEmail('emptyEmail');
      errorExists = true;
    } else {        // check if email is verified
      var isVerified = await isCallinkEmail(email);
      if (!isVerified) {
        setEmailUnverified('emailUnverified');
        errorExists = true;
      }
    }

    if (pw === '') {
      setEmptyPassword('emptyPassword');
      errorExists = true;
    }
    return errorExists;
  };

  return (
    
    <form className="formGroup">
      <div className="errorWrapper">
        <div className={`error ${emptyEmail}`}>
          <img src={error} className="errorIcon" />
          <p>this field is required</p>
        </div>
        <div className={`error ${emailUnverified}`}>
          <img src={error} className="errorIcon" />
          <p>email address is not RSO registered</p>
        </div>
        <div className={`error ${emptyPassword}`}>
          <img src={error} className="errorIcon" />
          <p>this field is required</p>
        </div>
      </div>

      <div className="formHeader">
        <h2>Sign into sproul.club</h2>
      </div>
      <p>Email</p>

      <input
        className={`${((emptyEmail==='emptyEmail')||(emailUnverified==='emailUnverified')) ? 'inputInvalid' : 'userInput'}`}
        type="email"
        // type="text"
        placeholder="e.g. organizationname@gmail.com"
        onChange={(e) => emailOnChange(e.target.value)}
      />
      
      <p>Password</p>
      <input
        className={`${((emptyPassword==='emptyPassword')) ? 'inputInvalid' : 'userInput'}`}
        type="password"
        onChange={(e) => passwordOnChange(e.target.value)}
      />
      <Link to="/recover">Forgot password?</Link>
      <button type="submit" className="submitButton" onClick={submitValue}>
        Sign in
      </button>
      <NotificationContainer/>
    </form>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(withRouter(SignInForm));
