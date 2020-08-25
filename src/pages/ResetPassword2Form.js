import React, { useState } from 'react';
import './ResetPassword.css';
import image from './assets/resetpwd2.png';
import error from './assets/error.svg';
import { resetPassword } from '../actions/auth';

const ResetPassword2Form = () => {
    const [currStep, setStep] = useState(1);
    const [pwd, setPassword] = useState('');
    const [con, setConfirm] = useState('');
    const [emptyPwd, setEmptyPwd] = useState('noError');
    const [conError, setConError] = useState('noError');

    const submitPassword = () => {
        if (pwd === '' && con === '') {
            setEmptyPwd('emptyPwd');
        } else if (pwd !== con) {
            setConError('conError');
        } else {
            resetPassword(pwd).then((status) => {
                if (status === "success") {
                    setStep(currStep + 1);
                } else {
                    console.log("An error occurred. Please try again later.");
                }
            });
        }
    };

    const pwdOnChange = (event) => {
        setPassword(event);
        if (emptyPwd === 'emptyPwd') {
            setEmptyPwd('noError');
        }
        if (conError === 'conError') {
            setConError('noError');
        }
    };
    const conOnChange = (event) => {
        setConfirm(event);
        if (emptyPwd === 'emptyPwd') {
            setEmptyPwd('noError');
        }
        if (conError === 'conError') {
            setConError('noError');
        }
    };
    
    return (
    <>
        <StepOne
        currStep={currStep}
        emptyPwd={emptyPwd}
        conError={conError}
        setPassword={pwdOnChange}
        setConfirm={conOnChange}
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
    <form>
        <div className="errorWrapper">
            <div className={`error ${props.emptyPwd}`}>
                <img alt="error" src={error} className="errorIcon" />
                <p>this field is required</p>
            </div>
            <div className={`error ${props.conError}`}>
                <img alt="error" src={error} className="errorIcon" />
                <p>passwords do not match</p>
            </div>
        </div>
        <div className="imgContainer two">
            <img src={image} alt="forgot password" />
        </div>
        <div className="close text">
            <h2>Reset your password</h2>
            <p>Use 8 or more characters with a mix of letters, numbers and symbols!</p>
        </div>
        <input
            className={`${
                props.emptyPwd === 'emptyPwd' || props.conError === 'conError'
                ? 'inputInvalid'
                : 'userInput'
            }`}
            type="password"
            placeholder="new password"
            onChange={(e) => props.setPassword(e.target.value)}
            required
        />
        <input
            className={`${
                props.emptyPwd === 'emptyPwd' || props.conError === 'conError'
                ? 'inputInvalid'
                : 'userInput'
            }`}
            type="password"
            placeholder="re-type new password"
            onChange={(e) => props.setConfirm(e.target.value)}
            required
        />
        <button type='submit' onClick={props.submitPassword} className="button submitPassword">
          Submit
        </button>
    </form>
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