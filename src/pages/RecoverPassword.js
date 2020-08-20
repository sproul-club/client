import React from 'react';
import { Link } from 'react-router-dom';
import './RecoverPassword.css';
import Navbar from '../layout/Navbar';
import RecoverPasswordForm from './RecoverPasswordForm';

const RecoverPassword = () => {
  return (
  <>
    <div className="recover">
      <Navbar />
      <div className="content">
        <div className="form">
          <RecoverPasswordForm />
        </div>
      </div>
    </div>
  </>
  );
};

export { RecoverPassword };
