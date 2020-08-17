import React from 'react';

const ContactInfo = ({ profile }) => {
  return (
    <div>
      <h3>Contact Information</h3>
      <div className="admin-text">
        Link your organization’s website, email and other social media
        platforms!
      </div>
      <div className="formGroup">
      <div className="formElement">
          <p>Email Address * <div> </div></p>
          <input
              className="userInput"
              placeholder="+  add a contact email"
              type="text"
          />
        </div>
        <div className="formElement">
          <p>Website</p>
          <input
              className="userInput"
              placeholder="+  add a link"
              type="text"
          />
        </div>
        <div className="formElement">
          <p>Linkedin</p>
          <input
              className="userInput"
              placeholder="+  add a link"
              type="text"
          />
        </div>
        <div className="formElement">
          <p>Facebook</p>
          <input
              className="userInput"
              placeholder="+  add a link"
              type="text"
          />
        </div>
        <div className="formElement">
          <p>Instagram</p>
          <input
              className="userInput"
              placeholder="+  add a link"
              type="text"
          />
        </div>
        <div className="formElement">
          <p>Twitter</p>
          <input
              className="userInput"
              placeholder="+  add a link"
              type="text"
          />
        </div>
        <div className="formElement">
          <p>Github</p>
          <input
              className="userInput"
              placeholder="+  add a link"
              type="text"
          />
        </div>
        <div className="formElement">
          <p>Behance</p>
          <input
              className="userInput"
              placeholder="+  add a link"
              type="text"
          />
        </div>
        <div className="formElement">
          <p>Medium</p>
          <input
              className="userInput"
              placeholder="+  add a link"
              type="text"
          />
        </div>
      </div>
      <button className="saveButton">Save changes</button>
    </div>
  );
};

export default ContactInfo;
