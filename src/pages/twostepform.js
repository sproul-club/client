import React, { useState } from "react";
import "./signup.css";

const MultiStepForm = () => {
    const [clubName, setClubName] = useState('');
    const [email, setEmail] = useState('');
    const [pw, setPassword] = useState('');
    const [con, setConfirm] = useState('');
    const [currStep, setStep] = useState(1);
    const [tags, setTags] = useState([]);
    const [appReq, setAppReq] = useState('');
    const [recruiting, setRecruit] = useState('');

    const submitValue = () => {
        const frmdetails = {
            'Club name' : clubName,
            'Email' : email,
            'Password' : pw,
            'Confirm': con,
            'Tags': tags,
            'App Reqirement': appReq,
            'Recruiting': recruiting,
        }
        console.log(frmdetails);

        alert(`Here's what you submitted: \n 
           Club name: ${clubName} \n
           Email: ${email} \n 
           Password: ${pw} \n
           Password confirmation: ${con} \n
           Tags: ${tags} \n
           App required: ${appReq} \n
           Membership status: ${recruiting}`);
    }

    const _prev = () => {
        setStep(currStep - 1);
    }

    const _next = () => {
        if (pw === con) {
            setStep(currStep + 1);
        } else {
            alert('Passwords do not match!')
        }

    }

    return(
        <div className="inputs">
            <StepOne currStep={currStep}
                setStep={setStep} setClubName={setClubName}
                setEmail={setEmail} setPassword={setPassword}
                setConfirm={setConfirm} _prev={_prev} _next={_next}
                clubName={clubName} pw={pw} email={email}
                con={con}/>
            <StepTwo currStep={currStep} submitValue={submitValue}
                setStep={setStep} setAppReq={setAppReq}
                setTags={setTags} setRecruit={setRecruit}
                _prev={_prev} _next={_next} appReq={appReq}
                tags={tags} recruiting={recruiting}/>
        </div>
    );
}

const StepOne = (props) => {
    if (props.currStep !== 1) {
        return null;
    }
    return (
        <div className="formGroup">
            <input
                className="userInput"
                type="text"
                placeholder="Club name"
                value={props.clubName}
                onChange={e => props.setClubName(e.target.value)}
            />
            <input
                className="userInput"
                type="email" placeholder="Email address - use your organization's email"
                value={props.email}
                onChange={e => props.setEmail(e.target.value)}
            />
            <input
                type="password"
                className="userInput"
                placeholder="Password"
                value={props.pw}
                onChange={e => props.setPassword(e.target.value)}
            />
            <input
                type="password"
                className="userInput"
                placeholder="Confirm password"
                value={props.con}
                onChange={e => props.setConfirm(e.target.value)}
            />
            <div className="buttonWrapper">
                <button onClick={props._next} className="nextButton">Next →</button>
            </div>
        </div>
    )
}

const StepTwo = (props) => {
    if (props.currStep !== 2) {
        return null;
    }
    return (
        <div className="formGroup">
            <input
                className="userInput"
                type="text"
                placeholder="Add up to 3 category tags"
                value={props.tags}
                onChange={e => props.setTags(e.target.value)}
            />
            <input
                type="text"
                className="userInput"
                placeholder="Select application requirements"
                value={props.appReq}
                onChange={e => props.setAppReq(e.target.value)}
            />
            <input
                type="text"
                className="userInput"
                placeholder="Select membership status"
                value={props.clubName}
                onChange={e => props.setRecruit(e.target.value)}
            />

            <div className="buttonWrapper">
                <button className="prevButton" onClick={props._prev}>← Previous</button>
                <button className="submitButton" onClick={props.submitValue}>Sign up</button>
            </div>
        </div>
    )
}

export default MultiStepForm;