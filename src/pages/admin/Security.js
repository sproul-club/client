import React from 'react';
import Navbar from '../../layout/Navbar';
import { Route, Switch, Link } from 'react-router-dom';
import './Admin.css';
import './Security.css';
import ChangeLogin from './ChangeLogin.js';

const Security = () => {
    return (
        <div className="security">
            <Navbar />
            <div className="admin-sidebar">
                <h3>Account Settings</h3>
                <Link
                    to="/security"
                    className={
                    window.location.pathname === '/security' ||
                    window.location.pathname === '/security'
                        ? 'selected page-link'
                        : 'page-link'
                    }>
                    Login
                </Link>
            </div>
            <div className="admin-content">
                <Switch>
                    <Route path="/security" render={() => <ChangeLogin/>} />
                </Switch>
            </div>
        </div>
    );

}

export { Security };