import React from 'react';
import Footer from '../../components/layout/Footer';
import RegisterForm from './components/RegisterForm';
import styles from './Register.module.scss';

import ClubsCreateForm from '../../ui-components/ClubsCreateForm';

const Register = () => {
  const handleSubmit = (data: any) => {};

  return <ClubsCreateForm />;
};

/**
 * 
 * 
 * <div className="signup">
      DELETE THIS LINE {<div className={`signup ${isHeaderOpen}`}>}
      <div className="content">
        <div className="text">
          <h3>Let&apos;s get started.</h3>
          <ol>
            <li>
              <p>
                Please use your{' '}
                <strong> organization&apos;s CalLink email </strong> to
                register. We will be using your CalLink email to verify your
                club.{' '}
              </p>
            </li>
            <li>We&apos;ll send a confirmation link to your club email.</li>
            <li>Click on the confirmation link to sign into sproul.club.</li>
            <li>Begin creating and editing your organization&apos;s page!</li>
          </ol>
        </div>
        <RegisterForm onSubmit={handleSubmit} />
      </div>
    </div>
 */

export default Register;
