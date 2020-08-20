import React from 'react';
import './ClubPage.css';
import EventAccord from './EventAccord';
 
function ClubPage(props) {
  const contactComps = props.data.socials.map((soc) => (
    (soc.link !== "") ? 
      (<a
        target="_blank"
        rel="noopener noreferrer"
        href={soc.link}
      >
        <img
          className="link-image"
          src={require('./assets/linkImages/' + soc.social + 'Link.png')}
          alt="web link"
        />
      </a>)
      : null
  ))
 
  const resComps = props.data.resources.map((res) => (
    <div className="desc-text" id="resources">
      {res.name}
      <a target="_blank" rel="noopener noreferrer" href={res.link}>
        <img
          className="res-img"
          src={require('./assets/linkImages/resLink.png')}
          alt="resource"
        />
      </a>
    </div>
  ));
 
  const tagList = props.data.tags.map((tag) => (
    <div className="tag"> {tag} </div>
  ));
 
  const appReq = props.data.reqApp ? (
    <div className="tag" id="app-req">
      ✎ Requires App
    </div>
  ) : (
    <div className="tag" id="app-not-req">
      😊 No App Required
    </div>
  );
 
  const clubOpen = props.data.open ? (
    <div className="tag" id="open-tag">
      ✓ Taking New Members
    </div>
  ) : (
    <div className="tag" id="not-open-tag">
      ✗ Not Taking New Members
    </div>
  );
 
  return (
    <div>
      <div className="header-img"></div>
 
      <div className="flex-container-left">
        <div className="logo-box">
          <img
            className="club-logo"
            src={require('./assets/ethicalLogo.jpg')}
            alt="club"
          />
          <div className="club-info-flex">
            <div className="club-title">{props.data.name}</div>
            <div className="app-flex">
              {appReq}
              {clubOpen}
            </div>
            <div className="tags-flex">{tagList}</div>    
          </div>
        </div>
 
        <div className="desc-box">
          <p>Description</p>
          <body className="desc-text">{props.data.desc}</body>
        </div>
 
        <div className="events-box">
          <p>Events</p>
          <EventAccord data={props.data} />
        </div>
      </div>
 
      <div className="flex-container-right">
        <div className="contact-box">
          <p>Contact Us</p>
          <div className="link-flex">
            {contactComps}
          </div>
        </div>
 
        <div className="resources-box">
          <p>Resources</p>
          <div className="resources-flex">
            {resComps}
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default ClubPage;

