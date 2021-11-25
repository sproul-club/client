import React, { useState } from 'react';
//import { updateProfile } from '../actions/profile';
import { connect } from 'react-redux';
import { NotificationManager } from 'react-notifications';
import {
  searchClubs,
  clearOrganization,
  loadMoreOrgs,
  setFormDetails,
  loadMoreClubs,
} from '../../redux/actions/catalog';
import '../catalog/Catalog.scss';
import Searchbar from '../../components/layout/searchbar/Searchbar';
import GridComponent from '../../components/layout/grid/GridComponent.js';

const AppTracker = ({
  student,
  clearOrganization,
  tagOptions,
  loadMoreClubs,
  num_clubs,
  formDetails,
  setFormDetails,
  num_displayed,
  close,
}) => {
  const [showAppDD, setShowAppDD] = useState(false);
  const [showTagsDD, setShowTagsDD] = useState(false);

  const {
    name,
    tags,
    appReq,
    noAppReq,
    recruiting,
    notRecruiting,
  } = formDetails;

  const resetFilters = () => {
    setFormDetails({ name: 'name', value: '' });
    setFormDetails({ name: 'tags', value: [] });
    setFormDetails({ name: 'appReq', value: false });
    setFormDetails({ name: 'noAppReq', value: false });
    setFormDetails({ name: 'recruiting', value: false });
    setFormDetails({ name: 'notRecruiting', value: false });
  };

  const toggleTag = (tagLabel) => {
    setFormDetails({ name: 'tags', value: tagLabel });
  };

  function toggleAppReq() {
    setFormDetails({ name: 'appReq', value: !appReq });
    setFormDetails({ name: 'noAppReq', value: false });
  }

  function toggleNoAppReq() {
    setFormDetails({ name: 'appReq', value: false });
    setFormDetails({ name: 'noAppReq', value: !noAppReq });
  }

  function toggleRecruiting() {
    setFormDetails({ name: 'recruiting', value: !recruiting });
    setFormDetails({ name: 'notRecruiting', value: false });
  }

  function toggleNotRecruiting() {
    setFormDetails({ name: 'recruiting', value: false });
    setFormDetails({ name: 'notRecruiting', value: !notRecruiting });
  }

  function changeSearch(e) {
    setFormDetails({ name: 'name', value: e.target.value });
  }

  const submit = async () => {
    try {
      //await updateProfile(newProfile);
      NotificationManager.success(
        'Sucessfully updated Application Tracker',
        '',
        1500
      );
      close();
    } catch (err) {
      //console.log(err);
      NotificationManager.error(
        'Unable to update Application Tracker',
        '',
        1500
      );
    }
  };

  return (
    <div>
      <h2>Interested Clubs</h2>
      <p>Add clubs to your board</p>

      <h3>Search from Catalog</h3>
      <div style={{ paddingBottom: '10px' }} className="filters">
        <Searchbar value={name} searchClubs = {changeSearch} click = {resetFilters} showReset = {false}/>

        {/* App Dropdown */}
        <div
          className="filter-wrapper"
          onMouseEnter={() => setShowAppDD(true)}
          onMouseLeave={() => setShowAppDD(false)}>
          <div
            onClick={() => setShowAppDD(!showAppDD)}
            className={`${showAppDD && 'openDD'} filter app-filter`}>
            App
            {showAppDD ? (
              <i className="fas fa-caret-up"></i>
            ) : (
              <i className="fas fa-caret-down"></i>
            )}
          </div>
          {showAppDD && (
            <div className="filter-dropdown">
              <div className="filter-selection">
                <input type="checkbox" onClick={toggleAppReq} />
                <span> App Required</span>
              </div>
              <div className="filter-selection">
                <input type="checkbox" onClick={toggleNoAppReq} />
                <span> No Application</span>
              </div>
            </div>
          )}
        </div>

        {/* Tags Dropdown */}
        <div
          className="filter-wrapper"
          onMouseEnter={() => setShowTagsDD(true)}
          onMouseLeave={() => setShowTagsDD(false)}>
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
            <div className="filter-dropdown scrollable-content">
              {tagOptions.map((tag) => (
                <div
                  className="filter-selection"
                  key={tag.value}
                  onClick={() => toggleTag(tag.label)}>
                  <input type="checkbox" checked={tags[tag.label]} />{' '}
                  {tag.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <GridComponent displayBanner={false} />

      <h3>Favorited</h3>
      <div style={{ paddingBottom: '10px' }} className="filters">
        {/* App Dropdown */}
        <div
          className="filter-wrapper"
          onMouseEnter={() => setShowAppDD(true)}
          onMouseLeave={() => setShowAppDD(false)}>
          <div
            onClick={() => setShowAppDD(!showAppDD)}
            className={`${showAppDD && 'openDD'} filter app-filter`}>
            App
            {showAppDD ? (
              <i className="fas fa-caret-up"></i>
            ) : (
              <i className="fas fa-caret-down"></i>
            )}
          </div>
          {showAppDD && (
            <div className="filter-dropdown">
              <div className="filter-selection">
                <input type="checkbox" onClick={toggleAppReq} />
                <span> App Required</span>
              </div>
              <div className="filter-selection">
                <input type="checkbox" onClick={toggleNoAppReq} />
                <span> No Application</span>
              </div>
            </div>
          )}
        </div>

        {/* Tags Dropdown */}
        <div
          className="filter-wrapper"
          onMouseEnter={() => setShowTagsDD(true)}
          onMouseLeave={() => setShowTagsDD(false)}>
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
            <div className="filter-dropdown scrollable-content">
              {tagOptions.map((tag) => (
                <div
                  className="filter-selection"
                  key={tag.value}
                  onClick={() => toggleTag(tag.label)}>
                  <input type="checkbox" checked={tags[tag.label]} />{' '}
                  {tag.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <GridComponent displayBanner={true} favorites={student.favorited_clubs} />

      <button class="save-button button-blue-fill" onClick={submit}>
        {' '}
        Save Selected{' '}
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  num_clubs: state.catalog.num_clubs,
  tagOptions: state.profile.tagOptions,
  formDetails: state.catalog.formDetails,
  num_displayed: state.catalog.num_displayed,
});

export default connect(mapStateToProps, {
  searchClubs,
  clearOrganization,
  loadMoreOrgs,
  setFormDetails,
  loadMoreClubs,
})(AppTracker);
