import React, { useState } from 'react';
import './ResetPassword.css';
import image from './assets/register.png';
import error from './assets/error.svg';

const ResetPassword2Form = () => {
    const [currStep, setStep] = useState(1);
    const [pw, setPassword] = useState('');
    const [con, setConfirm] = useState('');
    const [conInvalid, setConInvalid] = useState('userInput');
    const [conError, setConError] = useState('conErrorNone');

    const submitPassword = () => {
        const fromdetails = {
            "password": pw,
            "confirm_password": con,
        };
        
        if (pw != con || pw === '') {
            setConInvalid('conInputInvalid');
            setConError('conError');
        } else {
            setStep(currStep + 1);
        }
    };

    const conChange = (event) => {
        setConfirm(event);
        if (conInvalid === 'conInputInvalid') {
          setConInvalid('userInput');
        }
        if (conError === 'conError') {
          setConError('conErrorNone');
        }
      };
    

    return (
    <>
        <StepOne
        currStep={currStep}
        conInvalid={conInvalid}
        conError={conError}
        setPassword={setPassword}
        setConfirm={conChange}
        submitPassword={submitPassword}
        />
        <StepTwo currStep={currStep} />
    </>
    );
}

const StepOne = (props) => {
    if (props.currStep !== 1) {
        return null;
    }
    return (
    <>
        <div className={props.conError}>
            <img alt="error" src={error} className="errorIcon" />
            <p>passwords do not match</p>
        </div>
        <div className="imgContainer two">
            <img src={image} alt="forgot password" />
        </div>
        <div className="close text">
            <h2>Reset your password</h2>
            <p>Use 8 or more characters with a mix of letters, numbers and symbols!</p>
        </div>
        <input
            className="userInput"
            type="password"
            placeholder="new password"
            onChange={(e) => props.setPassword(e.target.value)}
        />
        <input
            className={props.conInvalid}
            type="password"
            placeholder="re-type new password"
            onChange={(e) => props.setConfirm(e.target.value)}
        />
        <button onClick={props.submitPassword} className="button submitPassword">
          Submit
        </button>
    </>
    )
}

const StepTwo = (props) => {
    if (props.currStep !== 2) {
        return null;
    }
    return (
    <>
        <div className="imgContainer one">
            <img src={image} alt="forgot password" />
        </div>
        <div className="text">
            <h2>Reset your password</h2>
            <p>Your password has been successfully reset!</p>
        </div>
        <a href="/signin" class="button redirect">Continue to Sign-in</a>
    </>
    )
}

export default ResetPassword2Form;