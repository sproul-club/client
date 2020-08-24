import React, { useState } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import './SignIn.css';
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import error from './assets/error.svg';
import { isCallinkEmail } from '../actions/auth';


const SignInForm = ({ login, history, isAuthenticated }) => {
  // user inputs
  const [email, setEmail] = useState('');
  const [pw, setPassword] = useState('');

   /* error indicators */
   const [emailUnverified, setEmailUnverified] = useState('noError');
   const [emptyEmail, setEmptyEmail] = useState('noError');

  if (isAuthenticated) {
    return <Redirect to="/admin" />;
  }

  const submitValue = (e) => {
    checkErrors();
    e.preventDefault();
    // passes the history object (from react-router-dom's withRouter) to redirect after login
    login(email, pw, history);
  };

  const emailOnChange = (event) => {
    setEmail(event);
    if (emptyEmail === 'emptyEmail') { setEmptyEmail('noError'); }
    if (emailUnverified === 'emailUnverified') { setEmailUnverified('noError'); }
  };

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
        className="userInput"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Link to="/recover">Forgot password?</Link>
      <button type="submit" className="submitButton" onClick={submitValue}>
        Sign in
      </button>
    </form>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(withRouter(SignInForm));
