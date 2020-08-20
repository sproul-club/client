import React, { useState } from 'react';
import Dropdown from './AdminDropdown.js';
import { connect } from 'react-redux';
import ImageUploader from '../../react-images-upload';
import { updateProfile } from '../../actions/profile';

const Profile = ({ profile, updateProfile }) => {
  var tagOptions = [
    { label: 'Advocacy', value: 0 },
    { label: 'Business', value: 1 },
    { label: 'CalGreek', value: 2 },
    { label: 'Community Service', value: 3 },
    { label: 'Computer Science', value: 4 },
    { label: 'Consulting', value: 5 },
    { label: 'Cultural', value: 6 },
    { label: 'Design', value: 7 },
    { label: 'Engineering', value: 8 },
    { label: 'Environmental', value: 9 },
    { label: 'Health', value: 10 },
    { label: 'Media', value: 11 },
    { label: 'Performing Arts', value: 12 },
    { label: 'Political', value: 13 },
    { label: 'Pre-professional', value: 14 },
    { label: 'Religious & Spiritual', value: 15 },
    { label: 'Research', value: 16 },
    { label: 'Sciences', value: 17 },
    { label: 'Social', value: 18 },
    { label: 'Social Good', value: 19 },
    { label: 'Sports & Rec.', value: 20 },
    { label: 'Technology', value: 21 },
  ];

  var appOptions = [
    { value: 1, label: 'Application required' },
    { value: 0, label: 'No application required' },
  ];

  var recruitOptions = [
    { value: 1, label: 'Accepting members' },
    { value: 0, label: 'Not accepting members' },
  ];

  const [orgName, setOrgName] = useState(profile.name);
  const [orgEmail, setOrgEmail] = useState(profile.owner);
  const [descr, setDescr] = useState("hello");
  const [descrChars, setChars] = useState(500 - descr.length);
  const [tags, setTags] = useState(profile.tags.map((tag) => tagOptions[tag]));
  const [appReq, setAppReq] = useState(true);
  const [recruiting, setRecruit] = useState(false);

  const submit = () => {
    const newProfile = {
      ...profile,
      name: orgName,
      tags: tags.map((tags) => tags.value),
      about_us: descr,
      app_required: appReq,
      new_members: recruiting,
    };
    updateProfile(newProfile);
  };

  const descrChange = (e) => {
    setDescr(e.target.value);
    setChars(500 - e.target.value.length);
  };

  return (
    <div>
      <h3>Profile</h3>
      <div className="admin-text">
        Add an organization logo, profile banner, edit your tags, membership
        status, application requirements, and organization description.
      </div>
      <div className="formGroup">
        <div className="formElement">
          <p>Name of Organization</p>
          <input
            className="userInput"
            type="text"
            value={orgName}
            onChange={(e) => setOrgName(e.target.value)}
          />
        </div>
        <div className="formElement">
          <p>Account Email Address</p>
          <input
            className="userInput"
            type="text"
            disabled="disabled"
            value={orgEmail}
            onChange={(e) => setOrgEmail(e.target.value)}
          />
        </div>
        <p className="subtitle">
          This setting cannot be changed. Please contact{' '}
          <span style={{ color: '#54a0f1' }}>sproul.club@gmail.com</span> for
          further assistance.
        </p>
        <div className="formElement">
          <p>Tags</p>
          <Dropdown
            options={tagOptions}
            multi={true}
            search={false}
            defaultValue={profile.tags.map((tag) => tagOptions[tag])}
            placeholder="Add up to 3 tags"
            set={setTags}
          />
        </div>
        <div className="formElement">
          <p>Application Requirement</p>
          <Dropdown
            options={appOptions}
            multi={false}
            search={false}
            defaultValue={appOptions[profile.appRequired === true ? 0 : 1]}
            placeholder="Select application requirement"
            set={setAppReq}
          />
        </div>
        <div className="formElement">
          <p>Membership Status</p>
          <Dropdown
            options={recruitOptions}
            multi={false}
            search={false}
            defaultValue={recruitOptions[profile.newMembers === true ? 0 : 1]}
            placeholder="Select recruitment status"
            set={setRecruit}
          />
        </div>
        <div className="formElement">
          <p>Logo</p>
          <ImageUploader
            label="1:1 ratio - square image"
            buttonStyles={{
              background: '#54a0f1',
            }}
            fileContainerStyle={{
              width: '300px',
              float: 'left',
            }}
            labelStyles={{
              width: '250px',
              marginRight: 0,
              textAlign: 'center',
            }}
            withIcon={true}
            singleImage={true}
            withPreview={true}
            buttonText="Choose image"
            onChange={(e) => console.log(e)}
            imgExtension={['.jpg', '.gif', '.png', '.gif']}
            maxFileSize={5242880}
          />
        </div>
        <div className="formElement">
          <p>Banner</p>
          <ImageUploader
            label="16:9 ratio - e.g. Facebook cover image"
            buttonStyles={{
              background: '#54a0f1',
            }}
            fileContainerStyle={{
              width: '300px',
              float: 'left',
            }}
            labelStyles={{
              width: '250px',
              marginRight: 0,
              textAlign: 'center',
            }}
            withIcon={true}
            singleImage={true}
            withPreview={true}
            buttonText="Choose image"
            onChange={(e) => console.log(e)}
            imgExtension={['.jpg', '.gif', '.png', '.gif']}
            maxFileSize={5242880}
          />
        </div>
        <div className="formElement">
          <p>Description</p>
          <textarea
            className="descriptionInput"
            placeholder="Enter a short description about your organization."
            type="text"
            maxLength={500}
            value={descr}
            onChange={descrChange}
          />
        </div>
        <p className="subtitle">{descrChars} characters remaining</p>
      </div>
      <button className="saveButton" onClick={submit}>
        Save changes
      </button>
    </div>
  );
};

export default connect(null, { updateProfile })(Profile);
