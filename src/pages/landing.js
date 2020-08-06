import React from 'react';
import "./landing.css";
import sproul from './assets/sproul.png';
import ball1 from './assets/ball1.png';
import ball2 from './assets/ball2.png';
import ball3 from './assets/ball3.png';
import ball4 from './assets/ball4.png';
import screen1 from './assets/screen1.png';
import screen2 from './assets/screen2.png';
import screen3 from './assets/screen3.png';
import ClubPage from './ClubPage.js';

const data = {name: "EthiCAL Apparel", 
              desc: "We are a student-run social enterprise that provides affordable, high-quality screen printing and free design services on ethically-made clothing. We help create custom designs for organizations and sell our own clothing and sticker line through our online shop. Our profits are directed to a variety of social good initiatives, from Kiva microloans to disadvantaged entrepreneurs to partnerships with local organizations. Members develop their design skills, business knowledge, and social awareness.",
              tags: ["Business", "Design", "Environment and Sustainability"],
              reqApp: true,
              open: true,
              events: 
              [{name: "Infosession #1", time: "Tues, Jul 22, 6:30 - 7:30 PT"},
              {name: "Infosession #2", time: "Thurs, Jul 22, 8:00 - 9:30 PT"},
              {name: "General Meeting", time: "Tues, Jul 22, 4:30 - 6:30 PT"},
              {name: "Social Night", time: "Mon, Jul 22, 9:30 - 10:30 PT"} ],
              resources: 
              [{name:"Design Workshop Slides", link:"https://www.coolmathgames.com/"},
              {name:"Infosession Slides", link:"https://www.poptropica.com/"},
              {name:"Infosession Recording", link:"https://www.target.com/"}],
              socials:
              [{web: "https://www.pokemon.com/us/", email: "https://www.pokemon.com/us/", ig:"https://www.pokemon.com/us/", fb:"https://www.pokemon.com/us/", twt:"https://www.pokemon.com/us/"}]}

const Landing = () => {
  return (
    <div>
      <ClubPage data={data} />
    
      {/*<div className="App">
        <div className="header">
          <a href="" class="logo">sproul.club</a>
          <div className="header-right">
            <a href="catalog">Catalog</a>
            <a href="login">Club sign in</a>
            <a className="active" href="add">Add a club</a>
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
  </div>*/}
  </div>
    );
};

export { Landing };
