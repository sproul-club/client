import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-wrapper">
        <div>
          Made with <i className="fas fa-heart" style={{ color: 'red' }}></i> by <a href="/">sproul.club</a>! 
        </div>
        <div style={{paddingTop:"10px"}}>
          <a target="_blank" href="mailto:sproul.club@gmail.com">
            <img
              className="footer-link-image"
              src={require('../pages/assets/linkImages/contact_emailLink.png')}
              alt="email link"
            />
          </a>
          <a target="_blank" href="https://www.facebook.com/sproul.club">
            <img
              className="footer-link-image"
              src={require('../pages/assets/linkImages/facebookLink.png')}
              alt="facebook link"
            />
          </a>
          <a target="_blank" href="https://www.instagram.com/sproul.club">
            <img
              className="footer-link-image"
              src={require('../pages/assets/linkImages/instagramLink.png')}
              alt="instagram link"
            />
          </a>
        </div>
    </div>
  );
};

export default Footer;
