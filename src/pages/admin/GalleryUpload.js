import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ImageUploader from '../../react-images-upload';
import { updateProfile, uploadLogo, uploadBanner, getGalleryPhotos, addGalleryPhoto, updateGalleryPhoto, deleteGalleryPhoto } from '../../actions/profile';
import { NotificationManager } from 'react-notifications';
import store from '../../store';
import { API, TOKENS } from '../../utils/backendClient';
import './GalleryUpload.css';
import Delete from '@material-ui/icons/DeleteRounded';
import Add from '@material-ui/icons/AddRounded';
import { CodeOutlined } from '@material-ui/icons';

const GalleryUpload = ({
    addGalleryPhoto,
    updateGalleryPhoto,
    deleteGalleryPhoto,
    close,
    profile
  }) => {
    const [gallery, setGallery] = useState(profile.gallery_media ? profile.gallery_media.map(el => ({...el, changed: false})) : []);
    useEffect(() => {
      // Outline leftover from ClubPage
      store.dispatch(getGalleryPhotos());
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

    const updateImage = async (newImg, ind) => {
      let oldGallery = [...gallery];
      let newItem = oldGallery[ind];
      newItem.url = newImg;
      newItem.changed = true;
      oldGallery[ind] = newItem;
      setGallery(oldGallery);
    }

    const updateCaption = async (newVal, ind) => {
      let oldGallery = [...gallery];
      let newItem = oldGallery[ind];
      newItem.caption = newVal;
      newItem.changed = true;
      oldGallery[ind] = newItem;
      setGallery(oldGallery);
    }

    const refreshGallery = async (ind=-1) => {
      await store.dispatch(getGalleryPhotos())
        .then(res => {
          let updatedGallery = [...res];
          gallery.forEach((el, sInd) => {
            if (el.temp && sInd != ind) {
              updatedGallery.insert(sInd, el);
            }
          });
          setGallery(updatedGallery);
        })
    }

    const submitChanges = async (ind) => {
      const item = gallery[ind];
      if (!item.url) return;
      try {
        if (item.temp) {
          NotificationManager.info('Uploading Changes...', '', 1500);
          await addGalleryPhoto(item.url[0], item.caption);
          NotificationManager.success('Changes saved successfully!', '', 5000);
        } else {
            await updateGalleryPhoto(item.id, item.caption);
        }
        await refreshGallery(ind);
      } catch (e) {
        console.log(e);
        if (e.response.status === 503) {
          NotificationManager.error(
            'Something went wrong on our end. Please try again later',
            'Banner image upload unsuccessful',
            5000
          );
        } else {
          NotificationManager.error(
            'For best results, please upload a logo that has an aspect ratio of 10:3',
            'Changes upload unsuccessful',
            5000
          );
        }
      }
    }

    const cancelChanges = async (ind) => {
      let updatedGallery = [...gallery];
      if (updatedGallery[ind].temp) {
        updatedGallery.splice(ind, 1);
      } else {
        updatedGallery[ind] = {...profile.gallery_media[ind], changed: false};
      }
      setGallery(updatedGallery);
    }

    const addPhoto = async () => {
      let updatedGallery = [...gallery];
      updatedGallery.push({
        url: null,
        caption: "",
        temp: true,
        changed: true,
      });
      setGallery(updatedGallery);
    }

    const deletePhoto = async (ind) => {
      let updatedGallery = [...gallery];
      if (updatedGallery[ind].temp) {
        updatedGallery.splice(ind, 1);
        setGallery(updatedGallery);
      } else {
        NotificationManager.info('Deleting Gallery image...', '', 1500);
        try {
          await deleteGalleryPhoto(updatedGallery[ind].id);
          await refreshGallery(ind);
        } catch(e) {
          NotificationManager.error(
            'Something went wrong on our end. Please try again later',
            'Deletion unsuccessful',
            5000
          );
          console.log(e);
        }
        NotificationManager.success('Gallery image deleted successfully!', '', 5000);
      }
    }

    return (
      <div className="gallery-upload-wrapper">
        <h3>Gallery</h3>
        <p>Upload photos to your club's gallery!</p>
        <div className="image-list">
          {gallery && gallery.map((el, ind) => (
            <div className="image-card">
              <div>
                <div className='image-card-header'>
                  <h4>Photo {ind + 1}</h4>
                  <button className='delete-btn' onClick={() => deletePhoto(ind)}><Delete className="deleteImg" /></button>
                </div>
                {el.url ?
                  <div className="img-preview-container">
                    <div className="img-preview-overlay"></div>
                    <img
                      className="img-preview"
                      src={typeof el.url === 'object' ? URL.createObjectURL(el.url[0]) : el.url}
                      alt=""
                    />
                    <div className='img-preview-overlay'></div>
                  </div>
                :
                  <ImageUploader
                    withIcon={false}
                    label=""
                    buttonStyles={{
                      background: '#54a0f1',
                    }}
                    fileContainerStyle={{
                      boxShadow: 'none',
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
                    onChange={(e) => updateImage(e, ind)}
                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                    maxFileSize={16777216}
                  />
                }
                <p className='subtext'>Upload image max 2MB. Image ratio will be cropped to 16 : 9</p>
              </div>
              <div className='bottom-section'>
                <b>Caption</b>
                <input className="caption-textbox" maxLength='50' value={el.caption} onChange={(e) => updateCaption(e.target.value, ind)} placeholder="Caption for photo"></input>
                <p className='subtext'>50 character limit</p>
                {el.changed &&
                  <div className="gallery-buttons">
                    <button id="save-button" onClick={() => submitChanges(ind)}> Save </button>
                    <button id="cancel-button" onClick={() => cancelChanges(ind)}> Cancel </button>
                  </div>
                }
              </div>
            </div>
          ))}
          <button className="image-card image-card-empty" onClick={addPhoto}>
              <Add style={{color: "#C5C5C5", fontSize: 40}}/>
              <a className='hiddenText'>Click here to add a photo</a>
          </button>
        </div>
        <p>
            <span style={{ color: '#FF0000', borderBottom: '10px' }}>*</span> This feature is undergoing beta testing.
        </p>
      </div>
    );
  };
  
  const mapStateToProps = (state, ownProps) => ({
    profile: ownProps.profile,
  });
  
  export default connect(mapStateToProps, {
    updateProfile,
    uploadLogo,
    uploadBanner,
    addGalleryPhoto,
    updateGalleryPhoto,
    deleteGalleryPhoto,
  })(GalleryUpload);
  