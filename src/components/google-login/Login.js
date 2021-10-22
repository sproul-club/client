import React from 'react';

import {GoogleLogin} from 'react-google-login';

import { refreshTokenSetup } from './refreshTokenSetup';

const clientId = '324245380972-5vcd95qj09o0m42fs5q5ogg48ba2j0po.apps.googleusercontent.com';

function Login() {
    const onSuccess = (res) => {
        console.log('[Login success] currentUser:', res.profileObj);

        refreshTokenSetup(res);
    };
    const onFailure = (res) => {
        console.log('[Login failed] res:', res);
    };

    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                style={{ marginTop: '100px' }}
                isSignedIn={true}
            />
        </div>
    );
}

export default Login;