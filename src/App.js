import React from 'react';
import sproul from './asset/sproul.png';
import ball1 from './asset/ball1.png';
import ball2 from './asset/ball2.png';
import ball3 from './asset/ball3.png';
import ball4 from './asset/ball4.png';
import screen1 from './asset/screen1.png';
import screen2 from './asset/screen2.png';
import screen3 from './asset/screen3.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <a href="default" class="logo">sproul.club</a>
        <div className="header-right">
          <a href="catalog">Catalog</a>
          <a href="login">Club sign in</a>
          <a className="active" href="add">Add a club</a>
        </div>
      </div>
      <div className="body">
        <p>Find your student</p>
        <p>community at Berkeley</p>
        <div className="description">
          <p>sproul.club simplifies and improves the experience</p>
          <p>of discovering student organizations and clubs</p>
          <p>on campus - built by students, for students</p>
        </div>
        <div className="explore">
          <a href="#catalog">Explore clubs</a>
        </div>
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
  );
}

export default App;
