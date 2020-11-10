import React from 'react';

import './AboutPage.css'
import PolaroidComponent from './PolaroidComponent.js'

import sproulbear from './assets/logo.png';

const AboutPage = () => {
  return (
    <div className="about">
      <div className="content">
        <div className="imageContainer">
          <img
            className="logo-image"
            src={sproulbear}
            alt="a cute bear with two flyers, S and C, for sproul.club"
          />
        </div>
        <div className="text">
          <h1>Our Mission</h1>
          <p>
            As students ourselves, our team wanted to create a way for students, especially first-years and transfers to navigate through and transition into the student life at Cal. Our team decided to create sproul.club, an interactive platform where students can search for clubs and organizations relevant to their interests!
          </p>
          <h1>History</h1>
          <p>
          Founded in July 2020, sproul.club is a website that helps Berkeley students easily filter and navigate through clubs at Cal given the diversity and volume of student organizations on campus. The team at sproul.club envisioned a centralized platform that helps incoming students quickly settle into college, find their niche, and discover who they truly are! With a group of 2 project managers, 6 frontend engineers, 1 backend engineer, and 1 visual designer, our team launched the sproul.club beta on August 28th, 2020.
          </p>
          <p>
          Since then, the team has expanded to a total of 20 team members and are working diligently towards releasing the official sproul.club platform for the UC Berkeley student community at the beginning Spring 2021 semester!
          </p>
          <h1>The Team</h1>
          <h2>Product Design</h2>
          <PolaroidComponent name="Izzie Lau" position="Engineer"/>

          <h2>Frontend Development</h2>
          <h2>Backend Development</h2>
          <h2>Business & Design</h2>

        </div>
      </div>
    </div>
  );
};

export default AboutPage;
