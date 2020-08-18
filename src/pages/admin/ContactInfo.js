import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateProfile } from '../../actions/profile';

const ContactInfo = ({ profile, updateProfile }) => {
  const contactInfo = profile['social-media-links'];

  const [email, setEmail] = useState(contactInfo['contact-email']);
  const [website, setWebsite] = useState(contactInfo.website);
  const [facebook, setFacebook] = useState(contactInfo.facebook);
  const [instagram, setInstagram] = useState(contactInfo.instagram);
  const [linkedin, setLinkedin] = useState(contactInfo.linkedin);
  const [github, setGithub] = useState(contactInfo.github);
  const [behance, setBehance] = useState(contactInfo.behance);
  const [medium, setMedium] = useState(contactInfo.medium);
  const [twitter, setTwitter] = useState(contactInfo.twitter);
  const [gcalendar, setGcalendar] = useState(contactInfo.gcalendar);
  const [youtube, setYoutube] = useState(contactInfo.youtube);

  const saveContactInfo = () => {
    updateProfile({
      ...profile,
      'social-media-links': {
        'contact-email': email,
        website,
        facebook,
        instagram,
        linkedin,
        behance,
        github,
        medium,
        twitter,
        youtube,
        gcalendar,
      },
    });
  };

  return (
    <div>
      <h3>Contact Information</h3>
      <div className="admin-text">
        Link your organization’s website, email and other social media
        platforms!
      </div>
      <div className="formGroup">
        <div className="formElement">
          <p>
            Email Address <div>*</div>
          </p>
          <input
            className="userInput"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          />
        </div>
        <div className="formElement">
          <p>Website</p>
          <input
            className="userInput"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            type="text"
          />
        </div>
        <div className="formElement">
          <p>Linkedin</p>
          <input
            className="userInput"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            type="text"
          />
        </div>
        <div className="formElement">
          <p>Facebook</p>
          <input
            className="userInput"
            value={facebook}
            onChange={(e) => setFacebook(e.target.value)}
            type="text"
          />
        </div>
        <div className="formElement">
          <p>Instagram</p>
          <input
            className="userInput"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
            type="text"
          />
        </div>
        <div className="formElement">
          <p>Twitter</p>
          <input
            className="userInput"
            value={twitter}
            onChange={(e) => setTwitter(e.target.value)}
            type="text"
          />
        </div>
        <div className="formElement">
          <p>Github</p>
          <input
            className="userInput"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
            type="text"
          />
        </div>
        <div className="formElement">
          <p>Behance</p>
          <input
            className="userInput"
            value={behance}
            onChange={(e) => setBehance(e.target.value)}
            type="text"
          />
        </div>
        <div className="formElement">
          <p>Medium</p>
          <input
            className="userInput"
            value={medium}
            onChange={(e) => setMedium(e.target.value)}
            type="text"
          />
        </div>
        <div className="formElement">
          <p>Youtube</p>
          <input
            className="userInput"
            value={youtube}
            onChange={(e) => setYoutube(e.target.value)}
            type="text"
          />
        </div>
        <div className="formElement">
          <p>Google Calendar</p>
          <input
            className="userInput"
            value={gcalendar}
            onChange={(e) => setGcalendar(e.target.value)}
            type="text"
          />
        </div>
      </div>
      <button className="saveButton" onClick={saveContactInfo}>
        Save changes
      </button>
    </div>
  );
};

export default connect(null, { updateProfile })(ContactInfo);
