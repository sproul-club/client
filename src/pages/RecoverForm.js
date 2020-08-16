import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RecoverPassword.css';
import image from './assets/register.png';


const RecoverForm = () => {


    return (
    <>
        <StepOne
        conError={conError}
        />
        <StepTwo
        />
        <StepThree currStep={currStep} />
    </>
    );
}



<div className="imgContainer">
<img src={image} alt="forgot password" />
</div>
<div className="header">
<h2>Recover your password</h2>
</div>
<input
className="userInput"
type="text"
onChange={(e) => setEmail(e.target.value)}
/>
<Link to="/recover">Forgot email?</Link>


<div className="formGroup">
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
    type="text"
    onChange={(e) => setPassword(e.target.value)}
/>
<Link to="/recover">Forgot password?</Link>
<div className="buttonWrapper">
    <button className="submitButton" onClick={submitValue}>
    Sign in
    </button>
</div>
</div>
