import React, { useEffect, useState } from 'react';
import './ClubPage.css';
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

function ClubPage({
  organization,
  getOrganization,
  clearOrganization,
  tagOptions,
  history,
}) {
  const routeId = history.location.pathname.slice(6);
  useEffect(() => {
    if (organization.link_name !== routeId) getOrganization(routeId);
    // clears the loaded profile when component unmounts
    return () => {
      !organization.link_name && clearOrganization();
    };
    // recall useEffect when the link_name in url changes
  }, [routeId]);

  let admin = true;
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
  ];
  let [tab, setTab] = useState('overview')

  if (!organization.link_name) return <Loading />;

  const socLinks = organization.social_media_links;
  const contactComps = Object.keys(socLinks).map((key, i) =>
    socLinks[key] !== null && socLinks[key] !== '' ? (
      <a
        key={i}
        target="_blank"
        rel="noopener noreferrer"
        href={
          key === 'contact_email' ? 'mailto:' + socLinks[key] : socLinks[key]
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


  let categoryList = organization.tags.map((tag, i) => (
    <Tag label={tagOptions[tag] && tagOptions[tag].label} />
  ));
  let tagList = [];
  if (organization.new_members) {
    tagList.push(<Tag label="Taking New Members" color="#c9f0c9" />);
  } else {
    tagList.push(<Tag label="Not Taking New Members" color="#ffd6d6" />);
  }
  if (organization.app_required) {
    tagList.push(<Tag label="Application Required" color="#fff1ae" />);
  } else {
    tagList.push(<Tag label="Application Not Required" color="#cdeaff" />)
  }

  ReactGA.initialize('UA-176775736-1');
  ReactGA.pageview('/' + history.location.pathname.slice(6));

  return (
    <div className='clubpage-wrapper'>
      <div className='clubpage'>
        <div className='clubpage-header'>
          <img
            className="header-img"
            src={organization.banner_url || require('./assets/default_banner.jpg')}
            alt=""
          />
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
              <div class="club-title">{organization.name}</div>
              <div class="header-tags">
                {categoryList}
              </div>
              <div class="header-tags">
                {tagList}
              </div>
            </div>
            <div className="clubpage-header-right">
                <button className="clubpage-favorite-button" /* NEED AN ONCLICK HANDLER TO ACTUALL DO SOMETHING HERE*/>
                  <HeartBordered fontSize="small"/>
                  <span>Favorite</span>
                </button>
            </div>
          </div>
          <div className="clubpage-header-nav">
            <button className={`clubpage-header-nav-item ${tab == "overview" ? "selected" : ""}`} onClick={() => setTab("overview")}>Overview</button>
            <button className={`clubpage-header-nav-item ${tab == "recruitment" ? "selected" : ""}`} onClick={() => setTab("recruitment")}>Recruitment</button>
            <button className={`clubpage-header-nav-item ${tab == "events" ? "selected" : ""}`} onClick={() => setTab("events")}>Events</button>
          </div>
        </div>
        <div className='clubpage-content'>
          <div className='clubpage-content-left'>
            {tab === 'overview' &&
              <div>
                {organization.about_us &&
                  <div className='clubpage-content-about clubpage-content-item' >
                    <h1>About {organization.name}</h1>
                    <p dangerouslySetInnerHTML={{ __html: organization.about_us }}></p>
                  </div>
                }
                {organization.gallery &&
                  <div className='clubpage-content-gallery clubpage-content-item' >
                    <h1>Gallery</h1>
                    <Gallery data={organization.gallery}/>
                  </div>
                }
              </div>
            }
            {tab === 'recruitment' && 
              <div className= "clubpage-content-timeline">
                <h1>Recruitment Timeline</h1>
              </div>
            }
            {tab === 'events' &&
              <div className= "clubpage-content-events">
                {organization.events.length > 0 ?
                  <div>
                    <h1>Events</h1>
                    <EventAccord data={organization} />
                  </div>
                : 
                  <p>There are no events scheduled.</p>
                }
              </div>
            }
          </div>
          <div className='clubpage-content-right'>
            {organization.get_involved && 
              <div className="clubpage-content-getinvolved clubpage-tile">
                <h1>How to Get Involved</h1>
                <p>{organization.get_involved}</p>
                <button className="clubpage-apply-btn" /* NEED AN ONCLICK HANDLER TO LINK TO APPLICATION*/>
                  Apply Now!
                  <RightArrow style={{marginLeft: 5}}/>
                </button>
              </div>
            }
            <div className="clubpage-content-contact clubpage-tile">
              <h1>Contact Information</h1>
              <h2>Website</h2>
              <h2>Email</h2>
              <h2>Social Media</h2>
              <div className="clubpage-sm-link-list">{contactComps}</div>
            </div>
            {organization.resources && organization.resources.length > 0 && 
              <div className="clubpage-content-getinvolved clubpage-tile">
                <h1>Resources</h1>
                <div className="clubpage-content-resource-list">{resComps}</div>
              </div>
            }
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  organization: state.catalog.organization,
  tagOptions: state.profile.tagOptions,
});

export default connect(mapStateToProps, { getOrganization, clearOrganization })(
  withRouter(ClubPage)
);
