import React, { useState } from 'react';
import Dropdown from './AdminDropdown.js';
import { connect } from 'react-redux';
import ImageUploader from '../../react-images-upload';
import { updateProfile, uploadLogo, uploadBanner } from '../../actions/profile';
import { NotificationManager } from 'react-notifications';

const Banner = ({
  profile,
  updateProfile,
  uploadLogo,
  uploadBanner,
  images,
}) => {
  const [bannerImage, setBannerImage] = useState(null);

  async function uploadBannerPic(bannerUploads) {
    if (bannerUploads && bannerUploads.length > 0) {
      try {
        NotificationManager.info('Uploading banner...', '', 1500);
        await uploadBanner(bannerUploads[0]);
        NotificationManager.success('Banner uploaded successfully!', '', 1500);
      } catch (err) {
        if (err.response.status === 503) {
          NotificationManager.error(
            'Something went wrong on our end. Please try again later',
            'Banner image upload unsuccessful',
            5000
          );
        } else {
          NotificationManager.error(
            'For best results, please upload a logo that has an aspect ratio of 8:3',
            'Banner image upload unsuccessful',
            5000
          );
        }
      }
    }
  }

  const submit = async () => {
    // try {
    //   await updateProfile(newProfile);
    //   NotificationManager.success('Profile changes saved successfully!', '', 1500);
    // } catch (err) {
    //   NotificationManager.error('Profile changes unsuccessful!', '', 1500);
    // }

    try {
      await Promise.all([
        uploadBannerPic(bannerImage)
      ]);
        NotificationManager.success('Banner changes saved successfully!', '', 1500);
        
      } catch (err) {
        NotificationManager.error('Banner changes unsuccessful!', '', 1500);
      }

    // await Promise.all([
    //   uploadBannerPic(bannerImage)
    // ]);
  };

  return (
    <div>
      <h3>Banner</h3>
      <p>Upload your organization's banner</p>
      <ImageUploader
        label="8:3 ratio - e.g. Facebook cover image"
        buttonStyles={{
          background: '#54a0f1',
        }}
        fileContainerStyle={{
          width: '300px',
          // float: 'left',
          marginBottom: '40px',
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
        onChange={(e) => setBannerImage(e)}
        imgExtension={['.jpg', '.gif', '.png', '.gif']}
        maxFileSize={16777216}
      />
      <p className="subtitle">
          <span style={{ color: '#FF0000' }}>*</span> Please make sure your
          banner is at least 1640 x 624 pixels.{' '}
          <a
            href="https://www.photoresizer.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span style={{ color: '#54a0f1' }}>Click here</span>
          </a>{' '}
          for a resource that helps you resize your images.
      </p>
      <button id="save-button" onClick={submit}> Save </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile.profile,
  images: state.profile.images,
});

export default connect(mapStateToProps, {
  updateProfile,
  uploadLogo,
  uploadBanner,
})(Banner);
