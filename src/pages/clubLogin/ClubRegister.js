import React from 'react';
import './ClubRegister.scss';
import MultiStepForm from './ClubRegisterForm.js';
import Footer from '../../components/layout/footer/Footer';
import ReactGA from 'react-ga';

const SignUp = () => {
  // const isHeaderOpen = props.active ? 'active' : 'muted';
  ReactGA.initialize('UA-176775736-1');
  ReactGA.pageview('/signup');

  return (
    <div className="signup">
      {/* <div className={`signup ${isHeaderOpen}`}> */}
      <div className="content">
        <div className="text">
          <h3>Let's get started.</h3>
          <ol>
            <li>
              <p>
                Please use your <strong> organization's CalLink email </strong>{' '}
                to register. We will be using your CalLink email to verify your
                club.{' '}
              </p>
            </li>
            <li>We'll send a confirmation link to your club email.</li>
            <li>Click on the confirmation link to sign into sproul.club.</li>
            <li>Begin creating and editing your organization's page!</li>
          </ol>
        </div>
        <div className="form">
          <MultiStepForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export { SignUp };
