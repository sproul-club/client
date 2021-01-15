import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter  } from 'react-router-dom';
import signup from './assets/signup.png';
import Dropdown from './Dropdown.js';
import { loadProfile } from '../actions/profile';
import './SignUp.css';
import './Activation.css';

const Activation = ({tagOptions, profile, loadProfile}) => {
    useEffect(() => {
        if (profile && profile.link_name && profile.link_name.length === 0) loadProfile();
      }, [loadProfile, profile]);
  
    const [clubName, setClubName] = useState('');
    const [tags, setTags] = useState([]);
    const [members, setMembers] = useState('');
    const [appReq, setAppReq] = useState(false);
    const [recruitingStart, setRStart] = useState('');
    const [recruitingEnd, setREnd] = useState('');
    const [activated, setActivated] = useState(false);
    const memberOptions = [
        {label: "0-10", value: 0},
        {label: "10-20", value: 1},
        {label: "20-50", value: 2},
        {label: "50-100", value: 3},
        {label: "100+", value: 4},
    ];

    const activate = () => {
        const formDetails = {
            "clubName" : clubName,
            "tags" : tags,
            "members" : members,
            "appReq" : appReq,
            "recruitingStart" : recruitingStart,
            "recruitingEnd" : recruitingEnd
        }

        console.log(formDetails);
    }

    const appOptions = [
        { value: true, label: 'Application required' },
        { value: false, label: 'No application required' },
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

    useEffect(() => {
    if (clubName && tags && members && appReq && recruitingStart && recruitingEnd) {
        setActivated(true);
    } else {
        setActivated(false);
    }
    }, [clubName, tags, members, appReq, recruitingStart, recruitingEnd]);
    
      
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
                        maxLength={100}
                        onChange={(e) => setClubName(e.target.value)}
                    />
                    <Dropdown
                        options={tagOptions}
                        multi={true}
                        search={true}
                        placeholder="Select tags (maximum 3 tags)"
                        style={customStyles}
                        defaultValue={tags}
                        set={setTags}
                    />
                    <Dropdown
                        options={memberOptions}
                        multi={false}
                        search={false}
                        placeholder="Select number of members"
                        style={customStyles}
                        defaultValue={members}
                        set={setMembers}
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
                    <input
                        className='userInput'
                        type="date"
                        placeholder={appReq.value ? "Application open date: " : "Recruiting start date: "}
                        onChange={(e) => setRStart(e.target.value)}
                    />
                    <input
                        className='userInput'
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
    profile: state.profile.profile
    // num_displayed: state.catalog.num_displayed
  });
  
  export default connect(mapStateToProps, { loadProfile })(
    withRouter(Activation)
  );