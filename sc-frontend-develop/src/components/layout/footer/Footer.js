import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div>
        Made with <i className="fas fa-heart" style={{ color: 'red' }}></i> by{' '}
        <a href="/">sproul.club</a>!
      </div>
      <div className="end">
        <a href="/about" className="end">
          About Us
        </a>
        <a href="/faq" className="end">
          FAQ
        </a>
      </div>
      <div className="links">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:sproul.club@gmail.com">
          <img
            className="footer-link-image"
            src={require('../../../pages/assets/linkImages/contact_emailLink.png')}
            alt="email link"
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/sproul.club">
          <img
            className="footer-link-image"
            src={require('../../../pages/assets/linkImages/facebookLink.png')}
            alt="facebook link"
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/sproul.club">
          <img
            className="footer-link-image"
            src={require('../../../pages/assets/linkImages/instagramLink.png')}
            alt="instagram link"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
