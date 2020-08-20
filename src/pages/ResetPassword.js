import React from 'react';
import './ResetPassword.css';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import ResetPasswordForm from './ResetPasswordForm';

const ResetPassword = () => {
  return (
  <>
    <div className="recover">
      <Navbar />
      <div className="content">
        <div className="form">
          <ResetPasswordForm />
        </div>
      </div>
      <Footer />
    </div>
  </>
  );
};

export { ResetPassword };
