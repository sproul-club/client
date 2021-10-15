import React, { useState } from 'react';
import Dropdown from '../../components/layout/dropdown/Dropdown.js';
import error from '../assets/error.svg';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  register,
  isCallinkEmail,
  isPasswordStrong,
  resendConfirmationEmail,
} from '../../redux/actions/auth';
import signup from '../assets/signup.png';
import { NotificationManager } from 'react-notifications';

const MultiStepForm = ({
  register,
  isAuthenticated,
  resendConfirmationEmail,
  tagOptions,
  sizeOptions,
}) => {
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
  const [size, setSize] = useState('');
  const [resentEmail, setResentEmail] = useState(false);
  const [recrStartDate, setRecrStartDate] = useState(null);
  const [recrEndDate, setRecrEndDate] = useState(null);
  const [appStartDate, setAppStartDate] = useState(null);
  const [appEndDate, setAppEndDate] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  /* error indicators */
  const [emailUnverified, setEmailUnverified] = useState('noError');
  const [pwdConMismatch, setPwdConMismatch] = useState('noError');
  const [pwdWeak, setPwdWeak] = useState('noError');
  const [tagOverflow, setTagOverflow] = useState('tagOverflowNone');
  const [dateError, setDateError] = useState('noError');
  const [emptyName, setEmptyName] = useState('noError');
  const [emptyEmail, setEmptyEmail] = useState('noError');
  const [emptyPwd, setEmptyPwd] = useState('noError');
  const [emptyTags, setEmptyTags] = useState('noError');
  const [emptyAppReq, setEmptyAppReq] = useState('unset');
  const [emptyRecruit, setEmptyRecruit] = useState('unset');
  const [emptySize, setEmptySize] = useState('unset');
  const [emptyRecrStartDate, setEmptyRecrStartDate] = useState('unset');
  const [emptyRecrEndDate, setEmptyRecrEndDate] = useState('unset');
  const [emptyAppStartDate, setEmptyAppStartDate] = useState('unset');
  const [emptyAppEndDate, setEmptyAppEndDate] = useState('unset');

  if (isAuthenticated) {
    return <Redirect to="/admin" />;
  }

  async function resendConfirmEmail(email) {
    setResentEmail(false);

    try {
      await resendConfirmationEmail(email);
    } catch (err) {
      var errMessage = err.response.data.reason;
      NotificationManager.error(
        errMessage,
        'Unable to resend confirmation email!',
        3000
      );
    } finally {
      setResentEmail(true);
    }
  }

  const submitValue = async () => {
    const tagsList = [];
    for (var i = 0; i < tags.length; i++) {
      tagsList.push(tags[i].value);
    }

    try {
      if (recruiting.value && appReq.value) {
        await register(
          clubName,
          email,
          pwd,
          tagsList,
          !!appReq.value,
          !!recruiting.value,
          size.value,
          new Date(startDate),
          new Date(endDate),
          null,
          null
        );
      } else if (recruiting.value && !appReq.value) {
        await register(
          clubName,
          email,
          pwd,
          tagsList,
          !!appReq.value,
          !!recruiting.value,
          size.value,
          null,
          null,
          new Date(startDate),
          new Date(endDate)
        );
      } else if (!recruiting.value) {
        await register(
          clubName,
          email,
          pwd,
          tagsList,
          !!appReq.value,
          !!recruiting.value,
          size.value,
          null,
          null,
          null,
          null
        );
      }
      setStep(currStep + 1);
    } catch (err) {
      var errMessage = err.response.data.reason;
      NotificationManager.error(errMessage, 'Unable to register!', 3000);
    }
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
        if (recruiting.value && appReq.value) {
          // var newStartDate = new Date(startDate);
          // var newEndDate = new Date(endDate);
          // setAppStartDate(newStartDate);
          // setAppEndDate(newEndDate);
          // setAppStartDate(new Date (startDate));
          // setAppEndDate(new Date(endDate));
          // console.log(new Date (startDate));
          // console.log(new Date(endDate));
          // console.log(appStartDate);
          // console.log(appEndDate);
          console.log(
            'line 121: ',
            appStartDate,
            appEndDate,
            recrStartDate,
            recrEndDate
          );
        } else if (recruiting.value && !appReq.value) {
          // var newStartDate = new Date(startDate);
          // var newEndDate = new Date(endDate);
          // setRecrStartDate(newStartDate);
          // setRecrEndDate(newEndDate);
          // setRecrStartDate(new Date(startDate));
          // setRecrEndDate(new Date(endDate));
          // console.log(new Date (startDate));
          // console.log(new Date(endDate));
          // console.log(recrStartDate);
          // console.log(recrEndDate);
          console.log(
            'line 125: ',
            appStartDate,
            appEndDate,
            recrStartDate,
            recrEndDate
          );
        }
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
    if (
      tags === null ||
      tags.length === 0 ||
      appReq.value === undefined ||
      recruiting.value === undefined ||
      size.value === undefined ||
      (recruiting.value && (startDate === null || endDate === null))
    ) {
      errorExists = true;
      NotificationManager.error('All fields are required', '', 5000);
    }
    if (recruiting.value) {
      var start = Date.parse(startDate);
      var end = Date.parse(endDate);
      if (end < start) {
        errorExists = true;
        NotificationManager.error(
          'End date should come after start.',
          '',
          5000
        );
      }
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
    if (appReq.value) {
      setRecrStartDate(null);
      setRecrEndDate(null);
    } else {
      setAppStartDate(null);
      setAppEndDate(null);
    }
  };

  const recruitOnChange = (event) => {
    setRecruit(event);
    if (emptyRecruit !== 'noError') {
      setEmptyRecruit('noError');
    }
    if (recruiting.value) {
      setEmptyRecrStartDate('unset');
      setEmptyRecrEndDate('unset');
      setEmptyAppStartDate('unset');
      setEmptyAppEndDate('unset');
    } else {
      setEmptyRecrStartDate('noError');
      setEmptyRecrEndDate('noError');
      setEmptyAppStartDate('noError');
      setEmptyAppEndDate('noError');
    }
  };
  const sizeOnChange = (event) => {
    setSize(event);
    if (emptySize !== 'noError') {
      setEmptySize('noError');
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
        size={size}
        startDate={startDate}
        endDate={endDate}
        tagOptions={tagOptions}
        appOptions={appOptions}
        sizeOptions={sizeOptions}
        recruitOptions={recruitOptions}
        setStep={setStep}
        setTags={tagsOnChange}
        setAppReq={appReqOnChange}
        setRecruit={recruitOnChange}
        setSize={sizeOnChange}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        _prev={_prev}
        _next={_next}
        emptyTags={emptyTags}
        emptyAppReq={emptyAppReq}
        emptyRecruit={emptyRecruit}
        emptySize={emptySize}
        tagError={tagOverflow}
        setTagError={setTagOverflow}
        emptyRecrStartDate={emptyRecrStartDate}
        emptyRecrEndDate={emptyRecrEndDate}
        emptyAppStartDate={emptyAppStartDate}
        emptyAppEndDate={emptyAppEndDate}
        dateError={dateError}
      />
      <StepThree
        currStep={currStep}
        resentEmail={resentEmail}
        email={email}
        setResentEmail={setResentEmail}
        resendConfirmationEmail={resendConfirmEmail}
      />
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
          <p>This field is required.</p>
        </div>
        <div className={`error ${props.emptyEmail}`}>
          <img src={error} className="errorIcon" alt="error" />
          <p>This field is required.</p>
        </div>
        <div className={`error ${props.emptyPwd}`}>
          <img src={error} className="errorIcon" alt="error" />
          <p>This field is required.</p>
        </div>
        <div className={`error ${props.emailError}`}>
          <img src={error} className="errorIcon" alt="error" />
          <p>Email address is not associated with an RSO.</p>
        </div>
        <div className={`error ${props.conError}`}>
          <img alt="error" src={error} className="errorIcon" />
          <p>Passwords do not match.</p>
        </div>
        <div className={`error ${props.pwdWeakError}`}>
          <img alt="error" src={error} className="errorIcon" />
          <p>Password is not strong enough.</p>
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
        placeholder="Club name (max. 70 characters)"
        value={props.clubName}
        onChange={(e) => props.setClubName(e.target.value)}
        maxLength={70}
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
            target="_blank">
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
  const customStyles = {
    multiValue: (provided, state) => ({
      ...provided,
      background: '#D1D3D4',
      color: '#2b2b2b',
      borderRadius: 4,
    }),
    control: (provided, state) => ({
      display: 'flex',
      width: 320,
      margin: 7,
      marginBottom: 8,
      fontSize: 12,
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 400,
      fontStyle: 'normal',
      borderRadius: 5,
      border: 'solid 1px #949494',
      // border: (state.selectProps.error) ? 'solid 1px #ff2d2d' : 'solid 1px #949494',
    }),
    menu: (provided, state) => ({
      ...provided,
      margin: 8,
      marginTop: 2,
      width: 320,
      fontSize: '12px',
      fontFamily: 'Qanelas Soft',
      fontWeight: 300,
      fontStyle: 'normal',
      textAlign: 'left',
      color:
        state.selectProps.value && state.selectProps.value.length >= 3
          ? '#cccccc'
          : '#4e4e4e',
    }),
    multiValueRemove: (provided, state) => ({
      ...provided,
      background: '#D1D3D4',
      color: '#2b2b2b',
      borderRadius: 10,
      '&:hover': {
        color: 'hsl(0,0%,40%)',
      },
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: '#4e4e4e',
    }),
    multiValueLabel: (provided, state) => ({
      ...provided,
      marginLeft: '4px',
      padding: '2px',
      paddingLeft: '5px',
      fontSize: '12px',
    }),
    indicatorSeparator: (provided, state) => ({
      ...provided,
      width: 0,
    }),

    clearIndicator: (provided, state) => ({
      ...provided,
      cursor: 'pointer',
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      cursor: 'pointer',
    }),
    valueContainer: (provided, state) => ({
      ...provided,
      padding: '5px 8px',
    }),
    '@media only screen and (min-width: 1700px)': {
      menu: (provided, state) => ({
        ...provided,
        width: 500,
      }),
    },
  };

  // ideally this var will set the dropdowns to red-border css as well...
  let haveError = props.emptyRecruit === 'emptyRecruit';
  return (
    <div className="formGroup">
      <div className="formHeader">
        <div className="imageContainer">
          <img src={signup} alt="" />
        </div>
        <h2>Register your club</h2>
      </div>
      <div className="drops">
        {props.recruiting.value ? (
          <p
            className="subtitle"
            style={{ float: 'right', paddingBottom: '15px' }}>
            <span style={{ color: '#FF0000' }}>*</span> Your recruitment status
            will automatically update depending on these dates.
          </p>
        ) : (
          ''
        )}
        <input
          className={props.recruiting.value ? 'userInput' : 'userInput hidden'}
          type="date"
          placeholder={
            props.appReq.value
              ? 'Application close date: '
              : 'Recruiting end date: '
          }
          onChange={(e) => props.setEndDate(e.target.value)}
          value={props.endDate}
        />
        <input
          className={props.recruiting.value ? 'userInput' : 'userInput hidden'}
          type="date"
          placeholder={
            props.appReq.value
              ? 'Application open date: '
              : 'Recruiting start date: '
          }
          onChange={(e) => props.setStartDate(e.target.value)}
          value={props.startDate}
        />
        <Dropdown
          options={props.recruitOptions}
          multi={false}
          search={false}
          placeholder="Select recruitment status"
          defaultValue={props.recruiting}
          set={props.setRecruit}
          error={haveError}
          style={customStyles}
        />
        <Dropdown
          options={props.appOptions}
          multi={false}
          search={false}
          placeholder="Select application requirement"
          defaultValue={props.appReq}
          set={props.setAppReq}
          style={customStyles}
          // error={haveError}
        />
        <Dropdown
          options={props.sizeOptions}
          multi={false}
          search={false}
          placeholder="Select club size"
          defaultValue={props.size}
          set={props.setSize}
          style={customStyles}
          // error={haveError}
        />
        <Dropdown
          options={props.tagOptions}
          multi={true}
          search={true}
          placeholder="Add up to 3 tags"
          defaultValue={props.tags}
          set={props.setTags}
          errorPopup={props.setTagError}
          style={customStyles}
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
          onClick={() => props.resendConfirmationEmail(props.email)}>
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
  sizeOptions: state.profile.sizeOptions,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register, resendConfirmationEmail })(
  MultiStepForm
);