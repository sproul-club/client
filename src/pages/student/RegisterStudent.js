import React, { useState } from 'react';
import { connect } from 'react-redux';
import ReactGA from 'react-ga';
import Dropdown from '../../components/layout/dropdown/Dropdown.js'
import './RegisterStudent.scss';
import { setFormDetails } from '../../redux/actions/catalog';
import {minorsList, majorsList, customStyles, years} from './DropdownLists'
import cutelilbearohyesyouare from '../assets/signup.png';
import illeniumisourlordandsavior from '../assets/login.png';
import { Fab } from '@material-ui/core';

const RegisterStudent = ({
  tagOptions,
  formDetails,
  /*isLoggedIn,*/
}) => {
  const [showYearDD, setShowYearDD] = useState(false);
  const [showMajorsDD, setShowMajorDD] = useState(false);
  const [showMinorsDD, setShowMinorsDD] = useState(false);
  const [showTagsDD, setShowTagsDD] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [year, setYear] = useState('');
  const [majorsPopulated, setMajorsPopulated] = useState(0);

  var yearSelected = false;

  const formattedYears = years.map((year) => {
    return {value: year, label: year}
  })

  const formattedMajors = majorsList.map((major) => {
    return {value: major, label: major}
  });

  const formattedMinors = minorsList.map((minor) => {
    return {value: minor, label: minor}
  });

  var selectedMajors = [];
  var selectedMinors = [];
  var selectedTags = [];
  const { tags } = formDetails;

  function setSelectedYear(value) {
    // Set profile values.
    setYear(value);
    yearSelected = value != null;
    //console.log('Selecting ' + value);
    //console.log(yearSelected);
  }

  function addSelectedMajor(major) {
    // Set profile values.
    if (selectedMajors.includes(major)) {
      const index = selectedMajors.indexOf(major);
      if (index > -1) {
        selectedMajors.splice(index, 1);
      }
    } else {
      selectedMajors.push(major);
    }

    //console.log('Majors: ' + selectedMajors);
  }

  function addSelectedMinor(minor) {
    // Set profile values.
    if (selectedMinors.includes(minor)) {
      const index = selectedMinors.indexOf(minor);
      if (index > -1) {
        selectedMinors.splice(index, 1);
      }
    } else {
      selectedMinors.push(minor);
    }

    //console.log('Minors: ' + selectedMinors);
  }

  function addSelectedTag(tag) {
    // Set profile values.
    if (selectedTags.includes(tag)) {
      const index = selectedTags.indexOf(tag);
      if (index > -1) {
        selectedTags.splice(index, 1);
      }
    } else {
      selectedTags.push(tag);
    }

    //console.log('Tags: ' + selectedTags);
  }
  //console.log(tagOptions)
  //console.log(years)

  ReactGA.initialize('UA-176775736-1');
  ReactGA.pageview('/register');

  return (
    <div class="register-student">
      <div>
        {!isLoggedIn ? (
          <div class="redirection">
            <img class="image" src={illeniumisourlordandsavior} />
            <div class="title">
              Redirecting to CalNet <span> </span>
            </div>
            <div class="text">
              Not redirecting? Click{' '}
              <a href="/" target="_blank">
                {' '}
                here{' '}
              </a>
            </div>
            <div class="filler" onClick={() => setIsLoggedIn(!isLoggedIn)}>
              {"❗❗To be used for development/testing purposes only❗❗ Click this line to redirect"}
            </div>
          </div>
        ) : (
          <div class="modal">
            <img
              class="image"
              alt="cute little bear yes you are"
              src={cutelilbearohyesyouare}
            />
            <div class="title">Just a few more things...</div>

            {/* Year Dropdown */}
            <Dropdown
              options = {formattedYears}
              multi = {false}
              search = {false}
              placeholder ='Select year'
              defaultValue = {year}
              set = {setSelectedYear}
              style={customStyles}
            />

            {/* Majors Dropdown */}
            <Dropdown
              options = {formattedMajors}
              multi = {true}
              search = {true}
              placeholder ='Select major(s)'
              defaultValue = {selectedMajors}
              set = {addSelectedMajor}
              style={customStyles}
            />

            {/* Minors Dropdown */}
            <Dropdown
              options = {formattedMinors}
              multi = {true}
              search = {true}
              placeholder ='Select minor(s)'
              defaultValue = {selectedMinors}
              set = {addSelectedMinor}
              style={customStyles}
            />
            
            {/* Tags Dropdown */}
            <Dropdown
              options = {tagOptions}
              multi = {true}
              search = {true}
              placeholder ='Tags'
              defaultValue = {selectedTags}
              set = {addSelectedTag}
              style={customStyles}
            />

            <div onClick class="save">
              Save
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tagOptions: state.profile.tagOptions,
  formDetails: state.catalog.formDetails,
});

export default connect(mapStateToProps, {
  setFormDetails,
})(RegisterStudent);
