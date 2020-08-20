import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './RecoverPassword.css';
import image from './assets/register.png';


const RecoverPasswordForm = () => {
    const [currStep, setStep] = useState(1);
    const [email, setEmail] = useState('');

    const submitEmail = () => {
        const fromdetails = {
            Email: email,
        };
        
        setStep(currStep + 1);

        // axios({
        //     // method: 'POST',
        //     // url: 'https://sc-backend-v0.herokuapp.com/api/future-sign-up',
        //     // data: formDetails,
        //     // headers: {
        //     //   'Content-Type': 'application/json',
        //     //   'Access-Control-Allow-Origin': '*',
        //     // },
        // })
        //   .then(function (response) {
        //     //handle success
        //     setStep(currStep + 1);
        //   })
        //   .catch(function (error) {
        //     //handle error, aka email not confirmed
        //     alert(error.response.data.reason);
        //   });
    };    

    return (
    <>
        <StepOne
        email={email}
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
            <h2>Recover your password</h2>
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
            <h2>Recover your password</h2>
            <p>Please check your organization's inbox for a password recovery email.</p>
        </div>
        <a href="/" class="button backHome">Back to homepage</a>
    </>
    )
}

export default RecoverPasswordForm;