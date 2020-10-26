import React, { useEffect } from 'react';
import './ClubPage.css';
import EventAccord from './EventAccord';
import Footer from '../layout/Footer';
import Loading from '../layout/Loading';
import { withRouter } from 'react-router-dom';
import { getOrganization, clearOrganization } from '../actions/catalog';
import { connect } from 'react-redux';
import ReactGA from 'react-ga';
import CreateIcon from '@material-ui/icons/CreateRounded';
import HappyIcon from '@material-ui/icons/SentimentSatisfiedRounded';
import CheckIcon from '@material-ui/icons/CheckRounded';
import CrossIcon from '@material-ui/icons/CloseRounded';

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
          className="link-image"
          src={require('./assets/linkImages/' + key + '.png')}
          alt="web link"
        />
      </a>
    ) : null
  );

  const resComps = organization.resources.map((res, i) => (
    <div className="desc-text" id="resources" key={i}>
      {res.name}
      <a target="_blank" rel="noopener noreferrer" href={res.link} key={i}>
        <img
          className="res-img"
          src={require('./assets/linkImages/resLink.png')}
          alt="resource"
        />
      </a>
    </div>
  ));

  const tagList = organization.tags.map((tag, i) => (
    <div className="tag" key={i}>
      {' '}
      {tagOptions[tag] && tagOptions[tag].label}{' '}
    </div>
  ));

  const appReq = organization.app_required ? (
    <div className="tag" id="app-req">
      <CreateIcon style={{ fontSize: '1em'}} />
      <span>Requires App</span>
    </div>
  ) : (
    <div className="tag" id="app-not-req">
      <HappyIcon style={{ fontSize: '1em'}} />
      <span>No App Required</span>
    </div>
  );

  const clubOpen = organization.new_members ? (
    <div className="tag" id="open-tag">
      <CheckIcon style={{ fontSize: '1em'}} />
      <span>Taking New Members</span>
    </div>
  ) : (
    <div className="tag" id="not-open-tag">
      <CrossIcon style={{ fontSize: '1em'}} />
      <span>Not Taking New Members</span>
    </div>
  );

  ReactGA.initialize('UA-176775736-1');
  ReactGA.pageview('/' + history.location.pathname.slice(6));

  return (
    <div className='clubpage'>
      <img
        className="header-img"
        src={organization.banner_url || require('./assets/default_banner.jpg')}
        alt=""
      />
      <div className="flex-container-chungus">
        <div className="flex-container-left">
          <div className="logo-box">
            <img
              className="club-logo"
              src={
                organization.logo_url || require('./assets/default_logo.jpg')
              }
              alt="club"
            />
            <div className="club-info-flex">
              <div className="club-title">{organization.name}</div>
              <div className="app-flex">
                {appReq}
                {clubOpen}
              </div>
              <div className="tags-flex">{tagList}</div>
            </div>
          </div>

          {organization.about_us ? (
            <div className="left-box">
              <p>Description</p>
              <div className="desc-text">{organization.about_us}</div>
            </div>
          ) : null}

          {organization.events.length > 0 ? (
            <div className="left-box">
              <p>Events</p>
              <EventAccord data={organization} />
            </div>
          ) : null}
        </div>

        <div className="flex-container-right">
          <div className="contact-box">
            <p>Contact Us</p>
            <div className="link-flex">{contactComps}</div>
          </div>

          {organization.resources.length > 0 ? (
            <div className="right-box">
              <p>Resources</p>
              <div className="resources-flex">{resComps}</div>
            </div>
          ) : null}

          {organization.get_involved ? (
            <div className="right-box">
              <p>How to Get Involved</p>
              <div className="desc-text" id="right-text">
                {organization.get_involved}
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <Footer />
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
