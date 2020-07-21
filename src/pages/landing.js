import React from 'react';
import "./landing.css";
import sproul from './assets/sproul.svg';
import ball1 from './assets/ball1.svg';
import ball2 from './assets/ball2.svg';
import ball3 from './assets/ball3.svg';
import ball4 from './assets/ball4.svg';
import screen1 from './assets/screen1.svg';
import screen2 from './assets/screen2.svg';
import screen3 from './assets/screen3.svg';


const Landing = () => {
  return (
      <div className="landing">
        <div className="header">
          <a href="" class="logo">sproul.club</a>
          <div className="header-right">
            <a href="catalog">Catalog</a>
            <a href="login">Club sign in</a>
            <a className="active" href="signup">Add a club</a>
          </div>
        </div>
        <div className="content">
          <div className="text">
            <h3>Find your community at Berkeley - now virtually!</h3>
            <p>sproul.club simplifies and improves the experience of discovering student organizations and clubs on
            campus - built by students, for students.</p>
            <a href="catalog">Explore clubs</a>
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
      </div>
    );
};

export { Landing };
