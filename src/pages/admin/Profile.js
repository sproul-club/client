import React from 'react';
import Dropdown from './AdminDropdown.js';
import ImageUploader from 'react-images-upload';

const Profile = () => {
  var tagOptions = [
    { label: 'ASUC', value: 0 },
    { label: 'Business', value: 1 },
    { label: 'CalGreek', value: 2 },
    { label: 'Community Service', value: 3 },
    { label: 'Computer Science', value: 4 },
    { label: 'Consulting', value: 5 },
    { label: 'Cultural', value: 6 },
    { label: 'Design', value: 7 },
    { label: 'Engineering', value: 8 },
    { label: 'Environmental', value: 9 },
    { label: 'Health & Wellness', value: 10 },
    { label: 'Media & Publication', value: 11 },
    { label: 'Religious & Spiritual', value: 12 },
    { label: 'Performing Arts', value: 13 },
    { label: 'Political', value: 14 },
    { label: 'Sciences', value: 15 },
    { label: 'Sports & Recreation', value: 16 },
    { label: 'Social Good', value: 17 },
    { label: 'Technology', value: 18 },
  ];

  var appOptions = [
    { value: 1, label: 'Application required' },
    { value: 0, label: 'No application required' },
  ];

  var recruitOptions = [
    { value: 1, label: 'Accepting members' },
    { value: 0, label: 'Not accepting members' },
  ];

  return (
    <div>
      <h3>Profile</h3>
      <div className="admin-text">
        Add an organization logo and profile banner, and edit your tags, membership
        status, application requirements, and club's description.
      </div>
      <div className="formGroup">
        <div className="formElement">
          <p>Name of Organization</p>
          <input
              className="userInput"
              type="text"
          />
        </div>
        <div className="formElement">
          <p>Account Email Address</p>
          <input
              className="userInput"
              type="text"
          />
        </div>
        <div className="formElement">
          <p>Tags</p>
          <Dropdown
            options={tagOptions}
            multi={true}
            search={false}
            placeholder="Add up to 3 tags"
          />
        </div>
        <div className="formElement">
          <p>Application Requirement</p>
          <Dropdown
            options={appOptions}
            multi={false}
            search={false}
            placeholder="Select application requirement"
          />
        </div>
        <div className="formElement">
          <p>Membership Status</p>
          <Dropdown
            options={recruitOptions}
            multi={false}
            search={false}
            placeholder="Select recruitment status"
          />
        </div>
        <div className="formElement">
          <p>Logo</p>
          <ImageUploader
                label="1:1 ratio - square image"
                buttonStyles={{
                  'background': '#54a0f1',
                }}
                fileContainerStyle={{
                  'width': '300px',
                  'float': 'left',
                }}
                labelStyles={{
                  'width': '250px',
                  'marginRight': 0,
                  'textAlign': 'center',
                }}
                withIcon={true}
                singleImage={true}
                withPreview={true}
                buttonText='Choose image'
                onChange={e => console.log(e)}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
        </div>
        <div className="formElement">
          <p>Banner</p>
          <ImageUploader
                label="16:9 ratio - e.g. Facebook cover image"
                buttonStyles={{
                  'background': '#54a0f1',
                }}
                fileContainerStyle={{
                  'width': '300px',
                  'float': 'left',
                }}
                labelStyles={{
                  'width': '250px',
                  'marginRight': 0,
                  'textAlign': 'center',
                }}
                withIcon={true}
                singleImage={true}
                withPreview={true}
                buttonText='Choose image'
                onChange={e => console.log(e)}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
        </div>
        <div className="formElementDescription">
          <p>Description</p>
          <textarea
              className="descriptionInput"
              placeholder="Enter a short description about your organization! (1000 char. max)"
              type="text"
              maxLength={1000}
          />
        </div>
      </div>
      <button className="saveButton">Save changes</button>
    </div>
  );
};

export default Profile;
