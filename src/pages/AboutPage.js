import React from 'react';

import './AboutPage.css'
import PolaroidComponent from './PolaroidComponent.js'
import Footer from '../layout/Footer';

import tina from './assets/profile-photos/tina.JPG'
import grace from './assets/profile-photos/grace.JPG'
import james from './assets/profile-photos/james.jpg'
import yuki from './assets/profile-photos/yuki.jpg'
import cynthia from './assets/profile-photos/cynthia.JPG'

import allen from './assets/profile-photos/allen.jpg'
import amy from './assets/profile-photos/amy.jpg'
import izzie from './assets/profile-photos/izzie.jpeg'
import karen from './assets/profile-photos/karen.jpg'
import satiya from './assets/profile-photos/satiya.png'
import nico from './assets/profile-photos/nico.jpg'
import christine from './assets/profile-photos/christine.JPG'
import matt from './assets/profile-photos/matt.png'
import juliet from './assets/profile-photos/juliet.png'

import tejas from './assets/profile-photos/tejas.png'
import joyce from './assets/profile-photos/joyce.jpg'
import franco from './assets/profile-photos/franco.jpg'

import kevin from './assets/profile-photos/kevin.jpg'
import vicky from './assets/profile-photos/vicky.jpg'
import jasmine from './assets/profile-photos/jasmine.jpg'

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
          <div className="carousel">
            <PolaroidComponent name="Tina Teng" position="Design Lead" linkedin="https://www.linkedin.com/in/tinateng/" image=<img className="image" src={tina} />/>
            <PolaroidComponent name="Grace Ng" position="Designer" linkedin="https://www.linkedin.com/in/graceng1224/" image=<img className="image" src={grace} />/>
            <PolaroidComponent name="James Hua" position="Designer" linkedin="https://www.linkedin.com/in/jamesh411/" image=<img className="image" src={james} />/>
            <PolaroidComponent name="Yuki Dian" position="Designer" image=<img className="image" src={yuki} />/>
            <PolaroidComponent name="Cynthia Shi" position="Designer" linkedin="https://www.linkedin.com/in/cynthia-shi/" image=<img className="image" src={cynthia} />/>
          </div>
          <h2>Frontend Development</h2>
          <div className="carousel">
            <PolaroidComponent name="Allen Li" position="Frontend Lead" linkedin="https://www.linkedin.com/in/allenliuli/" image=<img className="image" src={allen} />/>
            <PolaroidComponent name="Amy Tong" position="Frontend Lead" linkedin="https://www.linkedin.com/in/amy-tong/" image=<img className="image" src={amy} />/>
            <PolaroidComponent name="Izzie Lau" position="Frontend Engineer" linkedin="https://www.linkedin.com/in/izzielau/" image=<img className="image" src={izzie} />/>
            <PolaroidComponent name="Karen Tan" position="Frontend Engineer" linkedin="https://www.linkedin.com/in/karen-t/" image=<img className="image" src={karen} />/>
            <PolaroidComponent name="Satiya Kem" position="Frontend Engineer" linkedin="https://www.linkedin.com/in/satiya-kem-927189183/" image=<img className="image" src={satiya} />/>
          </div>
          <div className="carousel">
            <PolaroidComponent name="Nico Galin" position="Frontend Engineer" linkedin="https://www.linkedin.com/in/nicholas-galin/" image=<img className="image" src={nico} />/>
            <PolaroidComponent name="Christine Luo" position="Frontend Engineer" linkedin="https://www.linkedin.com/in/christinealuo/" image=<img className="image" src={christine} />/>
            <PolaroidComponent name="Matt Clagett" position="Frontend Engineer" linkedin="https://www.linkedin.com/in/matthewclagett/" image=<img className="image" src={matt} />/>
            <PolaroidComponent name="Juliet Kim" position="Frontend Engineer" linkedin="https://www.linkedin.com/in/suhyangkim/" image=<img className="image" src={juliet} />/>
          </div>
          <h2>Backend Development</h2>
          <div className="carousel">
            <PolaroidComponent name="Tejas Shah" position="Backend Lead" linkedin="https://www.linkedin.com/in/t-shah/" image=<img className="image" src={tejas} />/>
            <PolaroidComponent name="Joyce Li" position="Backend Engineer" linkedin="https://www.linkedin.com/in/joyceml/" image=<img className="image" src={joyce} />/>
            <PolaroidComponent name="Franco Achacoso" position="Backend Engineer" linkedin="https://www.linkedin.com/in/francoachacoso/" image=<img className="image" src={franco} />/>
          </div>
          <h2>Business & Design</h2>
          <div className="carousel">
            <PolaroidComponent name="Kevin Feng" position="Project Manager" linkedin="https://www.linkedin.com/in/kvfeng/" image=<img className="image" src={kevin} />/>
            <PolaroidComponent name="Vicky Liu" position="Project Manager" linkedin="https://www.linkedin.com/in/yqvickyliu/" image=<img className="image" src={vicky} />/>
            <PolaroidComponent name="Jasmine Syu" position="Visual Designer" linkedin="https://www.linkedin.com/in/jasminesyu/" image=<img className="image" src={jasmine} />/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
