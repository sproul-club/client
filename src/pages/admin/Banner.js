import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ImageUploader from '../../components/react-images-upload';
import { updateProfile, uploadLogo, uploadBanner } from '../../redux/actions/profile';
import { NotificationManager } from 'react-notifications';

const Banner = ({
  uploadBanner,
  close,
}) => {
  const [bannerImage, setBannerImage] = useState(null);
  useEffect(() => {
    // Outline leftover from ClubPage
  }, []);
  async function uploadBannerPic(bannerUploads) {
    if (bannerUploads && bannerUploads.length > 0) {
      try {
        NotificationManager.info('Uploading banner...', '', 1500);
        await uploadBanner(bannerUploads[0]);
        NotificationManager.success('Banner changes saved successfully!', '', 5000);
        close();
      } catch (err) {
        if (err.response.status === 503) {
          NotificationManager.error(
            'Something went wrong on our end. Please try again later',
            'Banner image upload unsuccessful',
            5000
          );
        } else {
          NotificationManager.error(
            'For best results, please upload a logo that has an aspect ratio of 10:3',
            'Banner image upload unsuccessful',
            5000
          );
        }
      }
    }
  }

  const submit = async () => {
    // const newProfile = {
    //   ...profile,
    // };

    try {
      await Promise.all([
        uploadBannerPic(bannerImage)
      ]);
      // await updateProfile(newProfile);
        // NotificationManager.success('Banner changes saved successfully! Refresh to see changes', '', 5000);
      } catch (err) {
        NotificationManager.error('Banner changes unsuccessful!', '', 5000);
      }

    // await Promise.all([
    //   uploadBannerPic(bannerImage)
    // ]);
  };

  return (
    <div>
      <h3>Banner</h3>
      <p>Upload your organization's banner</p>
      <div className="bannerUpload">
        <ImageUploader
          label="10:3 ratio"
          buttonStyles={{
            background: '#54a0f1',
          }}
          fileContainerStyle={{
            width: '570px',
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
      </div>
      <p className="subtitle">
          <span style={{ color: '#FF0000' }}>*</span> Please make sure your
          banner is at least 1640 x 492 pixels.{' '}
          <a
            href="https://www.photoresizer.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span style={{ color: '#54a0f1' }}>Click here</span>
          </a>{' '}
          for a resource that helps you resize your images.
      </p>
      <button class="save-button button-blue-fill" onClick={submit}> Save </button>
      <button class="cancel-button button-red-outline" onClick={() => close()}> Cancel </button>
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
