import React, { useState } from 'react';
import Dropdown from './Dropdown.js';
import error from './assets/error.svg';
import { connect } from 'react-redux';
import {
  register,
  isCallinkEmail,
  isPasswordStrong,
  resendConfirmationEmail,
} from '../actions/auth';
import signup from './assets/signup.png';
import 'react-notifications/lib/notifications.css';
import {
  NotificationManager,
  NotificationContainer,
} from 'react-notifications';

const MultiStepForm = ({ register, resendConfirmationEmail, tagOptions }) => {
  var appOptions = [
    { value: true, label: 'Application required' },
    { value: false, label: 'No application required' },
  ];

  var recruitOptions = [
    { value: true, label: 'Accepting members' },
    { value: false, label: 'Not accepting members' },
  ];

  const [currStep, setStep] = useState(1);
  /* user inputs */
  const [clubName, setClubName] = useState('');
  const [email, setEmail] = useState('');
  const [pwd, setPassword] = useState('');
  const [con, setConfirm] = useState('');
  const [tags, setTags] = useState([]);
  const [appReq, setAppReq] = useState(true);
  const [recruiting, setRecruit] = useState(true);
  const [resentEmail, setResentEmail] = useState(false);
  /* error indicators */
  const [emailUnverified, setEmailUnverified] = useState('noError');
  const [pwdConMismatch, setPwdConMismatch] = useState('noError');
  const [pwdWeak, setPwdWeak] = useState('noError');
  const [tagOverflow, setTagOverflow] = useState('tagOverflowNone');
  const [emptyName, setEmptyName] = useState('noError');
  const [emptyEmail, setEmptyEmail] = useState('noError');
  const [emptyPwd, setEmptyPwd] = useState('noError');
  const [emptyTags, setEmptyTags] = useState('noError');
  const [emptyAppReq, setEmptyAppReq] = useState('unset');
  const [emptyRecruit, setEmptyRecruit] = useState('unset');

  const submitValue = () => {
    const tagsList = [];
    for (var i = 0; i < tags.length; i++) {
      tagsList.push(tags[i].value);
    }

    register(clubName, email, pwd, tagsList, !!appReq.value, !!recruiting.value)
      .then(() => setStep(currStep + 1))
      .catch((err) => {
        var errMessage = err.response.data.reason;
        NotificationManager.error(errMessage, 'Unable to register!', 3000);
      });
  };

  const _prev = () => {
    setStep(currStep - 1);
  };

  const _next = () => {
    /* step 1 errors */
    if (currStep === 1) {
      checkStep1Errors().then((errorExists) => {
        if (!errorExists) {
          setStep(currStep + 1);
        }
      });
    } else if (currStep === 2) {
      /* step 2 errors */
      var errorExists = checkStep2Errors();
      if (!errorExists) {
        submitValue();
      }
    }
  };

  async function checkStep1Errors() {
    var errorExists = false;
    if (clubName === '') {
      setEmptyName('emptyName');
      errorExists = true;
    }
    if (email === '') {
      setEmptyEmail('emptyEmail');
      errorExists = true;
    } else {
      // check if email is verified
      var isVerified = await isCallinkEmail(email);
      if (!isVerified) {
        setEmailUnverified('emailUnverified');
        errorExists = true;
      }
    }

    if (pwd === '' && con === '') {
      setEmptyPwd('emptyPwd');
      errorExists = true;
    } else if (pwd !== con) {
      setPwdConMismatch('pwdConMismatch');
      errorExists = true;
    } else {
      // check if the password  is strong
      var isStrong = await isPasswordStrong(pwd);
      if (!isStrong) {
        setPwdWeak('pwdWeak');
        errorExists = true;
      }
    }

    return errorExists;
  }

  function checkStep2Errors() {
    var errorExists = false;
    if (tags === null || tags.length === 0) {
      setEmptyTags('emptyTags');
      errorExists = true;
    }
    if (emptyAppReq !== 'noError') {
      setEmptyAppReq('emptyAppReq');
      errorExists = true;
    }
    if (emptyRecruit !== 'noError') {
      setEmptyRecruit('emptyRecruit');
      errorExists = true;
    }
    return errorExists;
  }

  const nameOnChange = (event) => {
    setClubName(event);
    if (emptyName === 'emptyName') {
      setEmptyName('noError');
    }
  };
  const emailOnChange = (event) => {
    setEmail(event);
    if (emptyEmail === 'emptyEmail') {
      setEmptyEmail('noError');
    }
    if (emailUnverified === 'emailUnverified') {
      setEmailUnverified('noError');
    }
  };
  const pwdOnChange = (event) => {
    setPassword(event);
    if (emptyPwd === 'emptyPwd') {
      setEmptyPwd('noError');
    }
    if (pwdConMismatch === 'pwdConMismatch') {
      setPwdConMismatch('noError');
    }
    if (pwdWeak === 'pwdWeak') {
      setPwdWeak('noError');
    }
  };
  const conOnChange = (event) => {
    setConfirm(event);
    if (emptyPwd === 'emptyPwd') {
      setEmptyPwd('noError');
    }
    if (pwdConMismatch === 'pwdConMismatch') {
      setPwdConMismatch('noError');
    }
    if (pwdWeak === 'pwdWeak') {
      setPwdWeak('noError');
    }
  };

  const tagsOnChange = (event) => {
    setTags(event);
    if (emptyTags === 'emptyTags') {
      setEmptyTags('noError');
    }
  };
  const appReqOnChange = (event) => {
    setAppReq(event);
    if (emptyAppReq !== 'noError') {
      setEmptyAppReq('noError');
    }
  };
  const recruitOnChange = (event) => {
    setRecruit(event);
    if (emptyRecruit !== 'noError') {
      setEmptyRecruit('noError');
    }
  };

  return (
    <>
      <StepOne
        currStep={currStep}
        clubName={clubName}
        pwd={pwd}
        email={email}
        con={con}
        setStep={setStep}
        setClubName={nameOnChange}
        setEmail={emailOnChange}
        setPassword={pwdOnChange}
        setConfirm={conOnChange}
        _prev={_prev}
        _next={_next}
        emptyName={emptyName}
        emptyEmail={emptyEmail}
        emptyPwd={emptyPwd}
        emailError={emailUnverified}
        conError={pwdConMismatch}
        pwdWeakError={pwdWeak}
      />
      <StepTwo
        currStep={currStep}
        tags={tags}
        appReq={appReq}
        recruiting={recruiting}
        tagOptions={tagOptions}
        appOptions={appOptions}
        recruitOptions={recruitOptions}
        setStep={setStep}
        setTags={tagsOnChange}
        setAppReq={appReqOnChange}
        setRecruit={recruitOnChange}
        _prev={_prev}
        _next={_next}
        emptyTags={emptyTags}
        emptyAppReq={emptyAppReq}
        emptyRecruit={emptyRecruit}
        tagError={tagOverflow}
        setTagError={setTagOverflow}
      />
      <StepThree
        currStep={currStep}
        resentEmail={resentEmail}
        email={email}
        setResentEmail={setResentEmail}
        resendConfirmationEmail={resendConfirmationEmail}
      />
      <NotificationContainer />
    </>
  );
};

const StepOne = (props) => {
  if (props.currStep !== 1) {
    return null;
  }
  return (
    <div className="formGroup">
      <div className="errorWrapper">
        <div className={`error ${props.emptyName}`}>
          <img src={error} className="errorIcon" alt="error" />
          <p>this field is required</p>
        </div>
        <div className={`error ${props.emptyEmail}`}>
          <img src={error} className="errorIcon" alt="error" />
          <p>this field is required</p>
        </div>
        <div className={`error ${props.emptyPwd}`}>
          <img src={error} className="errorIcon" alt="error" />
          <p>this field is required</p>
        </div>
        <div className={`error ${props.emailError}`}>
          <img src={error} className="errorIcon" alt="error" />
          <p>email address is not associated with an RSO</p>
        </div>
        <div className={`error ${props.conError}`}>
          <img alt="error" src={error} className="errorIcon" />
          <p>passwords do not match</p>
        </div>
        <div className={`error ${props.pwdWeakError}`}>
          <img alt="error" src={error} className="errorIcon" />
          <p>password is not strong enough</p>
        </div>
      </div>
      <div className="formHeader">
        <div className="imageContainer">
          <img src={signup} alt="register" />
        </div>
        <h2>Register your club</h2>
      </div>
      <input
        className={`${
          props.emptyName === 'emptyName' ? 'inputInvalid' : 'userInput'
        }`}
        type="text"
        placeholder="Club name"
        value={props.clubName}
        onChange={(e) => props.setClubName(e.target.value)}
        maxLength={100}
      />
      <input
        className={`${
          props.emptyEmail === 'emptyEmail' ||
          props.emailError === 'emailUnverified'
            ? 'inputInvalid'
            : 'userInput'
        }`}
        type="email"
        placeholder="Email address - use your org's CalLink email"
        value={props.email}
        onChange={(e) => props.setEmail(e.target.value)}
      />
      <p className="subtitle">
        {/* <span style={{ color: '#FF0000' }}>*</span> Password must be at least 8 characters, include 1 number, and 1 symbol! */}
      </p>
      <input
        className={`${
          props.emptyPwd === 'emptyPwd' ||
          props.conError === 'pwdConMismatch' ||
          props.pwdWeakError === 'pwdWeak'
            ? 'inputInvalid'
            : 'userInput'
        }`}
        type="password"
        placeholder="Password (at least 8 characters, 1 number, 1 symbol)"
        value={props.pwd}
        onChange={(e) => props.setPassword(e.target.value)}
      />
      <input
        className={`${
          props.emptyPwd === 'emptyPwd' ||
          props.conError === 'pwdConMismatch' ||
          props.pwdWeakError === 'pwdWeak'
            ? 'inputInvalid'
            : 'userInput'
        }`}
        type="password"
        placeholder="Confirm password"
        value={props.con}
        onChange={(e) => props.setConfirm(e.target.value)}
      />
      <div className="buttonWrapper">
        <div className="help">
          <p>Invalid email?</p>
          <a
            href="https://airtable.com/shr4wECf5beHGLgfV"
            rel="noopener noreferrer"
            target="_blank"
          >
            Click here
          </a>
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

  // ideally this var will set the dropdowns to red-border css as well...
  let haveError = props.emptyRecruit === 'emptyRecruit';
  // console.log("haveError3=" + haveError3);
  return (
    <div className="formGroup">
      <div className="errorWrapper">
        <div className={`error ${props.emptyTags}`}>
          <img alt="error" src={error} className="errorIcon" />
          <p>this field is required</p>
        </div>
        <div className={`error ${props.emptyAppReq}`}>
          <img alt="error" src={error} className="errorIcon" />
          <p>this field is required</p>
        </div>
        <div className={`error ${props.emptyRecruit}`}>
          <img alt="error" src={error} className="errorIcon" />
          <p>this field is required</p>
        </div>
        <div className={`error ${props.tagError}`}>
          <img alt="error" src={error} className="errorIcon" />
          <p>reached max tag number</p>
        </div>
      </div>
      <div className="formHeader">
        <div className="imageContainer">
          <img src={signup} alt="" />
        </div>
        <h2>Register your club</h2>
      </div>
      <div className="drops">
        <Dropdown
          options={props.recruitOptions}
          multi={false}
          search={false}
          placeholder="Select recruitment status"
          defaultValue={props.recruiting}
          set={props.setRecruit}
          error={haveError}
        />
        <Dropdown
          options={props.appOptions}
          multi={false}
          search={false}
          placeholder="Select application requirement"
          defaultValue={props.appReq}
          set={props.setAppReq}
          // error={haveError}
        />
        <Dropdown
          options={props.tagOptions}
          multi={true}
          search={false}
          placeholder="Add up to 3 tags"
          defaultValue={props.tags}
          set={props.setTags}
          errorPopup={props.setTagError}
          // error={haveError}
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
          <img src={signup} alt="" />
        </div>
        <h3>You're all set!</h3>
        <h3>Please check your organization's email for a confirmation link.</h3>
        <h2>Didn't receive an email?</h2>
        <div
          style={{ fontSize: '12px', cursor: 'pointer' }}
          onClick={() =>
            props.resendConfirmationEmail(props.email, props.setResentEmail)
          }
        >
          Resend email
        </div>
        <div className={`email-sent ${props.resentEmail && 'sent'}`}>
          email sent
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tagOptions: state.profile.tagOptions,
});

export default connect(mapStateToProps, { register, resendConfirmationEmail })(
  MultiStepForm
);
