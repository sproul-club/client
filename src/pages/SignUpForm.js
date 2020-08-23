import React, { useState } from 'react';
import Dropdown from './Dropdown.js';
import registerImage from './assets/register.png';
import error from './assets/error.svg';
import { connect } from 'react-redux';
import { register } from '../actions/auth';
import { tagOptions } from '../data/tagOptions';

const MultiStepForm = ({ register }) => {
  var appOptions = [
    { value: true, label: 'Application required' },
    { value: false, label: 'No application required' },
  ];

  var recruitOptions = [
    { value: true, label: 'Accepting members' },
    { value: false, label: 'Not accepting members' },
  ];

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

  // const [noNameError, setNoNameError] = useState('unset');

  const [emptyError1, setEmptyError1] = useState('unset');
  const [emptyError2, setEmptyError2] = useState('unset');
  const [emptyError3, setEmptyError3] = useState('unset');

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
    let haveError = false;
    /* step 1 errors */
    if (currStep === 1) {
      // if (email != 'b') {
      //   setEmailInvalid('emailInputInvalid');
      //   setEmailError('emailError');
      //   haveError = true;
      // }
      if (pw !== con || pw === '') {
        setConInvalid('conInputInvalid');
        setConError('conError');
        haveError = true;
      }
    } else if (currStep === 2) {
      /* step 2 errors */
      if (tags === null || tags.length === 0) {
        setEmptyError1('emptyError1');
        haveError = true;
      }
      if (emptyError2 === 'unset') {
        setEmptyError2('emptyError2');
        haveError = true;
      }
      if (emptyError3 === 'unset') {
        setEmptyError3('emptyError3');
        haveError = true;
      }
    }
    /* if no errors, go to next step / submit */
    if (!haveError) {
      setStep(currStep + 1);
      if (currStep === 3) {
        submitValue();
      }
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

  const tagsOnChange = (event) => {
    setTags(event);
    if (emptyError1 !== 'emptyErrorNone') {
      setEmptyError1('emptyErrorNone');
    }
  };
  const appReqOnChange = (event) => {
    setAppReq(event);
    if (emptyError2 !== 'emptyErrorNone') {
      setEmptyError2('emptyErrorNone');
    }
  };
  const recruitOnChange = (event) => {
    setRecruit(event);
    if (emptyError3 !== 'emptyErrorNone') {
      setEmptyError3('emptyErrorNone');
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
        setStep={setStep}
        setTags={tagsOnChange}
        setAppReq={appReqOnChange}
        setRecruit={recruitOnChange}
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
        emptyError1={emptyError1}
        emptyError2={emptyError2}
        emptyError3={emptyError3}
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
  let emailForm = props.emailInvalid;
  return (
    <div className="formGroup">
      <div className={`error ${props.emailError}`}>
        <img src={error} alt="error" className="errorIcon" />
        <p>this field is required</p>
      </div>
      <div className={`error ${props.emailError}`}>
        <img src={error} alt="error" className="errorIcon" />
        <p>email is invalid</p>
      </div>
      <div className={`error ${props.conError}`}>
        <img alt="error" src={error} className="errorIcon" />
        <p>passwords do not match</p>
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
  let haveError3 = props.emptyError3 === 'emptyError3';
  // console.log("haveError3=" + haveError3);
  return (
    <div className="formGroup">
      <div className={`error ${props.tagError}`}>
        <img alt="error" src={error} className="errorIcon" />
        <p>reached max tag number</p>
      </div>

      <div className={`error ${props.emptyError1}`}>
        <img alt="error" src={error} className="errorIcon" />
        <p>this field is required</p>
      </div>
      <div className={`error ${props.emptyError2}`}>
        <img alt="error" src={error} className="errorIcon" />
        <p>this field is required</p>
      </div>
      <div className={`error ${props.emptyError3}`}>
        <img alt="error" src={error} className="errorIcon" />
        <p>this field is required</p>
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
          error={haveError3}
        />
        <Dropdown
          options={props.appOptions}
          multi={false}
          search={false}
          placeholder="Select application requirement"
          set={props.setAppReq}
          // error={haveError3}
        />
        <Dropdown
          options={tagOptions}
          multi={true}
          search={false}
          placeholder="Add up to 3 tags"
          set={props.setTags}
          errorPopup={props.setTagError}
          // error={haveError3}
        />
      </div>

      <div className="buttonWrapper">
        <button className="prevButton" onClick={props._prev}>
          ← Back
        </button>
        <button className="submitButton" onClick={props._next}>
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
