import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter  } from 'react-router-dom';
import signup from './assets/signup.png';
import Dropdown from './Dropdown.js';
import { updateProfile } from '../actions/profile';
import './SignUp.css';
import './Activation.css';
import Loading from '../layout/Loading';
import { NotificationManager } from 'react-notifications';

const Activation = ({tagOptions, profile, updateProfile, setActivation, sizeOptions}) => {
    const [clubName, setClubName] = useState('');
    const [tags, setTags] = useState([]);
    const [size, setSize] = useState('');
    const [appReq, setAppReq] = useState('');
    const [recruitingStart, setRStart] = useState('');
    const [recruitingEnd, setREnd] = useState('');
    const [activated, setActivated] = useState(false);
    const [recruiting, setRecruit] = useState('');
    var defaultVal = false;

    // You need both of these just to give time for the state to update before populating the club's information into the form elements
    useEffect( () => {
      setClubName(profile.name);
      setAppReq(profile.app_required ? {value : 1, label : 'Application required'} : {value : 0, label : 'No application required'});
      setTags(profile.tags.map((tag) => tagOptions[tag]));
      setRecruit(profile.new_members ? {value: 1, label: "Taking new members"} : {value: 0, label: "Not taking new members"});
      setSize(profile.num_users);
      defaultVal=true;
    }, [profile]);

    useEffect( () => {
      setClubName(profile.name);
      setAppReq(profile.app_required ? {value : 1, label : 'Application required'} : {value : 0, label : 'No application required'});
      setTags(profile.tags.map((tag) => tagOptions[tag]));
      setRecruit(profile.new_members ? {value: 1, label: "Taking new members"} : {value: 0, label: "Not taking new members"});
      setSize(profile.num_users);
    }, [defaultVal]);

    // Activate the activate button
    useEffect(() => {
      if (recruiting.value === 1) {
        if (clubName && tags && size && appReq && recruitingStart && recruitingEnd) {
          setActivated(true);
        } else {
          setActivated(false);
        }
      } else {
        if (clubName && tags && size && appReq) {
          setActivated(true);
        } else {
          setActivated(false);
        }
      }
    }, [clubName, tags, size, appReq, recruitingStart, recruitingEnd, recruiting, profile]);

    const activate = async () => {
        const newProfile = {
          ...profile,
            name : clubName,
            tags : tags.map((tags) => tags.value),
            num_users : size.value,
            app_required : !!appReq.value,
            new_members : !!recruiting.value,
            // apply_deadline_start : recruitingStart ? recruitingStart : '1970-01-01T00:00:00',
            // apply_deadline_end : recruitingEnd ? recruitingEnd : '1970-01-01T00:00:00',
            // recruiting_start: recruitingStart ? recruitingStart : '1970-01-01T00:00:00',
            // recruiting_end: recruitingEnd ? recruitingEnd : '1970-01-01T00:00:00',
            apply_deadline_start : (recruiting.value === 1 && appReq.value === 1) ? recruitingStart : null,
            apply_deadline_end : (recruiting.value === 1 && appReq.value === 1)? recruitingStart : null,
            recruiting_start: (recruiting.value === 1 && appReq.value === 0)? recruitingStart : null,
            recruiting_end: (recruiting.value === 1 && appReq.value === 0)? recruitingStart : null,
            is_reactivating: true
        }

        
        try {
          await updateProfile(newProfile);
          NotificationManager.success('Activation successful!', '', 1500);
          if (setActivation) {
            setActivation(true);
          }
        } catch (err) {
          console.log(err);
          NotificationManager.error('Activation unsuccessful!', '', 1500);
        }
    }

    const appOptions = [
      { value: 1, label: 'Application required' },
      { value: 0, label: 'No application required' }
    ];

    const recruitOptions = [
      { value: 1, label: 'Accepting new members' },
      { value: 0, label: 'Not accepting new members' },
  ];

    const customStyles = {
        multiValue: (provided, state) => ({
          ...provided,
          background: '#D1D3D4',
          color: '#2b2b2b',
          'border-radius': 4,
        }),
        control: (provided, state) => ({
          display: 'flex',
          width: 342,
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
          width: 342,
          fontSize: '12px',
          fontFamily: 'Qanelas Soft',
          fontWeight: 300,
          fontStyle: 'normal',
          textAlign: 'left',
          color: (state.selectProps.value && state.selectProps.value.length >= 3) ? '#cccccc' : '#4e4e4e'
        }),
        multiValueRemove: (provided, state) => ({
          ...provided,
          background: '#D1D3D4',
          color: '#2b2b2b',
          borderRadius: 10,
          "&:hover": {
            color: 'hsl(0,0%,40%)',
          }
        }),
        singleValue: (provided, state) => ({
          ...provided,
          color: '#4e4e4e',
        }),
        multiValueLabel: (provided, state) => ({
          ...provided,
          'margin-left': "4px",
          'padding': '2px',
          'padding-left': '5px',
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
        "@media only screen and (min-width: 1700px)": {
          menu: (provided, state) => ({
            ...provided,
            width: 500,
          }),
        },
    };

    if (tags) {
      if (tags.every(element => element === null)) {
        return <Loading />
      }
    }
    
    return (
        <div className="activation">
            <div className="form">
                <div className="formGroup">
                    <div className="formHeader">
                        <div className="imageContainer">
                        <img src={signup} alt="register" />
                        </div>
                        <h2>Just a few more things...</h2>
                    </div>
                    <input
                        className='userInput'
                        type="text"
                        placeholder="Club name (maximum 55 characters)"
                        maxLength={55}
                        onChange={(e) => setClubName(e.target.value)}
                        defaultValue={clubName}
                    />
                    <Dropdown
                        options={tagOptions}
                        multi={true}
                        search={true}
                        placeholder="Select tags (maximum 3 tags)"
                        style={customStyles}
                        defaultValue={profile.tags.map((tag) => tagOptions[tag])}
                        set={setTags}
                    />
                    <Dropdown
                        options={sizeOptions}
                        multi={false}
                        search={false}
                        placeholder="Select number of members"
                        style={customStyles}
                        defaultValue={sizeOptions[size]}
                        set={setSize}
                    />
                    <Dropdown
                        options={appOptions}
                        multi={false}
                        search={false}
                        placeholder="Select application requirement"
                        style={customStyles}
                        defaultValue={appReq}
                        set={setAppReq}
                    />
                    <Dropdown
                        options={recruitOptions}
                        multi={false}
                        search={false}
                        placeholder="Select recruitment status"
                        style={customStyles}
                        defaultValue={recruiting}
                        set={setRecruit}
                    />
                    <input
                        className={recruiting.value === 1 ? 'userInput' : 'userInput hidden'}
                        type="date"
                        placeholder={appReq.value ? "Application open date: " : "Recruiting start date: "}
                        onChange={(e) => setRStart(e.target.value)}
                    />
                    <input
                        className={recruiting.value === 1 ? 'userInput' : 'userInput hidden'}
                        type="date"
                        placeholder={appReq.value ? "Application close date: " : "Recruiting end date: "}
                        onChange={(e) => setREnd(e.target.value)}
                    />
                </div>
                <div className="buttonWrapper">
                    <button className={activated ? "activatedButton" : "inactivatedButton"} onClick={activate}>
                        Activate Club
                    </button>
                </div>
            </div>
        </div>
      );
  }
  
  // This function gets a piece of the app state that is stored in redux store
  const mapStateToProps = (state) => ({
    // clubs: state.catalog.allOrganizations,
    // formDetails: state.catalog.formDetails,
    tagOptions: state.profile.tagOptions,
    profile: state.profile.profile,
    sizeOptions: state.profile.sizeOptions,
    // num_displayed: state.catalog.num_displayed
  });
  
  export default connect(mapStateToProps, { updateProfile })(
    withRouter(Activation)
  );