import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactGA from 'react-ga';
import { Route, Switch, Link } from 'react-router-dom';

import { getOrganization, clearOrganization } from '../../redux/actions/catalog';

import RightArrow from '@material-ui/icons/CallMadeRounded';
import BookmarkBordered from '@material-ui/icons/BookmarkBorderRounded';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';

import './ClubPage.scss'
import RecruitmentTL from '../admin/RecruitmentTL.js';
import EventAccord from './EventAccord';
import Gallery from '../../components/gallery/Gallery';
import Footer from '../../components/layout/footer/Footer';
import Loading from '../../components/layout/loading/Loading';
import Tag from '../../components/tag/Tag';

import Modal from '../../components/layout/modal/Modal';
import ContactInfo from '../../pages/admin/ContactInfo';
import GetInvolved from '../../pages/admin/GetInvolved';
import AboutClub from '../../pages/admin/AboutClub';
import Profile from '../../pages/admin/Profile';
import Banner from '../../pages/admin/Banner';
import GalleryUpload from '../../pages/admin/gallery/GalleryUpload';
import RecrEvents from '../../pages/admin/recruitment/RecrEvents';
import Activation from './Activation';
import { membersMap } from '../../utils/filterClubs.js';
import { normalizeUrl } from '../../utils/normalizeUrl.js';
import { API, TOKENS } from '../../utils/backendClient';
import ClubCardSimple from './ClubCardSimple';

function ClubPage({
  admin,
  organization,
  getOrganization,
  clearOrganization,
  tagOptions,
  history,
}) {
  const [showContactModal, setShowContactModal] = useState(false);
  const [showInvolvedModal, setShowInvolvedModal] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showBannerModal, setShowBannerModal] = useState(false);
  const [showRecrModal, setShowRecrModal] = useState(false);
  const [showGalleryModal, setShowGalleryModal] = useState(false);

  const [eventsSet, setEventsSet] = useState('');
  const [activated, setActivation] = useState(false);

  const [aboutMore, setAboutMore] = useState(false);

  function cancelEdit() {
    setShowContactModal(false);
    setShowInvolvedModal(false);
    setShowAboutModal(false);
    setShowProfileModal(false);
    setShowBannerModal(false);
    setShowRecrModal(false);
    setShowGalleryModal(false);
  }

  const path = history.location.pathname.split('/').slice(2);
  const routeId = path[0];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [organization.link_name]);
  useEffect(() => {
    if (!admin && organization.link_name !== routeId) {
      getOrganization(routeId);
    }
    // clears the loaded profile when component unmounts
    return () => {
      // sorry karen uncommented line below bc it fixed something but lmk if it ends up breaking something else hehe
      //!organization.link_name && clearOrganization();
    };
    // recall useEffect when the link_name in url changes
  }, [routeId, activated, organization]);

  // console.log(organization);

  const fetchGallery = async () => {
    try {
      const res = await API.get('/api/admin/gallery-pics');
      console.log(res);
      // dispatch({ type: UPLOAD_IMAGES, payload: res.data });

      // await dispatch(loadProfile());
    } catch (err) {
      console.log(err.response.data);
      throw err;
    }
  };

  let [tab, setTab] = useState('overview');
  const tempTab = path[1];
  if (tempTab) {
    tab = tempTab;
  }

  const [numEvents, setNumEvents] = useState('');

  if (admin && !activated && !organization.reactivated) {
    return <Activation setActivation={setActivation} />;
  }

  if (!organization.link_name) return <Loading />;

  if (!eventsSet) {
    setEventsSet(true);
    setNumEvents(organization.recruiting_events.length);
  }

  const lineHeight = (numEvents - 1) * 12;
  const lineTop = -numEvents * 11.4;

  function incNumEvents(num) {
    if (numEvents + num >= 0) {
      setNumEvents(numEvents + num);
    }
  }

  var recommendedClubCards;
  if (!admin) {
    var recommendedClubs = organization.recommended_clubs;
    var recommendedClubCards = Object.keys(recommendedClubs).map((i) =>
      recommendedClubs[i] !== null && recommendedClubs[i] !== '' ? (
        <ClubCardSimple club={recommendedClubs[i]} />
      ) : null
    );
  }

  const socLinks = organization.social_media_links;
  const contactComps = Object.keys(socLinks).map((key, i) =>
    socLinks[key] !== null && socLinks[key] !== '' ? (
      <a
        key={i}
        target="_blank"
        rel="noopener noreferrer"
        href={
          key === 'contact_email'
            ? 'mailto:' + socLinks[key]
            : normalizeUrl(socLinks[key])
        }>
        <img
          className="clubpage-sm-link"
          src={require('../assets/linkImages/' + key + '.png').default}
          alt="web link"
        />
      </a>
    ) : null
  );

  const resComps = organization.resources.map((res, i) => (
    <div className="clubpage-content-resource" id="resources" key={i}>
      {res.name}
      <a target="_blank" rel="noopener noreferrer" href={res.link} key={i}>
        <img src={require('../assets/linkImages/resLink.png').default} alt="resource" />
      </a>
    </div>
  ));

  const overview = (
    <div>
      <div>
        {
          <div
            id="about"
            className={
              aboutMore
                ? 'clubpage-content-about clubpage-content-item-more'
                : 'clubpage-content-about clubpage-content-item'
            }>
            <div className="clubpage-content-header">
              <h1>About {organization.name}</h1>
              {admin && (
                <img
                  src={require('../assets/Edit.svg').default}
                  className="clubpage-content-header-icon"
                  onClick={() => setShowAboutModal(admin)}
                  alt=""
                />
              )}
            </div>
            <p
              dangerouslySetInnerHTML={
                organization.about_us.length > 0
                  ? { __html: organization.about_us }
                  : { __html: '<p>No description provided.</p>' }
              }></p>
          </div>
        }
        <button
          className="seeMoreButton"
          onClick={() => setAboutMore(!aboutMore)}>
          {' '}
          {aboutMore ? 'See less' : 'See more'}{' '}
          {aboutMore ? <ExpandLess /> : <ExpandMoreIcon />}{' '}
        </button>
        <div className="bottomGallery">
          {((organization.gallery_media &&
            organization.gallery_media.length > 0) ||
            admin) && (
            <div className="clubpage-content-gallery">
              <div className="clubpage-content-header">
                <h1>Gallery (Beta)</h1>
                {admin && (
                  <img
                    src={require('../assets/Edit.svg').default}
                    className="clubpage-content-header-icon"
                    onClick={() => setShowGalleryModal(admin)}
                  />
                )}
              </div>
              {organization.gallery_media &&
                organization.gallery_media.length > 0 && (
                  <div className="gallery">
                    <Gallery data={organization.gallery_media} />
                  </div>
                )}
            </div>
          )}
        </div>
        {/* <GridComponent displayBanner= {true}/> */}
      </div>
    </div>
  );

  var membersMapIndex = organization.num_users;
  let categoryList = organization.tags.map((tag, i) => (
    <Tag key={i} label={tagOptions[tag] && tagOptions[tag].label} listId={i} />
  ));
  let tagList = [];

  if (organization.new_members) {
    tagList.push(
      <Tag key={'nm'} label="Recruitment Open" color="#c9f0c9" listId={'nm'} />
    );
  } else {
    tagList.push(
      <Tag
        key={'nnm'}
        label="Recruitment Closed"
        color="#ffd6d6"
        listId={'nnm'}
      />
    );
  }
  if (organization.app_required) {
    tagList.push(
      <Tag
        key={'ar'}
        label="Application Required"
        color="#fff1ae"
        listId={'ar'}
      />
    );
  } else {
    tagList.push(
      <Tag
        key={'nar'}
        label="No Application Required"
        color="#cdeaff"
        listId={'nar'}
      />
    );
  }
  tagList.push(
    <Tag
      key={'mem'}
      label={membersMap[membersMapIndex].label + ' members'}
      listId={'mem'}
    />
  );

  ReactGA.initialize('UA-176775736-1');
  ReactGA.pageview('/' + history.location.pathname.slice(6).split('/')[0]);

  return (
    <div className="clubpage-wrapper">
    <div className="clubpage">
      <div className="clubpage-header">
        <img
          className="header-img"
          src={
            organization.banner_url || require('../assets/default_banner.jpg').default
          }
          alt=""
        />
        {admin && (
          <img
            src={require('../assets/Edit.svg').default}
            className="clubpage-content-header-icon above-banner"
            onClick={() => setShowBannerModal(admin)}
            alt=""
          />
        )}
        <div className="clubpage-header-content">
          <div className="clubpage-header-left">
            <img
              className="club-logo"
              src={
                organization.logo_url || require('../assets/default_logo.jpg').default
              }
              alt="club"
            />
          </div>
          <div className="clubpage-header-middle">
            <div className="club-title">{organization.name}</div>
            <div className="header-tags">{categoryList}</div>
            <div className="header-tags">{tagList}</div>
          </div>
          <div className="clubpage-header-right">
            {
              !admin
              && <button className="clubpage-favorite-button" /* NEED AN ONCLICK HANDLER TO ACTUALL DO SOMETHING HERE*/>
                  <BookmarkBordered fontSize="small"/>
                  <span>Bookmark</span>
                </button>
            }
            {admin && (
              <img
                src={require('../assets/Edit.svg').default}
                className="clubpage-content-header-icon"
                onClick={() => setShowProfileModal(admin)}
                alt=""
              />
            )}
          </div>
        </div>
        <div className="clubpage-header-nav">
          <Link
            to={admin ? '/admin/overview' : `/club/${routeId}/overview`}
            className={`clubpage-header-nav-item ${
              tab === 'overview' ? 'selected' : ''
            }`}
            onClick={() => setTab('overview')}>
            Overview
          </Link>
          <Link
            to={admin ? '/admin/recruitment' : `/club/${routeId}/recruitment`}
            className={`clubpage-header-nav-item disabled-mobile ${
              tab === 'recruitment' ? 'selected' : ''
            }`}
            onClick={() => setTab('recruitment')}>
            Recruitment
          </Link>
          <Link
            to={admin ? '/admin/events' : `/club/${routeId}/events`}
            className={`clubpage-header-nav-item ${
              tab === 'events' ? 'selected' : ''
            }`}
            onClick={() => setTab('events')}>
            Events
          </Link>
          <div className="lastUpdated">
            {organization.last_updated ? (
              <p>
                Last updated: {organization.last_updated.slice(5, 7)}/
                {organization.last_updated.slice(8, 10)}/
                {organization.last_updated.slice(0, 4)}
              </p>
            ) : (
              <p>Last updated: n/a</p>
            )}
          </div>
        </div>
      </div>
      <div className="clubpage-content">
        <div className="clubpage-content-left">
          <Switch>
            <Route
              path={admin ? '/admin/overview' : `/club/${routeId}/overview`}
              render={() => overview}
            />
            <Route
              path={
                admin ? '/admin/recruitment' : `/club/${routeId}/recruitment`
              }
              render={() => (
                <div className="clubpage-content-timeline disabled-mobile">
                  <div className="clubpage-content-header">
                    <h1>Recruitment Timeline</h1>
                    <p style={{ marginLeft: '18vw' }}>*Times are in PST</p>

                    {admin && (
                      <img
                        src={require('../assets/Edit.svg').default}
                        className="clubpage-content-header-icon"
                        onClick={() => setShowRecrModal(admin)}
                        alt=""
                      />
                    )}
                  </div>
                  <div className="recr-container">
                    <RecruitmentTL
                      adminCheck={admin}
                      profile={organization}
                      events={organization.recruiting_events}
                      currRoute={routeId}></RecruitmentTL>
                    <div
                      className="vl"
                      style={{
                        height: lineHeight + 'vw',
                        marginTop: lineTop + 'vw',
                      }}></div>
                  </div>
                </div>
              )}
            />
            <Route
              path={admin ? '/admin/events' : `/club/${routeId}/events`}
              render={() => (
                <div className="clubpage-content-events">
                  <div>
                    <div className="clubpage-content-header">
                      <h1>Events</h1>
                      {admin && (
                        <img
                          src={require('../assets/Edit.svg').default}
                          className="clubpage-content-header-icon"
                          alt=""
                        />
                      )}
                    </div>
                    <p>This feature is coming soon!</p>
                  </div>
                </div>
              )}
            />
            <Route
              path={admin ? '/admin' : `/club/${routeId}`}
              render={() => overview}
            />
          </Switch>
        </div>
        <div className="clubpage-content-right">
          {
            <div className="clubpage-content-getinvolved clubpage-tile">
              <div className="clubpage-content-header">
                <h1>How to Get Involved</h1>
                {admin && (
                  <img
                    src={require('../assets/Edit.svg').default}
                    className="clubpage-content-header-icon"
                    onClick={() => setShowInvolvedModal(admin)}
                    alt=""
                  />
                )}
              </div>
              <p>{organization.get_involved}</p>
              <div className="apply-button-wrapper">
                {organization.apply_link && (
                  <a
                    href={normalizeUrl(organization.apply_link)}
                    target="_blank">
                    <button className="clubpage-apply-btn">
                      Apply Now!
                      <RightArrow
                        style={{ marginLeft: 5, height: '1.6vw' }}
                      />
                    </button>
                  </a>
                )}
              </div>
            </div>
          }
          <div className="clubpage-content-contact clubpage-tile">
            <div className="clubpage-content-header">
              <h1>Contact Information</h1>
              {admin && (
                <img
                  src={require('../assets/Edit.svg').default}
                  className="clubpage-content-header-icon"
                  onClick={() => setShowContactModal(admin)}
                  alt=""
                />
              )}
            </div>
            <h2>Website</h2>
            <a
              href={normalizeUrl(organization.social_media_links.website)}
              target="_blank">
              {organization.social_media_links.website}
            </a>
            <h2>Email</h2>
            <a
              href={'mailto:' + organization.social_media_links.contact_email}
              target="_blank">
              {organization.social_media_links.contact_email}
            </a>
            <h2>Social Media</h2>
            <div className="clubpage-sm-link-list">{contactComps}</div>
          </div>
          {/* {organization.resources && organization.resources.length > 0 &&
            <div className="clubpage-content-getinvolved clubpage-tile">
              <div className='clubpage-content-header'>
                <h1>Resources</h1>
                {admin &&
                  <EditIcon className="clubpage-content-header-icon"/>
                }
              </div>
              <div className="clubpage-content-resource-list">{resComps}</div>
            </div>
          } */}
        </div>
      </div>

      {tab === 'overview' && !admin && (
        <div className="recommended-clubs-wrapper">
          <h1>Similar organizations</h1>
          <div className="recommended-clubs">{recommendedClubCards}</div>
        </div>
      )}

      <Modal
        showModal={showBannerModal}
        setShowModal={setShowBannerModal}
        close={cancelEdit}>
        <div className="admin-modal">
          <Banner profile={organization} close={cancelEdit} />
        </div>
      </Modal>

      <Modal
        showModal={showGalleryModal}
        setShowModal={setShowGalleryModal}
        close={cancelEdit}>
        <div className="admin-modal">
          <GalleryUpload profile={organization} close={cancelEdit} />
        </div>
      </Modal>

      <Modal
        showModal={showProfileModal}
        setShowModal={setShowProfileModal}
        close={cancelEdit}>
        <div className="admin-modal">
          <Profile profile={organization} close={cancelEdit} />
        </div>
      </Modal>

      <Modal
        showModal={showAboutModal}
        setShowModal={setShowAboutModal}
        close={cancelEdit}>
        <div className="admin-modal">
          <AboutClub profile={organization} close={cancelEdit} />
        </div>
      </Modal>

      <Modal
        showModal={showInvolvedModal}
        setShowModal={setShowInvolvedModal}
        close={cancelEdit}>
        <div className="admin-modal">
          <GetInvolved profile={organization} close={cancelEdit} />
        </div>
      </Modal>

      <Modal
        showModal={showContactModal}
        setShowModal={setShowContactModal}
        close={cancelEdit}>
        <div className="admin-modal">
          <ContactInfo profile={organization} close={cancelEdit} />
        </div>
      </Modal>

      <Modal
        showModal={showRecrModal}
        setShowModal={setShowRecrModal}
        close={cancelEdit}>
        <div className="admin-modal">
          <RecrEvents
            profile={organization}
            events={organization.recruiting_events}
            cancelEdit={cancelEdit}
            incNumEvents={incNumEvents}
          />
        </div>
      </Modal>
    </div>
    <Footer />
  </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  admin: ownProps.admin,
  organization: ownProps.admin
    ? state.profile.profile
    : state.catalog.organization,
  tagOptions: state.profile.tagOptions,
});

export default connect(mapStateToProps, { getOrganization, clearOrganization })(
  withRouter(ClubPage)
);
