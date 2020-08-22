import React from 'react';
import './ResetPassword.css';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import ResetPassword2Form from './ResetPassword2Form';

const ResetPassword2 = () => {
  return (
    <div className="recover">
      <div className="content">
        <div className="form">
          <ResetPassword2Form />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export { ResetPassword2 };
