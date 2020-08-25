import React, { useState, useEffect, useRef } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout, login } from '../actions/auth';

import './Navbar.css';
import useOnClickOutside from '../utils/useOnClickOutside';

const Navbar = ({
  organizationEmail,
  orgId,
  isAuthenticated,
  logout,
  login,
  history,
  loading,
}) => {
  const [navbarVis, setNavbarVis] = useState(false);
  const [dropdownVis, setDropownVis] = useState(false);

  const toggleNavbar = () => setNavbarVis((navbarVis) => !navbarVis);
  const toggleDropdown = () => setDropownVis((dropdownVis) => !dropdownVis);

  const navbarRef = useRef();
  const authDropDownRef = useRef();

  // If it is on mobile, and the navbar is visible, if click outside, hide sidebar
  useOnClickOutside(navbarRef, () => {
    if (window.innerWidth <= 800 && navbarVis === true) {
      setNavbarVis(false);
    }
  });

  useOnClickOutside(authDropDownRef, () => {
    if (dropdownVis === true) {
      setDropownVis(false);
    }
  });

  useEffect(() => {}, [isAuthenticated]);

  const logoutSelect = () => {
    setDropownVis(false);
    logout(history);
  };

  if (loading) return null;

  const loggedOutLinks = (
    <>
      <Link to="/catalog" className="nav-link">
        Discover
      </Link>
      <Link to="/signin" className="nav-link signin">
        Club sign in
      </Link>
      <Link to="/signup" className="nav-link active">
        Add a club
      </Link>
    </>
  );

  const loggedInLinks = (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Link to="/catalog" className="nav-link hide-sm">
        Discover
      </Link>
      <Link to={`/club/${orgId}`} className="nav-link hide-sm">
        View Profile
      </Link>
      <div
        className="org-menu"
        href="/signup"
        ref={authDropDownRef}
        onClick={toggleDropdown}
      >
        <div className="org-email">
          {organizationEmail}
          <i
            style={{ marginLeft: '5px' }}
            className={`fas ${dropdownVis ? 'fa-caret-down' : 'fa-caret-up'}`}
          ></i>
        </div>
        {dropdownVis && (
          <div className="dropdown">
            <Link className="option" to="/admin">
              Edit Club Page
            </Link>
            <Link to="/security" className="option mid-option">
              Account Security
            </Link>
            <div className="option" onClick={logoutSelect}>
              Log Out
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      <div className="header" ref={navbarRef}>
        <Link to="/" className="nav-link logo">
          sproul.club
        </Link>
        <div className="hamburger" onClick={toggleNavbar}>
          <i className="fas fa-bars"></i>
        </div>
        {(navbarVis || window.innerWidth >= 800) && (
          <div className="header-right">
            {isAuthenticated ? loggedInLinks : loggedOutLinks}
          </div>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  organizationEmail: state.profile.owner,
  orgId: state.profile.id,
  loading: state.auth.loading,
});

export default connect(mapStateToProps, { logout, login })(withRouter(Navbar));
