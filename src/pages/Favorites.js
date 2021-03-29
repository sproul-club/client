import React, { useEffect, useState } from 'react';
import './Favorites.css';
import './catalog/Catalog.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import GridComponent from '../components/layout/grid/GridComponent.js';
import Footer from '../components/layout/footer/Footer';
import Loading from '../components/layout/loading/Loading';
import {
  searchClubs,
  clearOrganization,
  loadMoreOrgs,
  setFormDetails,
  loadMoreClubs,
} from '../redux/actions/catalog';

function Favorites({
  student,
  clearOrganization,
  tagOptions,
  loadMoreClubs,
  num_clubs,
  formDetails,
  setFormDetails,
  num_displayed,
}) {
  useEffect(() => {
    // Outline leftover from ClubPage
  }, []);

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

  /* TEMPORARY HARDCODED STUDENT FOR TESTING */
  student = {
    majors: [],
    minors: [],
    interests: [],
    favorited_clubs: ['Karasuno High VBC', 'User Testing'],
    visited_clubs: [],
    club_board: {
      interested_clubs: [
        {
          name: 'sproul.club',
          icon:
            'https://sproul-club-images-prod.s3-us-west-1.amazonaws.com/logo/sproul.club-logo-cc6381f68d09a056ef7770a0e9fbdca8.png',
          events: [
            {
              description: 'See our Facebook events for more details.',
              event_end: '2021-09-04T23:59:00',
              event_start: '2021-08-25T08:00:00',
              id:
                'fall-2020-recruitment-with-180-degrees-consulting-at-uc-berkeley',
              link: 'https://www.facebook.com/events/784593735644618/',
              name: 'Application Due',
            },
          ],
        },
        {
          name: 'sproul.club',
          icon:
            'https://sproul-club-images-prod.s3-us-west-1.amazonaws.com/logo/sproul.club-logo-cc6381f68d09a056ef7770a0e9fbdca8.png',
          events: [
            {
              description: 'See our Facebook events for more details.',
              event_end: '2021-09-04T23:59:00',
              event_start: '2021-09-12T08:00:00',
              id:
                'fall-2020-recruitment-with-180-degrees-consulting-at-uc-berkeley',
              link: 'https://www.facebook.com/events/784593735644618/',
              name: 'Workshop #1',
            },
          ],
        },
        {
          name: 'sproul.club',
          icon:
            'https://sproul-club-images-prod.s3-us-west-1.amazonaws.com/logo/sproul.club-logo-cc6381f68d09a056ef7770a0e9fbdca8.png',
          events: [
            {
              description: 'See our Facebook events for more details.',
              event_end: '2021-09-04T23:59:00',
              event_start: '2021-09-23T08:00:00',
              id:
                'fall-2020-recruitment-with-180-degrees-consulting-at-uc-berkeley',
              link: 'https://www.facebook.com/events/784593735644618/',
              name: 'Infosession #2',
            },
          ],
        },
      ],
      applied_clubs: [
        {
          name: 'sproul.club',
          icon:
            'https://sproul-club-images-prod.s3-us-west-1.amazonaws.com/logo/sproul.club-logo-cc6381f68d09a056ef7770a0e9fbdca8.png',
          events: [
            {
              description: 'See our Facebook events for more details.',
              event_end: '2021-09-04T23:59:00',
              event_start: '2021-01-07T08:00:00',
              id:
                'fall-2020-recruitment-with-180-degrees-consulting-at-uc-berkeley',
              link: 'https://www.facebook.com/events/784593735644618/',
              name: 'Virtual Tabling',
            },
          ],
        },
        {
          name: 'sproul.club',
          icon:
            'https://sproul-club-images-prod.s3-us-west-1.amazonaws.com/logo/sproul.club-logo-cc6381f68d09a056ef7770a0e9fbdca8.png',
          events: [
            {
              description: 'See our Facebook events for more details.',
              event_end: '2021-01-07T15:30:00',
              event_start: '2021-01-07T11:00:00',
              id:
                'fall-2020-recruitment-with-180-degrees-consulting-at-uc-berkeley',
              link: 'https://www.facebook.com/events/784593735644618/',
              name: 'Infosession #1',
            },
          ],
        },
        {
          name: 'sproul.club',
          icon:
            'https://sproul-club-images-prod.s3-us-west-1.amazonaws.com/logo/sproul.club-logo-cc6381f68d09a056ef7770a0e9fbdca8.png',
          events: [
            {
              description: 'See our Facebook events for more details.',
              event_end: '2021-01-11T15:30:00',
              event_start: '2021-01-07T11:00:00',
              id:
                'fall-2020-recruitment-with-180-degrees-consulting-at-uc-berkeley',
              link: 'https://www.facebook.com/events/784593735644618/',
              name: 'Speaker Panel',
            },
          ],
        },
      ],
      interviewed_clubs: [
        {
          name: 'sproul.club',
          icon:
            'https://sproul-club-images-prod.s3-us-west-1.amazonaws.com/logo/sproul.club-logo-cc6381f68d09a056ef7770a0e9fbdca8.png',
          events: [
            {
              description: 'See our Facebook events for more details.',
              event_end: '2021-09-04T23:59:00',
              event_start: '2021-10-30T08:00:00',
              id:
                'fall-2020-recruitment-with-180-degrees-consulting-at-uc-berkeley',
              link: 'https://www.facebook.com/events/784593735644618/',
              name: 'Virtual Tabling',
            },
          ],
        },
      ],
    },
  };

  if (!student) return <Loading />;

  return (
    <div className="favorites-wrapper">
      <div className="favorites">
        <div className="favorites-content">
          <div className="favorites-text">
            <h1>Explore your favorites!</h1>
            <div className="subtext">
              <span>
                You have favorited <b>{student.favorited_clubs.length}</b> clubs
                so far,
                <br />
                and <b>{student.club_board.interested_clubs.length}</b> are
                listed as <b>Interested</b> in your Application Tracker Board!
              </span>
            </div>
            <div className="dashboard-eventlist-container"></div>
          </div>
          <div className="favorites-photo">
            <img
              className="favorites-img"
              src={require('./assets/resetpwd2.png')}
              alt="flyer bears image"
            />
          </div>
        </div>
        <h2>Favorites</h2>
        <div
          style={{
            position: 'sticky',
            top: '67px',
            paddingBottom: '10px',
            borderBottom: '1px solid #ccc',
          }}
          className="filters">
          {/* Search Bar */}
          <div className="filter search-filter">
            <i class="fas fa-search"></i>
            <input
              type="text"
              placeholder="Search"
              value={name}
              onChange={(e) => changeSearch(e)}
              className="search-input"
            />
            <span className="reset-filters">reset filters</span>
          </div>

          {/* Status Dropdown */}
          <div
            className="filter-wrapper"
            onMouseEnter={() => setShowStatusDD(true)}
            onMouseLeave={() => setShowStatusDD(false)}>
            <div
              onClick={() => setShowStatusDD(!showStatusDD)}
              className={`${showStatusDD && 'openDD'} filter status-filter`}>
              Status
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
                  <span> Taking members</span>
                </div>
                <div className="filter-selection" onClick={toggleNotRecruiting}>
                  <input type="checkbox" checked={notRecruiting} />
                  <span> Not taking members</span>
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

          {/* Members Dropdown */}
          <div
            className="filter-wrapper"
            onMouseEnter={() => setShowMembersDD(true)}
            onMouseLeave={() => setShowMembersDD(false)}>
            <div
              onClick={() => setShowMembersDD(!showMembersDD)}
              className={`${showMembersDD && 'openDD'} filter members-filter`}>
              Members
              {showMembersDD ? (
                <i className="fas fa-caret-up"></i>
              ) : (
                <i className="fas fa-caret-down"></i>
              )}
            </div>
            {showMembersDD && (
              <div className="filter-dropdown">
                <div className="filter-selection">
                  <input type="checkbox" />
                  <span> {'<'} 10</span>
                </div>
                <div className="filter-selection">
                  <input type="checkbox" />
                  <span> 10-20</span>
                </div>
                <div className="filter-selection">
                  <input type="checkbox" />
                  <span> 20-50</span>
                </div>
                <div className="filter-selection">
                  <input type="checkbox" />
                  <span> 50-100</span>
                </div>
                <div className="filter-selection">
                  <input type="checkbox" />
                  <span> 100+</span>
                </div>
              </div>
            )}
          </div>

          {/* Members Dropdown */}
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
                <div className="filter-selection">
                  <span> Ascending</span>
                </div>
                <div className="filter-selection">
                  <span> Decending</span>
                </div>
                <div className="filter-selection">
                  <span> Recently Added</span>
                </div>
                <div className="filter-selection">
                  <span> Deadline</span>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="results-content">
          <GridComponent
            displayBanner={true}
            favorites={student.favorited_clubs}
          />
        </div>
        <div className="recommended">
          <h2>Recommended</h2>
        </div>
        <div className="results-content">
          <GridComponent displayBanner={true} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

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
})(withRouter(Favorites));
