import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="line-1">
        <span className="sproul">sproul.club </span>
        <span>© 2020</span>
      </div>
      <div className="line-2">
        Made with <i className="fas fa-heart" style={{ color: 'red' }}></i> by
        the sproul.club development team!
      </div>
    </div>
  );
};

export default Footer;
