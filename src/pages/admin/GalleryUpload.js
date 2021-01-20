import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ImageUploader from '../../react-images-upload';
import { updateProfile, uploadLogo, uploadBanner } from '../../actions/profile';
import { NotificationManager } from 'react-notifications';
import { API, TOKENS } from '../../utils/backendClient';

const GalleryUpload = ({
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
          NotificationManager.success('Banner changes saved successfully! Refresh to see changes', '', 5000);
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
        if (!bannerImage) {
            return;
        }

        let data = new FormData();
        data.append('gallery', bannerImage[0]);
        data.append('caption', '');

        console.log(bannerImage);

        const config = {
            headers: {
              'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
            },
          };

        try {
            const res = await API.post('/api/admin/gallery-pics', data, config);
            // dispatch({ type: UPLOAD_IMAGES, payload: res.data });
        
            // await dispatch(loadProfile());
        } catch (err) {
            console.log(err.response.data);
            throw err;
        }
    // //   try {
    //     await Promise.all([
    //       uploadBannerPic(bannerImage)
    //     ]);
    //     // await updateProfile(newProfile);
    //       // NotificationManager.success('Banner changes saved successfully! Refresh to see changes', '', 5000);
    //     } catch (err) {
    //       NotificationManager.error('Banner changes unsuccessful!', '', 5000);
    //     }
    };
  
    return (
      <div>
        <h3>Gallery</h3>
        <p>Upload photos to your club's gallery!</p>
        <div className="bannerUpload">
          <ImageUploader
            label=""
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
            <span style={{ color: '#FF0000' }}>*</span> This feature is undergoing beta testing.
            The current image limit is 1 image. Please bear with us as we roll out updates!
        </p>
        <button id="save-button" onClick={submit}> Save </button>
        <button id="cancel-button" onClick={() => close()}> Cancel </button>
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
  })(GalleryUpload);
  