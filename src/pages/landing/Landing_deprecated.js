import React from "react";
import { Link } from "next/link";
// import "./Landing.scss";
// import ScrollAnimation from 'react-animate-on-scroll';
// import Footer from "../../components/layout/footer/Footer.js";
// import "animate.css/animate.min.css";
// import mock1 from './assets/mock1.png';
// import mock2 from './assets/mock2.png';
// import mock3 from './assets/mock3.png';
// import bearshehe from './assets/landingbears.svg';
// import ReactGA from "react-ga";

const Landing = () => {
  //   ReactGA.initialize("UA-176775736-1");
  //   ReactGA.pageview("/landing");
  return (
    <div className="landing">
      <div className="content">
        {/* <div className="imageContainer">
          <img src={bearshehe} className="bears" alt="bears" />
        </div> */}
        <div className="text">
          <h3>Find your community at Berkeley</h3>
          <p>
            sproul.club helps you discover student clubs, organizations, and
            communities on campus - built by students, for students!
          </p>
          {/* <Link to="/signup">Register Your Club</Link> */}
          {/* <div className="buttons">
            <Link href="/catalog">
              <a>Explore clubs</a>
            </Link>
            <Link id="addbutton" href="/signup">
              <a>Add a club</a>
            </Link>
          </div> */}
        </div>
        {/*
        <Card
          clubName={"Web Development @ Berkeley"}
          appReq={true}
          open={true}
          desc={
            "Helping students to develop their coding & design skills in web dev."
          }
        />*/}
      </div>
      {/* <div className="moreContent">
        <div className="featureWrapper">
          <div className="feature1">
            <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
              <div className="description">
                <h2>
                  Explore student clubs that align with your interests. All in
                  one place.
                </h2>
                <p>
                  No more rummaging through Facebook posts. Start searching for
                  organizations and clubs by tags, application requirements, and
                  more!
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="animate__fadeInRight"
              animateOnce={true}
            >
              <img src={mock1} className="screenshot" alt="mock1" />
            </ScrollAnimation>
          </div>
          <div className="feature2">
            <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce={true}>
              <img src={mock2} className="screenshot" alt="mock2" />
            </ScrollAnimation>
            <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
              <div className="description">
                <h2>
                  We bring the organization info you want to know directly to
                  you.
                </h2>
                <p>
                  Learn key information about a club, application statuses,
                  recruitment timelines, and upcoming events in just a glance.
                </p>
              </div>
            </ScrollAnimation>
          </div>
          <div className="feature3">
            <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
              <div className="description">
                <h2>
                  Add, edit, and manage a student organization page of your own.
                </h2>
                <p>
                  It’s time to get seen and discovered. Reach thousands of
                  students, link them to important resources, and show them how
                  to get involved!
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="animate__fadeInRight"
              animateOnce={true}
            >
              <img src={mock3} className="screenshot" alt="mock3" />
            </ScrollAnimation>
          </div>
        </div>
      </div> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Landing;
