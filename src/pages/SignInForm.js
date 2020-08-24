import React, { useState } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import './SignIn.css';
import { connect } from 'react-redux';
import { login } from '../actions/auth';

const SignInForm = ({ login, history, isAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [pw, setPassword] = useState('');

  if (isAuthenticated) {
    return <Redirect to="/admin" />;
  }

  const submitValue = (e) => {
    e.preventDefault();
    // passes the history object (from react-router-dom's withRouter) to redirect after login
    login(email, pw, history);
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
