import React, { useState, useEffect } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import './ClubLogin.css';
import { connect } from 'react-redux';
import { login, isCallinkEmail } from '../../redux/actions/auth';
import error from '../assets/error.svg';
import { NotificationManager } from 'react-notifications';

const ClubLoginForm = ({ login, history, isAuthenticated }) => {
  // user inputs
  const [email, setEmail] = useState('');
  const [pw, setPassword] = useState('');

  /* error indicators */
  const [emailUnverified, setEmailUnverified] = useState('noError');
  const [emptyEmail, setEmptyEmail] = useState('noError');
  const [emptyPassword, setEmptyPassword] = useState('noError');

  // This is needed since the NotificationComponent needs to be fully rendered before displaying notifications right away
  useEffect(() => {
    const userConfirmed =
      new URLSearchParams(window.location.search).get('confirmed') === 'true';
    if (userConfirmed)
      NotificationManager.success(
        "You've successfully confirmed your email! Please log in",
        '',
        3000
      );
  }, []);

  if (isAuthenticated) {
    return <Redirect to="/admin" />;
  }

  const submitValue = async (e) => {
    e.preventDefault();

    let hasErrors = await checkErrors();
    if (!hasErrors) {
      try {
        await login(email, pw);
        history.push('/admin');
      } catch (err) {
        var errMessage = err.response.data.reason;
        NotificationManager.error(errMessage, 'Unable to register!', 3000);
      }
    }
  };

  const emailOnChange = (newEmail) => {
    setEmail(newEmail);
    if (emptyEmail === 'emptyEmail') {
      setEmptyEmail('noError');
    }
    if (emailUnverified === 'emailUnverified') {
      setEmailUnverified('noError');
    }
  };

  const passwordOnChange = (newPassword) => {
    setPassword(newPassword);
    if (emptyPassword === 'emptyPassword') {
      setEmptyPassword('noError');
    }
  };

  async function checkErrors() {
    var errorExists = false;
    if (email === '') {
      setEmptyEmail('emptyEmail');
      errorExists = true;
    } else {
      // check if email is verified
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
  }

  return (
    <form className="formGroup">
      <div className="errorWrapper">
        <div className={`error ${emptyEmail}`}>
          <img src={error} className="errorIcon" alt="error" />
          <p>This field is required.</p>
        </div>
        <div className={`error ${emailUnverified}`}>
          <img src={error} className="errorIcon" alt="error" />
          <p>There is no account associated with this email.</p>
        </div>
        <div className={`error ${emptyPassword}`}>
          <img src={error} className="errorIcon" alt="error" />
          <p>This field is required.</p>
        </div>
      </div>

      <div className="formHeader">
        <h2>Club sign-in portal</h2>
      </div>
      <p>Email</p>

      <input
        className={`${
          emptyEmail === 'emptyEmail' || emailUnverified === 'emailUnverified'
            ? 'inputInvalid'
            : 'userInput'
        }`}
        type="email"
        // type="text"
        placeholder="e.g. organizationname@gmail.com"
        onChange={(e) => emailOnChange(e.target.value)}
      />

      <p>Password</p>
      <input
        className={`${
          emptyPassword === 'emptyPassword' ? 'inputInvalid' : 'userInput'
        }`}
        type="password"
        onChange={(e) => passwordOnChange(e.target.value)}
      />
      <div className="fine-print">
        <Link to="/recover">Forgot password?</Link> <br />
        Don't have an account? Sign up <Link to="/signup">here</Link>
      </div>
      <button type="submit" className="submitButton" onClick={submitValue}>
        Sign in
      </button>
    </form>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(withRouter(ClubLoginForm));
