import styled from 'styled-components'


export const IndexStyles = styled.div`
.fileUploader {
  width: 300px;
}

.fileContainer {
  background: #fff;
  box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.05);
  position: relative;
  border-radius: 10px;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 10px auto;
  transition: all 0.3s ease-in;
}

.fileContainer input {
  opacity: 0;
  position: absolute;
  z-index: -1;
}

.fileContainer p {
  font-size: 12px;
  margin: 8px 0 4px;
}

.fileContainer .errorsContainer {
  max-width: 300px;
  font-size: 12px;
  color: red;
  text-align: left;
}

.fileContainer .chooseFileButton {
  padding: 6px 23px;
  background: #3f4257;
  border-radius: 30px;
  color: white;
  font-weight: 300;
  font-size: 14px;
  margin: 10px 0;
  transition: all 0.2s ease-in;
  cursor: pointer;
  outline: none;
  border: none;
}

.fileContainer .chooseFileButton:hover {
  background: #545972;
}

.fileContainer .uploadFilesButton {
  padding: 5px 43px;
  background: transparent;
  border-radius: 30px;
  color: #3f4257;
  font-weight: 300;
  font-size: 14px;
  margin: 10px 0;
  transition: all 0.2s ease-in;
  cursor: pointer;
  outline: none;
  border: 1px solid #3f4257;
}

.fileContainer .uploadFilesButton:hover {
  background: #3f4257;
  color: #fff;
}

.fileContainer .uploadIcon {
  width: 50px;
  height: 50px;
}

.fileContainer .uploadPicturesWrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}

.fileContainer .uploadPictureContainer {
  width: 90%;
  margin: 5%;
  padding: 10px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  position: relative;
}

.fileContainer .uploadPictureContainer img.uploadPicture {
  width: 100%;
}

.fileContainer .deleteImage {
  position: absolute;
  top: -9px;
  right: -9px;
  color: #fff;
  background: #54a0f1;
  border-radius: 50%;
  text-align: center;
  cursor: pointer;
  font-size: 10px;
  font-weight: bold;
  line-height: 20px;
  width: 20px;
  height: 20px;
}

.flipMove {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
}

a {
  text-decoration: none;
}
`