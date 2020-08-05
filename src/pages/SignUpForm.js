import React, { useState } from "react";
import Dropdown from "./Dropdown.js";
import error from './assets/error.svg';

const MultiStepForm = () => {
    var tagOptions = [{label:"ASUC", value: 0},
    {label: "Business", value: 1},
    {label: "CalGreek", value: 2},
    {label: "Community Service", value: 3},
    {label: "Computer Science", value: 4},
    {label: "Consulting", value: 5},
    {label: "Cultural", value: 6},
    {label: "Design", value: 7},
    {label: "Engineering", value: 8},
    {label: "Environmental", value: 9},
    {label: "Health & Wellness", value: 10},
    {label: "Media & Publication", value: 11},
    {label: "Religious & Spiritual", value: 12},
    {label: "Performing Arts", value: 13},
    {label: "Political", value: 14},
    {label: "Sciences", value: 15},
    {label: "Sports & Recreation", value: 16},
    {label: "Social Good", value: 17},
    {label: "Technology", value: 18}
    ];

    var appOptions = [{value: 1, label: "Application required"},
    {value: 0, label: "No application required"}];

    var recruitOptions = [{value: 1, label: "Accepting members"},
    {value: 0, label: "Not accepting members"}];

    const [clubName, setClubName] = useState('');
    const [email, setEmail] = useState('');
    const [pw, setPassword] = useState('');
    const [con, setConfirm] = useState('');
    const [currStep, setStep] = useState(1);
    const [tags, setTags] = useState([]);
    const [appReq, setAppReq] = useState({});
    const [recruiting, setRecruit] = useState({});
    const [conInvalid, setConInvalid] = useState('userInput');
    const [emailInvalid, setEmailInvalid] = useState('userInput');
    const [conError, setConError] = useState('conErrorNone');

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

        const tagsList = [];
        for (var i=0; i<tags.length; i++) {
            tagsList.push(tags[i].value);
        }

        setStep(currStep + 1);

        // alert(`Here's what you submitted: \n 
        //    Club name: ${clubName} \n
        //    Email: ${email} \n 
        //    Password: ${pw} \n
        //    Password confirmation: ${con} \n
        //    Tags: ${tagsList} \n
        //    App required: ${appReq.value} \n
        //    Membership status: ${recruiting.value}`);
    }

    const _prev = () => {
        setStep(currStep - 1);
    }

    const _next = () => {
        if (pw === con /*&& pw != ''*/) {
            setStep(currStep + 1);
        } else {
            setConInvalid("userInputInvalid");
            setConError("conError");
            // alert('Passwords do not match!');
        }
    }

    const conChange = (event) => {
        setConfirm(event);
        if (conInvalid==="userInputInvalid") {
            setConInvalid("userInput")
        }
        if (conError==="conError") {
            setConError("conErrorNone")
        }
    }

    const emailOnChange = (event) => {
        setEmail(event);
        if (emailInvalid==="userInputInvalid") {
            setConInvalid("userInput")
        }
    }

    return(
        <div className="inputs">
            <StepOne
                currStep={currStep}
                setStep={setStep}
                setClubName={setClubName}
                setEmail={emailOnChange}
                setPassword={setPassword}
                setConfirm={conChange}
                setConInvalid={setConInvalid}
                setEmailInvalid={setEmailInvalid}
                _prev={_prev}
                _next={_next}
                clubName={clubName}
                pw={pw}
                email={email}
                con={con}
                conInvalid={conInvalid}
                emailInvalid={emailInvalid}
                conError={conError}
                />
            <StepTwo
                currStep={currStep}
                submitValue={submitValue}
                setStep={setStep}
                setAppReq={setAppReq}
                setTags={setTags}
                setRecruit={setRecruit}
                _prev={_prev}
                _next={_next}
                appReq={appReq}
                tags={tags}
                recruiting={recruiting}
                tagOptions={tagOptions}
                appOptions={appOptions}
                recruitOptions={recruitOptions}/>
            <StepThree
                currStep={currStep}/>
        </div>
    );
}

const StepOne = (props) => {
    if (props.currStep !== 1) {
        return null;
    }
    let conForm = props.conInvalid
    let conError = props.conError
    return (
        <div className="formGroup">
            <div className={conError}>
                <img src={error} className="errorIcon"/>
                <p>passwords do not match</p>
            </div>
            <div className="formHeader">
                <div className="imageContainer">
                </div>
                <h2>Register your club</h2>
            </div>
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
                className={conForm}
                placeholder="Confirm password"
                value={props.con}
                onChange={e => props.setConfirm(e.target.value)}
            />
            <div className="buttonWrapper">
                <div className="help">
                    <p>Invalid email?</p>
                    <a href="/">Click here</a>
                </div>
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
            <div className="formHeader">
                <div className="imageContainer">
                </div>
                <h2>Register your club</h2>
            </div>
            <div className="drops">
                <Dropdown
                options={props.recruitOptions}
                binary={false}
                search={false}
                placeholder='Select recruitment status'
                set={props.setRecruit}/>
                <Dropdown
                options={props.appOptions}
                binary={false}
                search={false}
                placeholder='Select application requirement'
                set={props.setAppReq}/>
                <Dropdown
                options={props.tagOptions}
                multi={true}
                search={true}
                placeholder='Add up to 3 tags'
                set={props.setTags}/>
            </div>

            <div className="buttonWrapper">
                <button className="prevButton" onClick={props._prev}>← Back</button>
                <button className="submitButton" onClick={props.submitValue}>Sign up</button>
            </div>
        </div>
    )
}

const StepThree = (props) => {
    if (props.currStep !== 3) {
        return null;
    }
    return (
    <div className="formGroup">
        <div className="complete">
            <div className="imageContainer">
                </div>
            <h3>You're all set!</h3>
            <h3>Please check your organization's email for a confirmation link.</h3>
            <h2>Didn't receive an email?</h2>
            <a href="/signup">Click here</a>
        </div>
    </div>
    )
}

export default MultiStepForm;