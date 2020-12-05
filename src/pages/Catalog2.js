import React, { useState, useEffect } from 'react'
import './Catalog2.css'
import banner from './assets/catalog_banner.jpg'
import GridComponent from './GridComponent'
import { connect } from 'react-redux'
import {
  searchClubs,
  clearOrganization,
  loadMoreOrgs,
  setFormDetails,
  loadMoreClubs
} from '../actions/catalog';
import ReactGA from 'react-ga';

const eventsLoadedAtOnce = 18

const Catalog2 = ({
  clearOrganization,
  tagOptions,
  loadMoreClubs,
  num_clubs,
  formDetails,
  setFormDetails,
  num_displayed
}) => {
  const [showStatusDD, setShowStatusDD] = useState(false)
  const [showAppDD, setShowAppDD] = useState(false)
  const [showTagsDD, setShowTagsDD] = useState(false)
  const [showMembersDD, setShowMembersDD] = useState(false)
  const [showSortDD, setShowSortDD] = useState(false)
  

  const {
    name,
    tags,
    appReq,
    noAppReq,
    recruiting,
    notRecruiting,
  } = formDetails;

  console.log(tags)


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
        loadMoreClubs(eventsLoadedAtOnce)
      }
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [num_displayed, num_clubs]);

  const resetFilters = () => {
    setFormDetails({ name: 'name', value: '' });
    setFormDetails({ name: 'tags', value: [] });
    setFormDetails({ name: 'appReq', value: false });
    setFormDetails({ name: 'noAppReq', value: false });
    setFormDetails({ name: 'recruiting', value: false });
    setFormDetails({ name: 'notRecruiting', value: false });
  };

  const tagsOnChange = (input) => {
    var newTags = input;
    if (input === null) {
      newTags = [];
    }
    setFormDetails({ name: 'tags', value: newTags });
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

  ReactGA.initialize('UA-176775736-1');
  ReactGA.pageview('/catalog');


  return (
    <div className='catalog-page'>
      <div className="catalog-content">
        <div className="banner">
          <img src={banner} alt="banner"/>
        </div>
        <div style={{position: 'sticky', top: '67px', paddingBottom: '10px', borderBottom: '1px solid #ccc'}}className='filters'>

          {/* Search Bar */}
          <div className="filter search-filter">
            <i class="fas fa-search"></i>
            <input type="text" placeholder='Search' value={name} onChange={(e) => changeSearch(e)} className='search-input'/>
          </div>

          {/* Status Dropdown */}
          <div className='filter-wrapper'>
            <div onClick={() => setShowStatusDD(!showStatusDD)} className={`${showStatusDD && 'openDD'} filter status-filter`}>
              Status
              {showStatusDD ? <i className='fas fa-caret-down'></i> : <i className='fas fa-caret-up'></i>}
            </div>
            {showStatusDD && (
              <div className="filter-dropdown">
                <div className='filter-selection' onClick={toggleRecruiting}>
                  <input type="checkbox" checked={recruiting}/> 
                  <span> Taking members</span>
                </div>
                <div className='filter-selection' onClick={toggleNotRecruiting}>
                  <input type="checkbox" checked={notRecruiting}/>
                  <span> Not taking members</span>
                </div>
              </div>
            )}
          </div>

          {/* App Dropdown */}
          <div className='filter-wrapper'>
            <div onClick={() => setShowAppDD(!showAppDD)} className={`${showAppDD && 'openDD'} filter app-filter`}>
              App
              {showAppDD ? <i className='fas fa-caret-down'></i> : <i className='fas fa-caret-up'></i>}
            </div>
            {showAppDD && (
              <div className="filter-dropdown">
                <div onClick={toggleAppReq} className='filter-selection'>
                  <input type="checkbox" checked={appReq}/>
                  <span> Required</span>
                </div>
                <div onClick={toggleNoAppReq}  className='filter-selection'>
                  <input type="checkbox" checked={noAppReq}/>
                  <span> Not Required</span>
                </div>
              </div>
            )}
          </div>

          {/* Tags Dropdown */}
          <div className='filter-wrapper'>
            <div onClick={() => setShowTagsDD(!showTagsDD)} className={`${showTagsDD && 'openDD'} filter tags-filter`}>
              Tags
              {showTagsDD ? <i className='fas fa-caret-down'></i> : <i className='fas fa-caret-up'></i>}
            </div>
            {showTagsDD && (
              <div className="filter-dropdown scrollable-content">
                {tagOptions.map(tag => (
                  <div className='filter-selection'>
                    <input type="checkbox"/> {tag.label}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Members Dropdown */}
          <div className='filter-wrapper'>
            <div onClick={() => setShowMembersDD(!showMembersDD)} className={`${showMembersDD && 'openDD'} filter members-filter`}>
              Members
              {showMembersDD ? <i className='fas fa-caret-down'></i> : <i className='fas fa-caret-up'></i>}
            </div>
            {showMembersDD && (
              <div className="filter-dropdown">
                <div className='filter-selection'>
                  <input type="checkbox"/>
                  <span> 0-10</span>
                </div>
                <div className='filter-selection'>
                  <input type="checkbox"/>
                  <span> 10-20</span>
                </div>
                <div className='filter-selection'>
                  <input type="checkbox"/>
                  <span> 20-50</span>
                </div>
                <div className='filter-selection'>
                  <input type="checkbox"/>
                  <span> 50-100</span>
                </div>
                <div className='filter-selection'>
                  <input type="checkbox"/>
                  <span> 100+</span>
                </div>
              </div>
            )}
          </div>

          {/* Members Dropdown */}
          <div className='filter-wrapper'>
            <div onClick={() => setShowSortDD(!showSortDD)} className={`${showSortDD && 'openDD'} filter sort-filter`}>
              Sort
              {showSortDD ? <i className='fas fa-caret-down'></i> : <i className='fas fa-caret-up'></i>}
            </div>
            {showSortDD && (
              <div className="filter-dropdown sort-filter-dropdown">
                <div className='filter-selection'>
                  <span> Ascending</span>
                </div>
                <div className='filter-selection'>
                  <span> Decending</span>
                </div>
                <div className='filter-selection'>
                  <span> Recently Added</span>
                </div>
                <div className='filter-selection'>
                  <span> Deadline</span>
                </div>
              </div>
            )}
          </div>

        </div>
        <div className="results-content">
          <GridComponent/>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  num_clubs: state.catalog.num_clubs,
  tagOptions: state.profile.tagOptions,
  formDetails: state.catalog.formDetails,
  num_displayed: state.catalog.num_displayed
});

export default connect(mapStateToProps, {searchClubs,
  clearOrganization,
  loadMoreOrgs,
  setFormDetails,
  loadMoreClubs})(Catalog2)
