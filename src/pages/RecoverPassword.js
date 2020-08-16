import React from 'react';
import { Link } from 'react-router-dom';
import './RecoverPassword.css';
import Navbar from '../layout/Navbar';
import RecoverForm from './RecoverForm';

const RecoverPassword = () => {
    return (
    <>
      <div className="recover">
        <Navbar />
        <div className="content">
            <div className="subheader">
                <Link to="/signin">Back to club sign in</Link>
            </div>
            <div className="main">
                <RecoverForm />
            </div>
        </div>
      </div>
    </>
  );
};

export { RecoverPassword };
