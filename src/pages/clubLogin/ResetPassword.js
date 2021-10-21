import React from 'react';
import './ResetPassword.css';
import Footer from '../../components/layout/footer/Footer';
import ResetPasswordForm from './ResetPasswordForm';

const ResetPassword = () => {
  return (
    <div className="recover">
      <div className="content">
        <div className="form">
          <ResetPasswordForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export { ResetPassword };
