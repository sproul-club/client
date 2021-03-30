import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <a
      className="contact-button"
      target="_blank"
      rel="noopener noreferrer"
      href="https://airtable.com/shr1u4UI8LozEx8x3"
    >
      <div className="contact-icon">
        <i className="fas fa-comments"></i>
      </div>
      <div className="contact-text">Feedback?</div>
    </a>
  );
};

export default ContactUs;
