import React, { useState } from 'react';
import Dropdown from './AdminDropdown.js';
import { connect } from 'react-redux';
import ImageUploader from '../../react-images-upload';
import { updateProfile, uploadLogo } from '../../actions/profile';
import { NotificationManager } from 'react-notifications';



const Profile = ({
  profile,
  updateProfile,
  uploadLogo,
  images,
  tagOptions,
  sizeTagOptions,
  close,
}) => {
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
  const [tags, setTags] = useState(profile.tags.map((tag) => tagOptions[tag]));
  const [appReq, setAppReq] = useState(
    appOptions[profile.app_required === true ? 0 : 1]
  );
  const [recruiting, setRecruit] = useState(
    recruitOptions[profile.new_members === true ? 0 : 1]
  );
  const [size, setSize] = useState(profile.num_users);
  const [logoImage, setLogoImage] = useState(null);
  const [recrStartDate, setRecrStartDate] = useState(
    (profile.recruiting_start == null || profile.recruiting_start == '1970-01-01T00:00:00' ) ? null : profile.recruiting_start.substring(0, 10)); 
  const [recrEndDate, setRecrEndDate] = useState(
    (profile.recruiting_end == null || profile.recruiting_end == '1970-01-01T00:00:00' ) ? null : profile.recruiting_end.substring(0, 10)); 
  const [appStartDate, setAppStartDate] = useState(
    (profile.apply_deadline_start == null || profile.apply_deadline_start == '1970-01-01T00:00:00' ) ? null : profile.apply_deadline_start.substring(0, 10)); 
  const [appEndDate, setAppEndDate] = useState(
    (profile.apply_deadline_end == null || profile.apply_deadline_end == '1970-01-01T00:00:00' ) ? null : profile.apply_deadline_end.substring(0, 10)); 

  async function uploadLogoPic(logoUploads) {
    if (logoUploads && logoUploads.length > 0) {
      try {
        NotificationManager.info('Uploading logo...', '', 1500);
        await uploadLogo(logoUploads[0]);
        NotificationManager.success('Logo uploaded successfully!', '', 1500);
      } catch (err) {
        if (err.response.status === 503) {
          NotificationManager.error(
            'Something went wrong on our end. Please try again later',
            'Logo image upload unsuccessful',
            5000
          );
        } else {
          NotificationManager.error(
            'For best results, please upload a logo that has an aspect ratio of 1:1',
            'Logo image upload unsuccessful',
            5000
          );
        }
      }
    }
  }

  const submit = async () => {
    const newProfile = {
      name: orgName.trim(),
      owner: orgEmail,
      tags: tags.map((tags) => tags.value),
      app_required: !!appReq.value,
      new_members: !!recruiting.value,
      num_users: size.value,
      recruiting_start: recrStartDate ? recrStartDate : '1970-01-01T00:00:00Z',
      recruiting_end: recrEndDate ? recrEndDate : '1970-01-01T00:00:00Z',
      apply_deadline_start: appStartDate ? appStartDate : '1970-01-01T00:00:00Z',
      apply_deadline_end: appEndDate ? appEndDate : '1970-01-01T00:00:00Z',
    };

    try {
      await updateProfile(newProfile);
      await Promise.all([
        uploadLogoPic(logoImage)
      ]);
      NotificationManager.success('Profile changes saved successfully!', '', 1500);
      close();
    } catch (err) {
      NotificationManager.error('Profile changes unsuccessful!', '', 1500);
    }
  };

  const reqFieldsCheck = () => {
    if (tags === null) {
      NotificationManager.error(
        'Please have at least one tag',
        'Changes not saved',
        1500
      );
    } else {
      NotificationManager.error(
        'Please enter an organization name',
        'Changes not saved',
        1500
      );
    }
  };

  return (
    <div>
      <h3>Profile</h3>
      <div className="admin-text">
        Add an organization logo, edit your tags, membership
        status, recruitment period, or application requirements.
      </div>

      <div style={{display: 'flex', flexDirection: 'row'}} className="modal-wrapper">
      <div className="modal-left">
        <div className="formGroup">
          <div className="formElement">
            <p>Name of Organization</p>
            <input
              className="userInput"
              type="text"
              value={orgName}
              onChange={(e) => setOrgName(e.target.value)}
              maxLength={100}
            />
          </div>
          <div className="formElement">
            <p>Tags</p>
            <Dropdown
              options={tagOptions}
              multi={true}
              search={true}
              defaultValue={profile.tags.map((tag) => tagOptions[tag])}
              placeholder="Add up to 3 tags"
              set={setTags}
            />
          </div>
          <div className="formElement">
            <p>Club Size</p>
            <Dropdown
              options={sizeTagOptions}
              multi={false}
              search={false}
              defaultValue={sizeTagOptions[size]}
              placeholder="Select club size"
              set={setSize}
            />
          </div>
          <div className="formElement">
            <p>Application Requirement</p>
            <Dropdown
              options={appOptions}
              multi={false}
              search={false}
              defaultValue={appOptions[profile.app_required === true ? 0 : 1]}
              placeholder="Select application requirement"
              set={setAppReq}
            />
          </div>
          {appReq.value === 0 && 
            <div className="formElement">
            <p>Recruitment Period</p>
              <div className="input-time">
                <input
                  className="modal-input"
                  type="date"
                  onChange={(e) => setRecrStartDate(e.target.value)}
                  value={recrStartDate}
                  required
                  style={{backgroundColor: "white"}}
                />
                <span> to </span>
                <input
                  className="modal-input"
                  type="date"
                  onChange={(e) => setRecrEndDate(e.target.value)}
                  value={recrEndDate}
                  required
                  style={{backgroundColor: "white"}}
                />
              </div>
            </div>
          }
          
          {appReq.value === 1 && 
            <div className="formElement">
              <p>Application Open to Close</p>
              <div className="input-time">
                <input
                  className="modal-input"
                  type="date"
                  onChange={(e) => setAppStartDate(e.target.value)} 
                  value={appStartDate}
                  required
                  style={{backgroundColor: "white"}}
                />
                <span> to </span>
                <input
                  className="modal-input"
                  type="date"
                  onChange={(e) => setAppEndDate(e.target.value)} 
                  value={appEndDate} 
                  required
                  style={{backgroundColor: "white"}}
                />
                </div>
            </div>
          }
        </div>
      </div>

      <div className="modal-right">
          {/* logo upload */}
          
          <ImageUploader
            label="1:1 ratio - square image"
            buttonStyles={{
              background: '#54a0f1',
            }}
            fileContainerStyle={{
              width: '300px',
              // float: 'left',
              margin: '40px',
            }}
            labelStyles={{
              width: '250px',
              marginRight: 0,
              textAlign: 'center',
            }}
            withIcon={true}
            singleImage={true}
            withPreview={true}
            buttonText="Upload a logo"
            onChange={(e) => setLogoImage(e)}
            imgExtension={['.jpg', '.gif', '.png', '.gif']}
            maxFileSize={16777216}
          />
          <p className="subtitle">
            <span style={{ color: '#FF0000', marginLeft: '40px'}}>*</span> Please make sure your logo
            is at least 360 x 360 pixels.{' '}
            <br></br>
            <a
              href="https://www.photoresizer.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span style={{ color: '#54a0f1', marginLeft: '40px' }}>Click here</span>
            </a>{' '}
            for a resource that helps you resize your images.
          </p>
      </div>

      </div>
      <button id="save-button" onClick={submit}> Save </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile.profile,
  images: state.profile.images,
  tagOptions: state.profile.tagOptions,
  sizeTagOptions: state.profile.sizeTagOptions,
});

export default connect(mapStateToProps, {
  updateProfile,
  uploadLogo,
})(Profile);
