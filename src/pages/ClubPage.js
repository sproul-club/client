import React from 'react';
import './ClubPage.css';
import EventAccord from './EventAccord';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

const resList = [
  { name: 'Design Workshop Slides', link: 'https://www.coolmathgames.com/' },
  { name: 'Infosession Slides', link: 'https://www.poptropica.com/' },
  { name: 'Infosession Recording', link: 'https://www.target.com/' },
];

const resComps = resList.map((res) => (
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

function ClubPage(props) {
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
      <Navbar />
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
            <div className="tags-flex">{tagList}</div>
            <div className="app-flex">
              {appReq}
              {clubOpen}
            </div>
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
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={props.data.socials[0].web}
            >
              <img
                className="link-image"
                src={require('./assets/linkImages/webLink.png')}
                alt="web link"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={props.data.socials[0].email}
            >
              <img
                className="link-image"
                src={require('./assets/linkImages/emailLink.png')}
                alt="email link"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={props.data.socials[0].ig}
            >
              <img
                className="link-image"
                src={require('./assets/linkImages/igLink.png')}
                alt="instagram link"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={props.data.socials[0].fb}
            >
              <img
                className="link-image"
                src={require('./assets/linkImages/fbLink.png')}
                alt="facebook link"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={props.data.socials[0].twt}
            >
              <img
                className="link-image"
                src={require('./assets/linkImages/twtLink.png')}
                alt="twitter link"
              />
            </a>
          </div>
        </div>

        <div className="resources-box">
          <p>Resources</p>
          <div className="resources-flex">{resComps}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ClubPage;
