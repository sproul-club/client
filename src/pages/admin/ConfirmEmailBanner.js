import React, { useState } from 'react';
import Navbar from '../../layout/Navbar';
import { Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { resendConfirmationEmail } from '../../actions/auth';

import { NotificationManager } from 'react-notifications';

const ConfirmEmailBanner = ({admin, profile, resendConfirmationEmail}) => {
    const [resentEmail, setResentEmail] = useState(false);
    
    const resendConfirmEmail = async (email) => {
    // async function resendConfirmEmail(email) {
        setResentEmail(false);
        try {
          await resendConfirmationEmail(email);
          NotificationManager.success('Confirmation email resent to ' + profile.owner);
        } catch (err) {
          var errMessage = err.response.data.reason;
          NotificationManager.error(errMessage, 'Unable to register!', 3000);
        } finally {
          setResentEmail(true);
        }
    }


    return (
        <div>
            {admin && !profile.confirmed && !resentEmail && <div style={{backgroundColor: "#FFE587", paddingTop: "70px", textAlign: "center"}}>
                Your club profile will not be published until email is confirmed. Please click &nbsp;
                <u style={{  cursor: 'pointer' }} onClick={() => resendConfirmEmail(profile.owner)}>here</u>
                &nbsp; to resend confirmation email.
            </div>}
            {admin && !profile.confirmed && resentEmail && <div style={{backgroundColor: "#FFE587", paddingTop: "55px", textAlign: "center"}}>
                <p>A confirmation email was sent to {profile.owner}. Follow the instructions in the email to complete registration. Please click &nbsp;
                <u style={{  cursor: 'pointer' }} onClick={() => resendConfirmEmail(profile.owner)}>here</u>
                &nbsp; if the link has expired.</p>
            </div>}
        </div>
    );

}

const mapStateToProps = (state) => ({
    admin: state.auth.isAuthenticated,
    profile: state.profile.profile,
});

export default connect(mapStateToProps, {resendConfirmationEmail})(ConfirmEmailBanner);