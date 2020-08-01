import React from 'react';
import { Link } from 'react-router-dom';
import './landing.css';
import sproul from './assets/sproul.svg';
import ball1 from './assets/ball1.svg';
import ball2 from './assets/ball2.svg';
import ball3 from './assets/ball3.svg';
import ball4 from './assets/ball4.svg';
import screen1 from './assets/screen1.svg';
import screen2 from './assets/screen2.svg';
import screen3 from './assets/screen3.svg';
import blob1 from './assets/blob1.svg';
import blob2 from './assets/blob2.svg';
import blob3 from './assets/blob3.svg';

const Landing = () => {
  return (
    <div className="landing">
      <img src={blob1} className="blob1" alt="sproul" />
      <img src={blob2} className="blob2" alt="sproul" />
      <img src={blob3} className="blob3" alt="sproul" />
      <div className="header">
        <Link to="/" className="logo">
          sproul.club
        </Link>
        <div className="header-right">
          <Link to="/catalog">Catalog</Link>
          <Link to="/signin">Club sign in</Link>
          <Link to="/signup" className="active">
            Add a club
          </Link>
        </div>
      </div>
      <div className="content">
        <div className="text">
          <h3>Find your community at Berkeley - now virtually!</h3>
          <p>
            sproul.club simplifies and improves the experience of discovering
            student organizations and clubs on campus - built by students, for
            students.
          </p>
          <a href="/">Discover clubs</a>
        </div>
        <div className="imageContainer">
          <img src={sproul} className="sproul" alt="sproul" />
          <img src={ball1} className="ball1" alt="sproul" />
          <img src={ball2} className="ball2" alt="sproul" />
          <img src={ball3} className="ball3" alt="sproul" />
          <img src={ball4} className="ball4" alt="sproul" />
          <img src={screen1} className="screen1" alt="sproul" />
          <img src={screen2} className="screen2" alt="sproul" />
          <img src={screen3} className="screen3" alt="sproul" />
        </div>
      </div>
      <div className="moreContent">
        <div className="heading">
          <h2>Planned Features</h2>
        </div>
        <div className="featureWrapper">
          <div className="feature">
            <h2>Search</h2>
            <p>clubs by tags, application requirement, and more!</p>
          </div>
          <div className="feature">
            <h2>View</h2>
            <p>club descriptions, recruitment timelines, and more!</p>
          </div>
          <div className="feature">
            <h2>Add</h2>
            <p>and edit your own registered student organization!</p>
          </div>
        </div>
        <div className="interestForm">
          <h2>Fill out our club interest form!</h2>
          <a href="/">Interest form</a>
        </div>
      </div>
    </div>
  );
};

export { Landing };
