import React, { useState } from 'react'
import { connect } from 'react-redux'
import ReactGA from 'react-ga';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import Footer from '../layout/Footer';

import './RegisterStudent.css';

import {
  setFormDetails,
} from '../actions/catalog';

import cutelilbearohyesyouare from './assets/signup.png';

const RegisterStudent = ({
    tagOptions,
    formDetails,
}) => {
    const [showYearDD, setShowYearDD] = useState(false);
    const [showMajorsDD, setShowMajorDD] = useState(false);
    const [showMinorsDD, setShowMinorsDD] = useState(false);
    const [showTagsDD, setShowTagsDD] = useState(false);

    const years = ['Freshman', 'Sophomore', 'Junior', 'Senior'];
    var yearSelected = false;
    var year = null;

    const majors = ['Art History', 'Art Practice', 'Celtic Studies'];
    var selectedMajors = [];

    const minors = ['Art History', 'Art Practice', 'Celtic Studies'];
    var selectedMinors = [];

    const {
        name,
        tags,
        appReq,
        noAppReq,
        recruiting,
        notRecruiting,
    } = formDetails;

    const toggleTag = tagLabel => {
        // FIXME: needs to be the right toggle reducer
        setFormDetails({ name: 'tags', value: tagLabel })
    }

    function setSelectedYear(value) {
        // Set profile values.
        year = value;
        yearSelected = !yearSelected;
        console.log("Selecting " + year, "yearSelected: " + yearSelected);
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

        console.log("Majors: " + selectedMajors);
    }

    function addSelectedMinor(minor) {
        // Set profile values.
        if (selectedMajors.includes(minor)) {
            const index = selectedMajors.indexOf(minor);
            if (index > -1) {
                selectedMinors.splice(index, 1);
            }
        } else {
            selectedMinors.push(minor);
        }

        console.log("Minors: " + selectedMinors);
    }

    ReactGA.initialize('UA-176775736-1');
    ReactGA.pageview('/register');

    return (
        <div class="register-student">
            <div class="modal">
                <img class="image" src={cutelilbearohyesyouare}/>
                <div class="title">
                    Just a few more things...
                </div>

                {/* Year Dropdown */}
                <div onClick={() => setShowYearDD(!showYearDD)} class="filter">
                    {yearSelected ? year : "Select year"}
                    {/*{!selectedYear ? "Select year" : selectedYear}*/}
                    {showYearDD ? <i className='fas fa-caret-up'></i> : <i className='fas fa-caret-down'></i>}
                </div>
                {showYearDD && (
                    <div className="filter-dropdown-years scrollable-content">
                        {years.map(year => (
                            <div className='filter-selection'>
                                <input type="radio" name="year" checked={years[year]} onClick={()=>setSelectedYear(year)} />
                                <div class="spacer" />
                                {year}
                            </div>
                        ))}
                    </div>
                )}

                {/* Majors Dropdown */}
                <div onClick={() => setShowMajorDD(!showMajorsDD)} class="filter">
                    Select major(s)
                    {showMajorsDD ? <i className='fas fa-caret-up'></i> : <i className='fas fa-caret-down'></i>}
                </div>
                {showMajorsDD && (
                    <div className="filter-dropdown-majors scrollable-content">
                        {majors.map(major => (
                            <div className='filter-selection'>
                                <input type="checkbox" checked={majors[major]} onClick={()=>addSelectedMajor(major)}/>
                                <div class="spacer" />
                                {major}
                            </div>
                        ))}
                    </div>
                )}

                {/* Minors Dropdown */}
                <div onClick={() => setShowMinorsDD(!showMinorsDD)} class="filter">
                    Select minor(s)
                    {showMinorsDD ? <i className='fas fa-caret-up'></i> : <i className='fas fa-caret-down'></i>}
                </div>
                {showMinorsDD && (
                    <div className="filter-dropdown-minors scrollable-content">
                        {minors.map(minor => (
                            <div className='filter-selection'>
                                <input type="checkbox" checked={minors[minor]} onClick={()=>addSelectedMinor(minor)}/>
                                <div class="spacer" />
                                {minor}
                            </div>
                        ))}
                    </div>
                )}

                {/* Tags Dropdown */}
                <div>
                    <div onClick={() => setShowTagsDD(!showTagsDD)} className={`${showTagsDD && 'openDD'} filter tags-filter`}>
                        Tags
                        {showTagsDD ? <i className='fas fa-caret-up'></i> : <i className='fas fa-caret-down'></i>}
                    </div>
                    {showTagsDD && (
                        <div className="filter-dropdown-tags scrollable-content">
                            {tagOptions.map(tag => (
                                <div className='filter-selection' key={tag.value} onClick={()=>toggleTag(tag.label)}>
                                    <input type="checkbox" checked={tags[tag.label]}/>
                                    <div class="spacer" />
                                    {tag.label}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div onClick class="save">
                    Save
                </div>
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
