import React, { useState } from 'react';
import './ResetPassword.css';
import error from './assets/error.svg';
import image from './assets/register.png';
import { isCallinkEmail } from '../actions/auth';

const ResetPasswordForm = () => {
  const [currStep, setStep] = useState(1);
  
  /* user inputs */
  const [email, setEmail] = useState('');

  /* error indicators */
  const [emailUnverified, setEmailUnverified] = useState('noError');
  const [emptyEmail, setEmptyEmail] = useState('noError');

  const submitEmail = () => {
    const fromdetails = {
      Email: email,
    };
    console.log(fromdetails);

    // check step 1 errors
    if (currStep === 1) {
      checkStep1Errors().then((errorExists) => {
        if(!errorExists) {
          setStep(currStep + 1);
        }
      })
    } 
    // setStep(currStep + 1);
  };

  async function checkStep1Errors() {
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

  const emailOnChange = (event) => {
    setEmail(event);
    if (emptyEmail === 'emptyEmail') { setEmptyEmail('noError'); }
    if (emailUnverified === 'emailUnverified') { setEmailUnverified('noError'); }
  };

  return (
    <>
      <StepOne
        currStep={currStep}
        setEmail={emailOnChange}
        submitEmail={submitEmail}
        emptyEmail={emptyEmail}
        emailError={emailUnverified}
      />
      <StepTwo currStep={currStep} />
    </>
  );
};

const StepOne = (props) => {
  if (props.currStep !== 1) {
    return null;
  }
  return (
    <>
      <div className="errorWrapper">
        <div className={`error ${props.emptyEmail}`}>
          <img src={error} className="errorIcon" />
          <p>this field is required</p>
        </div>
        <div className={`error ${props.emailError}`}>
          <img src={error} className="errorIcon" />
          <p>email address is not RSO registered</p>
        </div>
      </div>

      <div className="imgContainer one">
        <img src={image} alt="forgot password" />
      </div>
      <div className="close text">
        <h2>Reset your password</h2>
        <p>Enter your club's CalLink email.</p>
      </div>

      <input
        className={`${((props.emptyEmail==='emptyEmail')||(props.emailError==='emailUnverified')) ? 'inputInvalid' : 'userInput'}`}
        type="email"
        // type="text"
        placeholder="e.g. organizationname@gmail.com"
        onChange={(e) => props.setEmail(e.target.value)}
      />

      <button onClick={props.submitEmail} className="button submitEmail">
        Submit
      </button>
    </>
  );
};

const StepTwo = (props) => {
  if (props.currStep !== 2) {
    return null;
  }
  return (
    <>
      <div className="imgContainer two">
        <img src={image} alt="forgot password" />
      </div>
      <div className="text">
        <h2>Reset your password</h2>
        <p>
          Please check your organization's inbox for a password recovery email.
        </p>
      </div>
      <a href="/" class="button redirect">
        Back to homepage
      </a>
    </>
  );
};

export default ResetPasswordForm;
