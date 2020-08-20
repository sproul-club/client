import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ResetPassword.css';
import image from './assets/register.png';


const ResetPasswordForm = () => {
    const [currStep, setStep] = useState(1);
    const [email, setEmail] = useState('');

    const submitEmail = () => {
        const fromdetails = {
            Email: email,
        };
        
        setStep(currStep + 1);
    };    

    return (
    <>
        <StepOne
        currStep={currStep}
        setEmail={setEmail}
        submitEmail={submitEmail}
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
        <div className="imgContainer one">
            <img src={image} alt="forgot password" />
        </div>
        <div className="text">
            <h2>Reset your password</h2>
        </div>
        <input
            className="userInput"
            type="text"
            onChange={(e) => props.setEmail(e.target.value)}
        />
        <Link to="/recover" className="forgotEmail">Forgot email?</Link>
        <button onClick={props.submitEmail} className="button submitEmail">
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
        <div className="imgContainer two">
            <img src={image} alt="forgot password" />
        </div>
        <div className="text">
            <h2>Reset your password</h2>
            <p>Please check your organization's inbox for a password recovery email.</p>
        </div>
        <a href="/" class="button redirect">Back to homepage</a>
    </>
    )
}

export default ResetPasswordForm;