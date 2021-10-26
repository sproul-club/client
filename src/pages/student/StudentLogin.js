import React from 'react';
import './StudentLogin.scss';
import Footer from '../../components/layout/footer/Footer';
import StudentLoginForm from './StudentLoginForm.js';
import loginImage from '../assets/login.png';

const StudentSignIn = () => {
  return (
    <div className="signin">
      <div className="content">
        <img src={loginImage} className="loginImage" alt="bears" />
        <div className="form">
          <StudentLoginForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export { StudentSignIn };
