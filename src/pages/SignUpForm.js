import React, { useState } from 'react';
import Dropdown from './Dropdown.js';
import registerImage from './assets/register.png';
import error from './assets/error.svg';
import { connect } from 'react-redux';
import { register } from '../actions/auth';


const MultiStepForm = ({ register }) => {
  var tagOptions = [
    { label: 'Advocacy', value: 0 },
    { label: 'Business', value: 1 },
    { label: 'CalGreek', value: 2 },
    { label: 'Community Service', value: 3 },
    { label: 'Computer Science', value: 4 },
    { label: 'Consulting', value: 5 },
    { label: 'Cultural', value: 6 },
    { label: 'Design', value: 7 },
    { label: 'Engineering', value: 8 },
    { label: 'Environmental', value: 9 },
    { label: 'Health', value: 10 },
    { label: 'Media', value: 11 },
    { label: 'Performing Arts', value: 12 },
    { label: 'Political', value: 13 },
    { label: 'Pre-professional', value: 14 },
    { label: 'Religious & Spiritual', value: 15 },
    { label: 'Research', value: 16 },
    { label: 'Sciences', value: 17 },
    { label: 'Social', value: 18 },
    { label: 'Social Good', value: 19 },
    { label: 'Sports & Rec.', value: 20 },
    { label: 'Technology', value: 21 },
  ];

  var appOptions = [
    { value: true, label: 'Application required' },
    { value: false, label: 'No application required' },
  ];

  var recruitOptions = [
    { value: true, label: 'Accepting members' },
    { value: false, label: 'Not accepting members' },
  ];

  var emails = ["ethicalapparel@gmail.com"];

  const [clubName, setClubName] = useState('');
  const [email, setEmail] = useState('');
  const [pw, setPassword] = useState('');
  const [con, setConfirm] = useState('');
  const [currStep, setStep] = useState(1);
  const [tags, setTags] = useState([]);
  const [appReq, setAppReq] = useState(true);
  const [recruiting, setRecruit] = useState(true);
  const [conInvalid, setConInvalid] = useState('userInput');
  const [emailInvalid, setEmailInvalid] = useState('userInput');
  const [conError, setConError] = useState('conErrorNone');
  const [emailError, setEmailError] = useState('emailErrorNone');
  const [tagError, setTagError] = useState('tagErrorNone');

  const submitValue = () => {
    
    const tagsList = [];
    for (var i = 0; i < tags.length; i++) {
      tagsList.push(tags[i].value);
    }

    register(clubName, email, pw, tagsList, !!appReq.value, !!recruiting.value);

    setStep(currStep + 1);
  };

  const _prev = () => {
    setStep(currStep - 1);
  };

  const _next = () => {
    if (email != 'b') {
      setEmailInvalid('emailInputInvalid');
      setEmailError('emailError');
    }

    if (pw != con || pw === '') {
      setConInvalid('conInputInvalid');
      setConError('conError');
    }

    if (pw === con && email ==='b') {
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

  const emailOnChange = (event) => {
    setEmail(event);
    if (emailInvalid === 'emailInputInvalid') {
      setEmailInvalid('userInput');
    }
    if (emailError === 'emailError') {
      setEmailError('emailErrorNone');
    }
  };

  return (
    <>
      <StepOne
        currStep={currStep}
        setStep={setStep}
        setClubName={setClubName}
        setEmail={emailOnChange}
        setPassword={setPassword}
        setConfirm={conChange}
        _prev={_prev}
        _next={_next}
        clubName={clubName}
        pw={pw}
        email={email}
        con={con}
        conInvalid={conInvalid}
        emailInvalid={emailInvalid}
        conError={conError}
        emailError={emailError}
      />
      <StepTwo
        currStep={currStep}
        submitValue={submitValue}
        setStep={setStep}
        setAppReq={setAppReq}
        setTags={setTags}
        setRecruit={setRecruit}
        setTagError={setTagError}
        _prev={_prev}
        _next={_next}
        appReq={appReq}
        tags={tags}
        recruiting={recruiting}
        tagOptions={tagOptions}
        appOptions={appOptions}
        recruitOptions={recruitOptions}
        tagError={tagError}
      />
      <StepThree currStep={currStep} />
    </>
  );
};

const StepOne = (props) => {
  if (props.currStep !== 1) {
    return null;
  }
  let conForm = props.conInvalid;
  let conError = props.conError;
  let emailForm = props.emailInvalid;
  let emailError = props.emailError;
  return (
    <div className="formGroup">
      <div className={conError}>
        <img alt="error" src={error} className="errorIcon" />
        <p>passwords do not match</p>
      </div>
      <div className={emailError}>
        <img src={error} className="errorIcon" />
        <p>email is invalid</p>
      </div>
      <div className="formHeader">
        <div className="imageContainer">
          <img src={registerImage} alt="register" />
        </div>
        <h2>Register your club</h2>
      </div>
      <input
        className="userInput"
        type="text"
        placeholder="Club name"
        value={props.clubName}
        onChange={(e) => props.setClubName(e.target.value)}
      />
      <input
        className={emailForm}
        type="email"
        placeholder="Email address - use your organization's email"
        value={props.email}
        onChange={(e) => props.setEmail(e.target.value)}
      />
      <input
        type="password"
        className="userInput"
        placeholder="Password"
        value={props.pw}
        onChange={(e) => props.setPassword(e.target.value)}
      />
      <input
        type="password"
        className={conForm}
        placeholder="Confirm password"
        value={props.con}
        onChange={(e) => props.setConfirm(e.target.value)}
      />
      <div className="buttonWrapper">
        <div className="help">
          <p>Invalid email?</p>
          <a href="/">Click here</a>
        </div>
        <button onClick={props._next} className="nextButton">
          Next →
        </button>
      </div>
    </div>
  );
};

const StepTwo = (props) => {
  if (props.currStep !== 2) {
    return null;
  }
  return (
    <div className="formGroup">
      <div className={props.tagError}>
        <img src={error} className="errorIcon" />
        <p>reached max tag number</p>
      </div>
      <div className="formHeader">
        <div className="imageContainer">
          <img src={registerImage} alt="" />
        </div>
        <h2>Register your club</h2>
      </div>
      <div className="drops">
        <Dropdown
          options={props.recruitOptions}
          multi={false}
          search={false}
          placeholder="Select recruitment status"
          set={props.setRecruit}
        />
        <Dropdown
          options={props.appOptions}
          multi={false}
          search={false}
          placeholder="Select application requirement"
          set={props.setAppReq}
        />
        <Dropdown
          options={props.tagOptions}
          multi={true}
          search={false}
          placeholder="Add up to 3 tags"
          set={props.setTags}
          error={props.setTagError}
        />
      </div>

      <div className="buttonWrapper">
        <button className="prevButton" onClick={props._prev}>
          ← Back
        </button>
        <button className="submitButton" onClick={props.submitValue}>
          Sign up
        </button>
      </div>
    </div>
  );
};

const StepThree = (props) => {
  if (props.currStep !== 3) {
    return null;
  }
  return (
    <div className="formGroup">
      <div className="complete">
        <div className="imageContainer">
          <img src={registerImage} alt="" />
        </div>
        <h3>You're all set!</h3>
        <h3>Please check your organization's email for a confirmation link.</h3>
        <h2>Didn't receive an email?</h2>
        <a href="/signup">Click here</a>
      </div>
    </div>
  );
};

export default connect(null, { register })(MultiStepForm);
