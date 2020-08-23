import React, { useState } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import './SignUp.css';
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import error from './assets/error.svg';

const SignInForm = ({ login, history, isAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [pw, setPassword] = useState('');

  const [emailError, setEmailError] = useState('emailErrorNone');
  const [emailInvalid, setEmailInvalid] = useState('unset');
  const [emailEmpty, setEmailEmpty] = useState('unset');
  const [passEmpty, setPassEmpty] = useState('unset');

  if (isAuthenticated) {
    return <Redirect to="/admin" />;
  }

  const submitValue = (e) => {
    e.preventDefault();

    if (!email) {
      setEmailEmpty('emptyError1');
    } else {
      setEmailEmpty('unset');
    }

    if (!pw) {
      setPassEmpty('emptyError2');
    } else {
      setPassEmpty('unset');
    }
    
    // passes the history object (from react-router-dom's withRouter) to redirect after login
    try {
      login(email, pw, history);
    }
    catch (err) {
      console.log("invalid email")
    }
  };

  return (
    <form className="formGroup">
      <div className="formHeader">
        <h2>Sign into sproul.club</h2>
      </div>
      <p>Email</p>
      <input
        className="userInput"
        type="text"
        onChange={(e) => setEmail(e.target.value)}
      />
       <div className={`error emptyError1`}>
        {emailEmpty === 'emptyError1' ? <p><img alt="error" src={error} className="errorIcon" />this field is required</p> : <></>}
      </div>
      <p>Password</p>
      <input
        className="userInput"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className={`error emptyError1`}>
        {passEmpty === 'emptyError2' ? <p><img alt="error" src={error} className="errorIcon" />this field is required</p> : <></>}
      </div>
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
