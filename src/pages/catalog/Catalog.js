import React, { useState, useEffect } from 'react';
import './../catalog/Catalog.scss';
import banner from './../assets/catalog_banner.jpg';
import GridComponent from './../../components/layout/grid/GridComponent.js';
import { connect } from 'react-redux';
import {
  searchClubs,
  clearOrganization,
  loadMoreOrgs,
  setFormDetails,
  loadMoreClubs,
} from './../../redux/actions/catalog';
import ReactGA from 'react-ga';
import Footer from './../../components/layout/footer/Footer';
import Searchbar from './../../components/layout/searchbar/Searchbar';

const eventsLoadedAtOnce = 18;

const Catalog = ({
  admin,
  clearOrganization,
  tagOptions,
  sizeOptions,
  loadMoreClubs,
  num_clubs,
  formDetails,
  setFormDetails,
  num_displayed,
}) => {
  const [showStatusDD, setShowStatusDD] = useState(false);
  const [showAppDD, setShowAppDD] = useState(false);
  const [showTagsDD, setShowTagsDD] = useState(false);
  const [showMembersDD, setShowMembersDD] = useState(false);
  const [showSortDD, setShowSortDD] = useState(false);

  const {
    name,
    tags,
    appReq,
    noAppReq,
    recruiting,
    notRecruiting,
    sort,
    members,
  } = formDetails;

  // clearing organization to be viewed every time navigate back to club page
  useEffect(() => {
    clearOrganization();
  }, [clearOrganization]);

  // Listener for when scroll reaches bottom, call the function to load more clubs
  useEffect(() => {
    const onScroll = () => {
      if (
        window.innerHeight + window.pageYOffset >=
          document.body.offsetHeight - 0.5 &&
        num_displayed < num_clubs
      ) {
        loadMoreClubs(eventsLoadedAtOnce);
      }
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [num_displayed, num_clubs, loadMoreClubs]);

  const resetFilters = () => {
    setFormDetails({ name: 'name', value: '' });
    setFormDetails({ name: 'tags', value: 'reset' });
    setFormDetails({ name: 'appReq', value: false });
    setFormDetails({ name: 'noAppReq', value: false });
    setFormDetails({ name: 'recruiting', value: false });
    setFormDetails({ name: 'notRecruiting', value: false });
    setFormDetails({ name: 'members', value: 'reset' });
    setFormDetails({ name: 'sort', value: 'Fresh' });
  };

  const toggleTag = (tagLabel) => {
    setFormDetails({ name: 'tags', value: tagLabel });
  };

  const toggleMembers = (tagLabel) => {
    console.log(tagLabel);
    console.log(formDetails.members);
    setFormDetails({ name: 'members', value: tagLabel });
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

  function toggleSort(e) {
    setFormDetails({ name: 'sort', value: e });
  }

  function changeSearch(e) {
    setFormDetails({ name: 'name', value: e.target.value })
  }

  ReactGA.initialize('UA-176775736-1');
  ReactGA.pageview('/catalog');

  return (
    <>
      <div className="catalog-page">
        <div className="catalog-content">
          <div className="banner">
            <img src={banner} alt="banner" />
          </div>
          {/* ok so I was trying to put some of this styling in the filters class but it wasn't working so here it is in js */}
          <div
            style={{
              position: 'sticky',
              top: '67px',
              paddingBottom: '10px',
              borderBottom: '1px solid #ccc',
            }}
            className="filters noselect">
            <Searchbar value={name} searchClubs = {changeSearch} click = {resetFilters} showReset = {true}/>

            {/* Status Dropdown */}
            <div
              className="filter-wrapper"
              onMouseEnter={() => setShowStatusDD(true)}
              onMouseLeave={() => setShowStatusDD(false)}>
              <div
                onClick={() => setShowStatusDD(!showStatusDD)}
                className={`${showStatusDD && 'openDD'} ${
                  (formDetails.recruiting || formDetails.notRecruiting) &&
                  'selectedDD'
                } filter status-filter`}>
                Recruitment
                {showStatusDD ? (
                  <i className="fas fa-caret-up"></i>
                ) : (
                  <i className="fas fa-caret-down"></i>
                )}
              </div>
              {showStatusDD && (
                <div className="filter-dropdown">
                  <div className="filter-selection" onClick={toggleRecruiting}>
                    <input type="checkbox" checked={recruiting} />
                    <span> Open</span>
                  </div>
                  <div
                    className="filter-selection"
                    onClick={toggleNotRecruiting}>
                    <input type="checkbox" checked={notRecruiting} />
                    <span> Closed</span>
                  </div>
                </div>
              )}
            </div>

            {/* App Dropdown */}
            <div
              className="filter-wrapper"
              onMouseEnter={() => setShowAppDD(true)}
              onMouseLeave={() => setShowAppDD(false)}>
              <div
                onClick={() => setShowAppDD(!showAppDD)}
                className={`${showAppDD && 'openDD'} ${
                  (formDetails.appReq || formDetails.noAppReq) && 'selectedDD'
                } filter app-filter`}>
                App
                {showAppDD ? (
                  <i className="fas fa-caret-up"></i>
                ) : (
                  <i className="fas fa-caret-down"></i>
                )}
              </div>
              {showAppDD && (
                <div className="filter-dropdown">
                  <div className="filter-selection" onClick={toggleAppReq}>
                    <input type="checkbox" checked={appReq} />
                    <span> App Required</span>
                  </div>
                  <div className="filter-selection" onClick={toggleNoAppReq}>
                    <input type="checkbox" checked={noAppReq} />
                    <span> No App Required</span>
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
                className={`${showTagsDD && 'openDD'} ${
                  Object.keys(formDetails.tags).some(
                    (k) => formDetails.tags[k]
                  ) && 'selectedDD'
                } filter tags-filter`}>
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

            {/* Members Dropdown */}
            <div
              className="filter-wrapper"
              onMouseEnter={() => setShowMembersDD(true)}
              onMouseLeave={() => setShowMembersDD(false)}>
              <div
                onClick={() => setShowMembersDD(!showMembersDD)}
                className={`${showMembersDD && 'openDD'} ${
                  Object.keys(formDetails.members).some(
                    (k) => formDetails.members[k]
                  ) && 'selectedDD'
                } filter members-filter`}>
                Members
                {showMembersDD ? (
                  <i className="fas fa-caret-up"></i>
                ) : (
                  <i className="fas fa-caret-down"></i>
                )}
              </div>
              {showMembersDD && (
                <div className="filter-dropdown">
                  {sizeOptions.map((option) => (
                    <div
                      onClick={() => toggleMembers(option.value)}
                      className="filter-selection">
                      <input type="checkbox" checked={members[option.value]} />
                      <span>{option.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Sort Dropdown */}
            <div
              className="filter-wrapper"
              onMouseEnter={() => setShowSortDD(true)}
              onMouseLeave={() => setShowSortDD(false)}>
              <div
                onClick={() => setShowSortDD(!showSortDD)}
                className={`${showSortDD && 'openDD'} filter sort-filter`}>
                Sort
                {showSortDD ? (
                  <i className="fas fa-caret-up"></i>
                ) : (
                  <i className="fas fa-caret-down"></i>
                )}
              </div>
              {showSortDD && (
                <div className="filter-dropdown sort-filter-dropdown">
                  <div
                    className="filter-selection"
                    onClick={() => toggleSort('Fresh')}>
                    <span> Recently Updated </span>
                  </div>
                  <div
                    className="filter-selection"
                    onClick={() => toggleSort('Asc')}>
                    <span> Ascending (A-Z)</span>
                  </div>
                  <div
                    className="filter-selection"
                    onClick={() => toggleSort('Desc')}>
                    <span> Decending (Z-A)</span>
                  </div>
                  <div
                    className="filter-selection"
                    onClick={() => toggleSort('Ddln')}>
                    <span> Deadline</span>
                  </div>
                  <div
                    className="filter-selection"
                    onClick={() => toggleSort('Rand')}>
                    <span> Random </span>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="results-content">
            <GridComponent displayBanner={true} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => ({
  num_clubs: state.catalog.num_clubs,
  tagOptions: state.profile.tagOptions,
  sizeOptions: state.profile.sizeOptions,
  formDetails: state.catalog.formDetails,
  num_displayed: state.catalog.num_displayed,
  admin: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {
  searchClubs,
  clearOrganization,
  loadMoreOrgs,
  setFormDetails,
  loadMoreClubs,
})(Catalog);
