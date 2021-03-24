import React, { useState } from 'react';
import { connect } from 'react-redux';
import ReactGA from 'react-ga';
import './RegisterStudent.css';
import { setFormDetails } from '../redux/actions/catalog';

import cutelilbearohyesyouare from './assets/signup.png';
import illeniumisourlordandsavior from './assets/login.png';

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

  const years = ['Freshman', 'Sophomore', 'Junior', 'Senior'];
  var yearSelected = false;
  const [year, setYear] = useState('');

  const majorsList = [
    'African American Studies',
    'American Studies',
    'Ancient Egyptian and Near Eastern Art and Archaeology',
    'Anthropology',
    'Applied Mathematics',
    'Architecture',
    'Art History',
    'Art Practice',
    'Asian American and Asian Diaspora Studies',
    'Astrophysics',
    'Atmospheric Science',
    'Bioengineering',
    'Business Administration',
    'Celtic Studies',
    'Chemical Biology',
    'Chemical Engineering',
    'Chemistry',
    'Chicana/o and Latina/o Studies',
    'Chinese Language',
    'Civil Engineering',
    'Civil Engineering',
    'Classical Civilizations',
    'Classical Languages',
    'Cognitive Science',
    'Comparative Literature',
    'Computer Science',
    'Conservation and Resource Studies',
    'Dance and Performance Studies',
    'Data Science',
    'Dutch Studies',
    'EECS',
    'East Asian Religion, Thought and Culture',
    'East European/Eurasian Languages and/or Cultures',
    'Economics',
    'Ecosystem Management and Forestry',
    'Electrical Engineering & Computer Sciences (EECS)',
    'Energy Engineering',
    'Engineering Mathematics and Statistics',
    'Engineering Physics',
    'English',
    'Environmental Earth Science',
    'Environmental Economics and Policy',
    'Environmental Engineering Science',
    'Environmental Sciences',
    'Ethnic Studies',
    'Film',
    'French',
    "Gender and Women's Studies",
    'Genetics and Plant Biology',
    'Geography',
    'Geology',
    'Geophysics',
    'German',
    'Global Studies',
    'Greek',
    'History',
    'Industrial Engineering & Operations Research',
    'Integrative Biology',
    'Interdisciplinary Studies',
    'Italian Studies',
    'Japanese Language',
    'Landscape Architecture',
    'Latin',
    'Legal Studies',
    'Linguistics',
    'Marine Science',
    'Materials Science & Engineering',
    'Mathematics',
    'Mechanical Engineering',
    'Media Studies',
    'Microbial Biology',
    'Molecular Environmental Biology',
    'Molecular and Cell Biology',
    'Music',
    'Native American Studies',
    'Near Eastern Civilizations',
    'Near Eastern Languages & Literatures',
    'Nuclear Engineering',
    'Nutritional Sciences: Dietetics',
    'Nutritional Sciences: Physiology & Metabolism',
    'Nutritional Sciences: Toxicology',
    'Operations Research & Management Science',
    'Philosophy',
    'Physics',
    'Planetary Science',
    'Political Economy',
    'Political Science',
    'Pre-Med / Pre-Health',
    'Prelaw ',
    'Psychology',
    'Public Health',
    'Rhetoric',
    'Scandinavian',
    'Slavic Languages and Literatures',
    'Social Welfare',
    'Society and Environment',
    'Sociology',
    'South and Southeast Asian Studies',
    'Spanish and Portuguese',
    'Statistics',
    'Sustainable Environmental Design',
    'Theater and Performance Studies',
    'Urban Studies',
  ];
  const [majorsPopulated, setMajorsPopulated] = useState(0);
  var selectedMajors = [];

  const minorsList = [
    'African American Studies',
    'American Studies',
    'Ancient Egyptian and Near Eastern Civilizations',
    'Anthropology',
    'Applied Language Studies',
    'Arabic',
    'Architecture',
    'Armenian Studies',
    'Art History',
    'Asian American and Asian Diaspora Studies',
    'Astrophysics',
    'Atmospheric Science',
    'Bioengineering',
    'Buddhist Studies',
    'Celtic Studies',
    'Chemical Engineering',
    'Chemistry',
    'Chicana/o and Latina/o Studies',
    'Chinese Language',
    'City Planning',
    'Classical Civilizations',
    'Climate Science',
    'Comparative Literature',
    'Computer Science',
    'Conservation and Resource Studies',
    'Creative Writing',
    'Dance and Performance Studies',
    'Data Science',
    'Demography',
    'Digital Humanities',
    'Disability Studies',
    'Dutch Studies',
    'Earth and Planetary Science',
    'East European/Eurasian Languages and/or Cultures',
    'Ecosystem Management and Forestry',
    'Education',
    'Electrical Engineering & Computer Sciences (EECS)',
    'Electronic Intelligent Systems',
    'Energy Engineering',
    'Energy and Resources',
    'English',
    'Environmental Design & Urbanism in Developing Countries',
    'Environmental Earth Science',
    'Environmental Economics and Policy',
    'Environmental Engineering',
    'Ethnic Studies',
    'Food Systems',
    'French',
    "Gender and Women's Studies",
    'Geography',
    'Geology',
    'Geophysics',
    'Geospatial Information Science and Technology',
    'Geosystems',
    'German',
    'Global Poverty and Practice',
    'Global Studies',
    'Greek',
    'Hebrew',
    'Hispanic Languages, Linguistics, and Bilingualism',
    'History',
    'History of the Built Environment',
    'Human Rights Interdisciplinary',
    'Industrial Engineering & Operations Research',
    'Italian Studies',
    'Jewish Studies',
    'Journalism',
    'Korean Language',
    'Landscape Architecture',
    'Latin',
    'Lesbian, Gay, Bisexual, & Transgender Studies',
    'Linguistics',
    'Logic',
    'Marine Science',
    'Materials Science & Engineering',
    'Mathematics',
    'Mechanical Engineering',
    'Medieval Studies',
    'Music',
    'Native American Studies',
    'Nuclear Engineering',
    'Nutritional Sciences: Physiology & Metabolism',
    'Nutritional Sciences: Toxicology',
    'Persian',
    'Philosophy',
    'Physics',
    'Planetary Science',
    'Political Economy',
    'Portuguese Language, Literatures, & Cultures',
    'Psychology',
    'Public Health',
    'Public Policy',
    'Race and the Law',
    'Rhetoric',
    'Russian Culture',
    'Russian Language',
    'Russian Literature',
    'Scandinavian',
    'Science and Math Education',
    'Social & Cultural Factors in Environmental Design',
    'South and Southeast Asian Studies',
    'Spanish Languages, Literatures, & Cultures',
    'Statistics',
    'Structural Engineering',
    'Sustainable Design',
    'Theater and Performance Studies',
    'Tibetan',
    'Turkish',
  ];
  var selectedMinors = [];

  var selectedTags = [];

  const { tags } = formDetails;

  function setSelectedYear(value) {
    // Set profile values.
    setYear(value);
    yearSelected = value != null;
    console.log('Selecting ' + value);
    console.log(yearSelected);
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

    console.log('Majors: ' + selectedMajors);
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

    console.log('Minors: ' + selectedMinors);
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

    console.log('Tags: ' + selectedTags);
  }

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
              .
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
            <div onClick={() => setShowYearDD(!showYearDD)} class="filter">
              {yearSelected ? (
                <div class="selected"> {year} </div>
              ) : (
                'Select year'
              )}
              {/*{!selectedYear ? "Select year" : selectedYear}*/}
              {showYearDD ? (
                <i className="fas fa-caret-up"></i>
              ) : (
                <i className="fas fa-caret-down"></i>
              )}
            </div>
            {showYearDD && (
              <div className="filter-dropdown-years scrollable-content">
                {years.map((year) => (
                  <div className="filter-selection">
                    <input
                      type="radio"
                      name="year"
                      checked={years[year]}
                      onClick={() => setSelectedYear(year)}
                    />
                    <div class="spacer" />
                    {year}
                  </div>
                ))}
              </div>
            )}

            {/* Majors Dropdown */}
            <div onClick={() => setShowMajorDD(!showMajorsDD)} class="filter">
              {majorsPopulated ? (
                <div class="selected"> {selectedMajors.toString()} </div>
              ) : (
                'Select major(s)'
              )}
              {showMajorsDD ? (
                <i className="fas fa-caret-up"></i>
              ) : (
                <i className="fas fa-caret-down"></i>
              )}
            </div>
            {showMajorsDD && (
              <div className="filter-dropdown-majors scrollable-content">
                {majorsList.map((major) => (
                  <div className="filter-selection">
                    <input
                      type="checkbox"
                      checked={majorsList[major]}
                      onClick={() => addSelectedMajor(major)}
                    />
                    <div class="spacer" />
                    {major}
                  </div>
                ))}
              </div>
            )}

            {/* Minors Dropdown */}
            <div onClick={() => setShowMinorsDD(!showMinorsDD)} class="filter">
              Select minor(s)
              {showMinorsDD ? (
                <i className="fas fa-caret-up"></i>
              ) : (
                <i className="fas fa-caret-down"></i>
              )}
            </div>
            {showMinorsDD && (
              <div className="filter-dropdown-minors scrollable-content">
                {minorsList.map((minor) => (
                  <div className="filter-selection">
                    <input
                      type="checkbox"
                      checked={minorsList[minor]}
                      onClick={() => addSelectedMinor(minor)}
                    />
                    <div class="spacer" />
                    {minor}
                  </div>
                ))}
              </div>
            )}

            {/* Tags Dropdown */}
            <div>
              <div
                onClick={() => setShowTagsDD(!showTagsDD)}
                className={`${showTagsDD && 'openDD'} filter tags-filter`}>
                Tags
                {showTagsDD ? (
                  <i className="fas fa-caret-up"></i>
                ) : (
                  <i className="fas fa-caret-down"></i>
                )}
              </div>
              {showTagsDD && (
                <div className="filter-dropdown-tags scrollable-content">
                  {tagOptions.map((tag) => (
                    <div className="filter-selection" key={tag.value}>
                      <input
                        type="checkbox"
                        checked={tags[tag.label]}
                        onClick={() => addSelectedTag(tag)}
                      />
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
