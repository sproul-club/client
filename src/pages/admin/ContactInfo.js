import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateProfile } from '../../redux/actions/profile';
import { NotificationManager } from 'react-notifications';
import { normalizeUrl } from '../../utils/normalizeUrl';
import './admin/Admin.css';

const ContactInfo = ({ profile, updateProfile, close }) => {
  const contactInfo = profile.social_media_links;

  const [email, setEmail] = useState(contactInfo.contact_email);
  const [website, setWebsite] = useState(contactInfo.website);
  const [facebook, setFacebook] = useState(contactInfo.facebook);
  const [instagram, setInstagram] = useState(contactInfo.instagram);
  const [discord, setDiscord] = useState(contactInfo.discord);
  const [linkedin, setLinkedin] = useState(contactInfo.linkedin);
  const [github, setGithub] = useState(contactInfo.github);
  const [behance, setBehance] = useState(contactInfo.behance);
  const [medium, setMedium] = useState(contactInfo.medium);
  const [twitter, setTwitter] = useState(contactInfo.twitter);
  const [gcalendar, setGcalendar] = useState(contactInfo.gcalendar);
  const [youtube, setYoutube] = useState(contactInfo.youtube);

  if (!email) {
    setEmail(profile.owner);
  }

  const submit = async () => {
    // normalize all URLs
    setWebsite(normalizeUrl(website));
    setFacebook(normalizeUrl(facebook));
    setDiscord(normalizeUrl(discord));
    setLinkedin(normalizeUrl(linkedin));
    setBehance(normalizeUrl(github));
    setGithub(normalizeUrl(behance));
    setMedium(normalizeUrl(medium));
    setTwitter(normalizeUrl(twitter));
    setYoutube(normalizeUrl(youtube));
    setGcalendar(normalizeUrl(gcalendar));
    const newProfile = {
      ...profile,
      social_media_links: {
        contact_email: email,
        website,
        facebook,
        instagram,
        discord,
        linkedin,
        behance,
        github,
        medium,
        twitter,
        youtube,
        gcalendar,
      },
    };
    console.log(newProfile);

    // update backend
    try {
      await updateProfile(newProfile);
      NotificationManager.success(
        'Changes to Contact Information saved successfully!',
        '',
        1500
      );
      close();
    } catch (err) {
      console.log(err);
      NotificationManager.error(
        'Changes to Contact Information did not successfully!',
        '',
        1500
      );
    }
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
            Email Address <span style={{ color: '#FF0000' }}>*</span>
          </p>
          <input
            className="userInput"
            value={email || ''}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="+  Add your organization's email"
            type="text"
          />
        </div>
        <p style={{ marginLeft: '210px' }} className="subtitle">
          Please enter a contact email. This field is required.{' '}
          <span style={{ color: '#FF0000' }}>*</span>
        </p>
        <div className="formElement">
          <p>Website</p>
          <input
            className="userInput"
            value={website || ''}
            onChange={(e) => setWebsite(e.target.value)}
            type="text"
            placeholder="+  Add a link"
          />
        </div>
        <div className="formElement">
          <p>Discord</p>
          <input
            className="userInput"
            value={discord || ''}
            onChange={(e) => setDiscord(e.target.value)}
            type="text"
            placeholder="+  Add a link"
          />
        </div>
        <div className="formElement">
          <p>Linkedin</p>
          <input
            className="userInput"
            value={linkedin || ''}
            onChange={(e) => setLinkedin(e.target.value)}
            type="text"
            placeholder="+  Add a link"
          />
        </div>
        <div className="formElement">
          <p>Facebook</p>
          <input
            className="userInput"
            value={facebook || ''}
            onChange={(e) => setFacebook(e.target.value)}
            type="text"
            placeholder="+  Add a link"
          />
        </div>
        <div className="formElement">
          <p>Instagram</p>
          <input
            className="userInput"
            value={instagram || ''}
            onChange={(e) => setInstagram(e.target.value)}
            type="text"
            placeholder="+  Add a link"
          />
        </div>
        <div className="formElement">
          <p>Twitter</p>
          <input
            className="userInput"
            value={twitter || ''}
            onChange={(e) => setTwitter(e.target.value)}
            placeholder="+  Add a link"
            type="text"
          />
        </div>
        <div className="formElement">
          <p>Github</p>
          <input
            className="userInput"
            value={github || ''}
            onChange={(e) => setGithub(e.target.value)}
            placeholder="+  Add a link"
            type="text"
          />
        </div>
        <div className="formElement">
          <p>Behance</p>
          <input
            className="userInput"
            value={behance || ''}
            onChange={(e) => setBehance(e.target.value)}
            placeholder="+  Add a link"
            type="text"
          />
        </div>
        <div className="formElement">
          <p>Medium</p>
          <input
            className="userInput"
            value={medium || ''}
            onChange={(e) => setMedium(e.target.value)}
            type="text"
            placeholder="+  Add a link"
          />
        </div>
        <div className="formElement">
          <p>Youtube</p>
          <input
            className="userInput"
            value={youtube || ''}
            onChange={(e) => setYoutube(e.target.value)}
            type="text"
            placeholder="+  Add a link"
          />
        </div>
        <div className="formElement">
          <p>Google Calendar</p>
          <input
            className="userInput"
            value={gcalendar || ''}
            onChange={(e) => setGcalendar(e.target.value)}
            type="text"
            placeholder="+  Add a link"
          />
        </div>
      </div>
      <button id="save-button" onClick={submit}>
        {' '}
        Save{' '}
      </button>
      <button id="cancel-button" onClick={() => close()}>
        {' '}
        Cancel{' '}
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile.profile,
});

export default connect(mapStateToProps, { updateProfile })(ContactInfo);
