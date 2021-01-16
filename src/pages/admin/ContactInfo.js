import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateProfile } from '../../actions/profile';
import { NotificationManager } from 'react-notifications';
import { normalizeUrl } from '../../utils/normalizeUrl';
import './Admin.css';
import Dropdown from './AdminDropdown.js';
import { LinkedIn, NoEncryption } from '@material-ui/icons';


const ContactInfo = ({ profile, updateProfile }) => {
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

  if (email === null) {
    setEmail(profile.owner);
  }

  var linkOptions = [
    {value: linkedin, label: 'LinkedIn', setMethod: setLinkedin},
    {value: instagram, label: 'Instagram', setMethod: setInstagram},
    {value: facebook, label: 'Facebook', setMethod: setFacebook},
    {value: twitter, label: 'Twitter', setMethod: setTwitter},
    {value: website, label: 'Website', setMethod: setWebsite},
    {value: discord, label: 'Discord', setMethod: setDiscord},
    {value: github, label: 'Github', setMethod: setGithub},
    {value: behance, label: 'Behance', setMethod: setBehance},
    {value: medium, label: 'Medium', setMethod: setMedium},
    {value: youtube, label: 'Youtube', setMethod: setYoutube},
    {value: gcalendar, label: 'Google Calendar', setMethod: setGcalendar},
    {value: email, label: 'Email',setMethod: setEmail}
  ];

  const [value,setValue]=useState('');

  const [inputList, setInputList] = useState([
  ]);
  
  const handleChange = (e, index) => {
    const {name, value} = e.target;
    const list = [...inputList];
    list[index][name]=value;


    setInputList(list);
  }

  const handle = (e) => {
    console.log(e.target.value);
  }

  const handleAddInput = () => {
    setInputList([...inputList, {linkType: "Select link type", link: "+ Add your organization's link", set: ""}]);
  }

  const handleRemoveInput = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  }

  const submit = async () => {
    // normalize all URLs
    setWebsite(normalizeUrl(website));
    setFacebook(normalizeUrl(facebook));
    setInstagram(normalizeUrl(instagram));
    setDiscord(normalizeUrl(discord));
    setLinkedin(normalizeUrl(linkedin));
    setGithub(normalizeUrl(github));
    setBehance(normalizeUrl(behance));
    setMedium(normalizeUrl(medium));
    setTwitter(normalizeUrl(twitter));
    setGcalendar(normalizeUrl(gcalendar));
    setYoutube(normalizeUrl(youtube));
    const newProfile = {
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
      }
    };

    // update backend
    try {
      await updateProfile(newProfile);
      NotificationManager.success('Changes to Contact Information saved successfully!', '', 1500);
    } catch (err) {
      console.log(err);
      NotificationManager.error('Changes to Contact Information did not successfully!', '', 1500);
    }
  }

  const DividerLine = ({color}) => (
    <hr
      style = {{
        color: color,
        backgroundColor: color,
        height: 0.5,
        borderColor: color,
        marginLeft: 0,
      }}
    />
  )

  const customizedStyle = {
    display: 'flex',
    width: '371px',
    height: '38px',
    margin: 0,
    fontSize: 14,
    lineHeight: '16px',
    border: 'solid 1px #2b2b2b',
    borderRadius: 10,
    padding: 0,
    paddingLeft: 10,
    background: 'white',
  }

  const customizedButton = {
    default: "C4C4C4",
    hover: "E2E2E2",
    width: '25px',
    height: '25px',
    marginLeft: 10,
    background: 'white',
    border: 'white'
  }

  const addLinkButton = {
    width: '111px',
    height: '37px',
    borderRadius: 5,
    borderColor: '#54A0F1',
    background: 'white',
  }

  return (
    <div>
      <h3>Contact Us</h3>
      <div className="admin-text">
        Link your organization’s website, email and other social media
        platforms!
      </div>

      <br></br>
      <DividerLine color="grey"/>
      <br></br>

      <div className="admin-text">
        Link(s)
      </div>

      <div className="formGroup">
        <div className="formElement">
          <p>
          <Dropdown 
            name="linkType"         
            options={linkOptions[11].label}
            multi={false}
            placeholder={linkOptions[11].label}
            set={setEmail}
            // value={linkOptions[11].label}
          />
          </p>
          <input
            className="userInput"
            value={email || ''}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={linkOptions[11].value}
            type="text"
            style = {customizedStyle}
          />
          <button style={customizedButton}> X </button>
        </div>

        <p className="subtitle">
        Please enter a contact email. This field is required. <span style={{ color: '#FF0000' }}>*</span>
        </p>

        {inputList.map((item, i) => {
          return (
            <div key={i} className="formElement">
              <p>
              <Dropdown
                options={linkOptions}
                multi={false}
                name="linkType"
                value="LinkedIn"
                placeholder={item.linkType}
                set={setGithub}
              />
              </p>
              <input
                className="userInput"
                // value={github|| ''}
                // onChange={(e) => {setGithub(e.target.value)}}
                // placeholder="{linkItem.link} "
                placeholder={item.link}
                name="link"
                onChange={(e) => handleChange(e, i)}
                style = {customizedStyle}
              />
              <button onClick={() => handleRemoveInput(i)} style={customizedButton}> X </button>
            </div>
          )
        })}

        {/* <pre>
          {JSON.stringify(inputList, null, 3)}
        </pre> */}
        <button id="add-link-button" onClick={handleAddInput} style = {addLinkButton}> + Add link </button>
      </div>
      <button id="save-button" onClick={submit} > Save </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile.profile,
});

export default connect(mapStateToProps, { updateProfile })(ContactInfo);
