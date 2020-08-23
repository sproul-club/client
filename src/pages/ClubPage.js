import React, { useEffect } from 'react';
import './ClubPage.css';
import EventAccord from './EventAccord';
import Footer from '../layout/Footer';
import Loading from '../layout/Loading';
import { tagOptions } from '../data/tagOptions';
import { withRouter } from 'react-router-dom';
import { getOrganization, clearOrganization } from '../actions/catalog';
import { connect } from 'react-redux';

function ClubPage({
  organization,
  getOrganization,
  clearOrganization,
  history,
}) {
  console.log('history', history);
  const clubId = history.location.pathname.slice(6);

  useEffect(() => {
    if (organization.id !== clubId) getOrganization(clubId);
    // return function clears the loaded profile when component unmounts
    return () => {
      !organization.id && clearOrganization();
    };
  }, [clubId, clearOrganization, getOrganization, organization.id]);

  if (!organization.id) return <Loading />;

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
          src={require('./assets/linkImages/' + key + 'Link.png')}
          alt="web link"
        />
      </a>
    ) : null
  );
  const resComps = organization.resources.map((res, i) => (
    <div className="desc-text" id="resources">
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
      {tagOptions[tag].label}{' '}
    </div>
  ));

  const appReq = organization.app_required ? (
    <div className="tag" id="app-req">
      ✎ Requires App
    </div>
  ) : (
    <div className="tag" id="app-not-req">
      ☺︎ No App Required
    </div>
  );

  const clubOpen = organization.new_members ? (
    <div className="tag" id="open-tag">
      ✓ Taking New Members
    </div>
  ) : (
    <div className="tag" id="not-open-tag">
      ✗ Not Taking New Members
    </div>
  );

  return (
    <div style={{ minHeight: '100vh' }}>
      <img
        className="header-img"
        src={organization.banner_url || require('./assets/ethicalheader.png')}
        alt=""
      />
      <div className="flex-container-chungus">
        <div className="flex-container-left">
          <div className="logo-box">
            <img
              className="club-logo"
              src={organization.logo_url || require('./assets/ethicalLogo.jpg')}
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

          <div className="desc-box">
            <p>Description</p>
            <div className="desc-text">{organization.about_us}</div>
          </div>

          <div className="events-box">
            <p>Events</p>
            <EventAccord data={organization} />
          </div>
        </div>

        <div className="flex-container-right">
          <div className="contact-box">
            <p>Contact Us</p>
            <div className="link-flex">{contactComps}</div>
          </div>

          <div className="resources-box">
            <p>Resources</p>
            <div className="resources-flex">{resComps}</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => ({
  organization: state.catalog.organization,
});

export default connect(mapStateToProps, { getOrganization, clearOrganization })(
  withRouter(ClubPage)
);
