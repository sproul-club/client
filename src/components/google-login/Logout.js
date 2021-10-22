import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = '324245380972-5vcd95qj09o0m42fs5q5ogg48ba2j0po.apps.googleusercontent.com';

function Logout() {
    const onSuccess = () => {
        alert('Logout done successfully');
    };

    return (
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            >
            </GoogleLogout>
        </div>
    );
}

export default Logout;