import React, { useEffect, useState } from 'react';
import './ClubPage.css';
import RecruitmentTL from './RecruitmentTL';
import EventAccord from './EventAccord';
import Gallery from '../layout/Gallery';
import Footer from '../layout/Footer';
import Loading from '../layout/Loading';
import Tag from '../layout/Tag';
import { withRouter } from 'react-router-dom';
import { getOrganization, clearOrganization } from '../actions/catalog';
import { connect } from 'react-redux';
import ReactGA from 'react-ga';
import RightArrow from '@material-ui/icons/CallMadeRounded';
import HeartBordered from '@material-ui/icons/FavoriteBorderRounded';
import EditIcon from '@material-ui/icons/EditRounded';
import { Route, Switch, Link } from 'react-router-dom';
import Modal from '../layout/Modal';
import ContactInfo from '../pages/admin/ContactInfo';
import GetInvolved from '../pages/admin/GetInvolved';
import AboutClub from '../pages/admin/AboutClub';
import Profile from '../pages/admin/Profile';
import Banner from '../pages/admin/Banner';
import RecrEvents from '../pages/admin/RecrEvents';

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

  function cancelEdit() {
    setShowContactModal(false);
    setShowInvolvedModal(false);
    setShowAboutModal(false);
    setShowProfileModal(false);
    setShowBannerModal(false);
    setShowRecrModal(false);
  }

  const path = history.location.pathname.split("/").slice(2);
  const routeId = path[0];
  useEffect(() => {
    if (!admin && organization.link_name !== routeId) getOrganization(routeId);
    // clears the loaded profile when component unmounts
    return () => {
      !organization.link_name && clearOrganization();
    };
    // recall useEffect when the link_name in url changes
  }, [routeId]);
  /*
  organization.gallery = [
    {
      type: "i",
      src: "https://picsum.photos/seed/picsum/1000/500",
      caption: ""
    },
    {
      type: "i",
      src: "https://picsum.photos/seed/picsum/1000/1000",
      caption: "The team"
    },
    {
      type: "v",
      src: "https://www.youtube.com/watch?v=IREN9O3eVkI&ab_channel=YouTube",
      caption: "The team"
    },
  ];*/
  let [tab, setTab] = useState('overview')
  const tempTab = path[1];
  if (tempTab) {
    tab = tempTab;
  } 

  if (!organization.link_name) return <Loading />;

  const socLinks = organization.social_media_links;
  const contactComps = Object.keys(socLinks).map((key, i) =>
    socLinks[key] !== null && socLinks[key] !== '' ? (
      <a
        key={i}
        target="_blank"
        rel="noopener noreferrer"
        href={
          key === 'contact_email' ? 'mailto:' + socLinks[key] : "https://" + socLinks[key]
        }
      >
        <img
          className="clubpage-sm-link"
          src={require('./assets/linkImages/' + key + '.png')}
          alt="web link"
        />
      </a>
    ) : null
  );

  const resComps = organization.resources.map((res, i) => (
    <div className="clubpage-content-resource" id="resources" key={i}>
      {res.name}
      <a target="_blank" rel="noopener noreferrer" href={res.link} key={i}>
        <img
          src={require('./assets/linkImages/resLink.png')}
          alt="resource"
        />
      </a>
    </div>
  ));

  const overview = 
    <div>
    {organization.about_us &&
      <div className='clubpage-content-about clubpage-content-item' >
        <div className='clubpage-content-header'>
          <h1>About {organization.name}</h1>
          {admin && 
            <EditIcon className="clubpage-content-header-icon" onClick={() => setShowAboutModal(admin)}/>
          }
        </div>
        <p dangerouslySetInnerHTML={{ __html: organization.about_us }}></p>
      </div>
    }
    {organization.gallery &&
      <div className='clubpage-content-gallery clubpage-content-item' >
        <div className='clubpage-content-header'>
          <h1>Gallery</h1>
          {admin && 
            <EditIcon className="clubpage-content-header-icon"/>
          }
        </div>
        <Gallery data={organization.gallery}/>
      </div>
    }
  </div>

  let categoryList = organization.tags.map((tag, i) => (
    <Tag key={i} label={tagOptions[tag] && tagOptions[tag].label} />
  ));
  let tagList = [];
  if (organization.new_members) {
    tagList.push(<Tag key={"nm"} label="Taking New Members" color="#c9f0c9" />);
  } else {
    tagList.push(<Tag key={"nnm"} label="Not Taking New Members" color="#ffd6d6" />);
  }
  if (organization.app_required) {
    tagList.push(<Tag key={"ar"} label="Application Required" color="#fff1ae" />);
  } else {
    tagList.push(<Tag key={"nar"} label="Application Not Required" color="#cdeaff" />)
  }

  const numEvents = organization.events.length;
  const lineHeight = (numEvents - 1) * 14;
  const lineTop = -(numEvents) * 13;

  ReactGA.initialize('UA-176775736-1');
  ReactGA.pageview('/' + history.location.pathname.slice(6).split("/")[0]);

  return (
    <div className='clubpage-wrapper'>
      <div className='clubpage'>
        <div className='clubpage-header'>
          <img
            className="header-img"
            src={organization.banner_url || require('./assets/default_banner.jpg')}
            alt=""
          />
          {admin && 
            <EditIcon className="clubpage-content-header-icon above-banner" onClick={() => setShowBannerModal(admin)}/>
          }
          <div className="clubpage-header-content">
            <div className="clubpage-header-left">
              <img
                className="club-logo"
                src={
                  organization.logo_url || require('./assets/default_logo.jpg')
                }
                alt="club"
              />
            </div>
            <div className="clubpage-header-middle">
              <div className="club-title">{organization.name}</div>
              <div className="header-tags">
                {categoryList}
              </div>
              <div className="header-tags">
                {tagList}
              </div>
            </div>
            <div className="clubpage-header-right">
              {!admin && 
                <button className="clubpage-favorite-button" /* NEED AN ONCLICK HANDLER TO ACTUALL DO SOMETHING HERE*/>
                  <HeartBordered fontSize="small"/>
                  <span>Favorite</span>
                </button>
              }             
              {admin && 
                <EditIcon className="clubpage-content-header-icon" onClick={() => setShowProfileModal(admin)}/>
              }
            </div>
          </div>
          <div className="clubpage-header-nav">
            <Link 
              to={admin ? "/admin/overview" : `/club/${routeId}/overview`}
              className={`clubpage-header-nav-item ${tab === "overview" ? "selected" : ""}`} onClick={() => setTab("overview")}>
              Overview
            </Link>
            <Link 
              to={admin ? "/admin/recruitment" : `/club/${routeId}/recruitment`}
              className={`clubpage-header-nav-item ${tab === "recruitment" ? "selected" : ""}`} onClick={() => setTab("recruitment")}>
              Recruitment
            </Link>
            <Link 
              to={admin ? "/admin/events" : `/club/${routeId}/events`}
              className={`clubpage-header-nav-item ${tab === "events" ? "selected" : ""}`} onClick={() => setTab("events")}>
              Events
            </Link>
          </div>
        </div>
        <div className='clubpage-content'>
          <div className='clubpage-content-left'>
            <Switch>
              <Route path={admin ? "/admin/overview" : `/club/${routeId}/overview`} render={() => overview}/>
              <Route path={admin ? "/admin/recruitment" : `/club/${routeId}/recruitment`} render={() => 
                <div className= "clubpage-content-timeline">
                  <div className='clubpage-content-header'>
                    <h1>Recruitment Timeline</h1>
                    {admin && 
                      <EditIcon className="clubpage-content-header-icon" onClick={() => setShowRecrModal(admin)}/>
                    }
                  </div>
                  <div className="recr-container">
                    <RecruitmentTL data={organization}/>
                    <div className="vl" style={{height : lineHeight + "vw", top: lineTop + "vw"}}></div>
                  </div>
                </div>
              } />
              <Route path={admin ? "/admin/events" : `/club/${routeId}/events`} render={() =>
                <div className= "clubpage-content-events">
                  <div>
                    <div className='clubpage-content-header'>
                      <h1>Events</h1>
                      {admin && 
                        <EditIcon className="clubpage-content-header-icon"/>
                      }
                      </div>
                      {organization.events.length > 0 ? 
                        <EventAccord data={organization} />
                      :
                      <p>There are no events scheduled.</p>
                      }
                  </div>
                </div>
              } />
              <Route path={admin ? "/admin" : `/club/${routeId}`} render={() => overview}/>
            </Switch>
          </div>
          <div className='clubpage-content-right'>
            {organization.get_involved && 
              <div className="clubpage-content-getinvolved clubpage-tile">
                <div className='clubpage-content-header'>
                  <h1>How to Get Involved</h1>
                  {admin && 
                    <EditIcon className="clubpage-content-header-icon" onClick={() => setShowInvolvedModal(admin)}/>
                  }
                  </div>
                <p>{organization.get_involved}</p>
                <button className="clubpage-apply-btn" /* NEED AN ONCLICK HANDLER TO LINK TO APPLICATION*/>
                  Apply Now!
                  <RightArrow style={{marginLeft: 5}}/>
                </button>
              </div>
            }
            <div className="clubpage-content-contact clubpage-tile">
              <div className='clubpage-content-header'>
                <h1>Contact Information</h1>
                {admin && 
                  <EditIcon className="clubpage-content-header-icon" onClick={() => setShowContactModal(admin)}/>
                }
                </div>
              <h2>Website</h2>
              <a href={"https://"+organization.social_media_links.website}>{organization.social_media_links.website}</a>
              <h2>Email</h2>
              <a href={"mailto:"+organization.social_media_links.contact_email}>{organization.social_media_links.contact_email}</a>
              <h2>Social Media</h2>
              <div className="clubpage-sm-link-list">{contactComps}</div>
            </div>
            {organization.resources && organization.resources.length > 0 && 
              <div className="clubpage-content-getinvolved clubpage-tile">
                <div className='clubpage-content-header'>
                  <h1>Resources</h1>
                  {admin && 
                    <EditIcon className="clubpage-content-header-icon"/>
                  }
                </div>
                <div className="clubpage-content-resource-list">{resComps}</div>
              </div>
            }
          </div>
        </div>

        <Modal
          showModal={showBannerModal}
          setShowModal={setShowBannerModal}
          close={cancelEdit}
        >
          <div className="admin-modal">
            <Banner profile={organization}/>
          </div>
        </Modal>

        <Modal
          showModal={showProfileModal}
          setShowModal={setShowProfileModal}
          close={cancelEdit}
        >
          <div className="admin-modal">
            <Profile profile={organization}/>
          </div>
        </Modal>

        <Modal
          showModal={showAboutModal}
          setShowModal={setShowAboutModal}
          close={cancelEdit}
        >
          <div className="admin-modal">
            <AboutClub profile={organization}/>
          </div>
        </Modal>

        <Modal
          showModal={showInvolvedModal}
          setShowModal={setShowInvolvedModal}
          close={cancelEdit}
        >
          <div className="admin-modal">
            <GetInvolved profile={organization}/>
          </div>
        </Modal>

        <Modal
          showModal={showContactModal}
          setShowModal={setShowContactModal}
          close={cancelEdit}
        >
          <div className="admin-modal">
            <ContactInfo profile={organization}/>
          </div>
        </Modal>

        <Modal
          showModal={showRecrModal}
          setShowModal={setShowRecrModal}
          close={cancelEdit}
        >
          <div className="admin-modal">
            <RecrEvents profile={organization}/>
          </div>

        </Modal>

        <Footer />
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  admin: ownProps.admin,
  organization: ownProps.admin ? state.profile.profile : state.catalog.organization,
  tagOptions: state.profile.tagOptions,
});

export default connect(mapStateToProps, { getOrganization, clearOrganization })(withRouter(ClubPage));
