import React, { useState, useEffect, useRef } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout, login } from '../../../redux/actions/auth';

import './Navbar.scss';
import useOnClickOutside from '../../../utils/useOnClickOutside';

import logo from '../../../pages/assets/logo.png';

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
  const dropDownRef = useRef();

  // Close navbar on page change (mobile)
  // Close dropdown on page change
  useEffect(() => {
    setNavbarVis(false);
    setDropownVis(false);
    // eslint-disable-next-line
  }, [window.location.pathname]);

  // If it is on mobile, and the navbar is visible, if click outside, hide sidebar
  useOnClickOutside(navbarRef, () => {
    if (window.innerWidth <= 800 && navbarVis === true) {
      setNavbarVis(false);
    }
  });

  // On desktop, if dropdown is visible, if click outside, hide dropdown
  useOnClickOutside(dropDownRef, () => {
    if (dropdownVis === true) {
      setDropownVis(false);
    }
  });

  useEffect(() => {}, [isAuthenticated]);

  const logoutSelect = () => {
    setDropownVis(false);
    logout(history);
  };

  const loggedOut = (
    <>
      <Link to="/about" className="nav-link">
        About
      </Link>
      <Link to="/catalog" className="nav-link">
        Discover
      </Link>
      <div
        className={`menu logout ${dropdownVis ? 'menu-open' : 'menu-close'} button-blue-fill`}
        ref={dropDownRef}
        onClick={toggleDropdown}>
        <div className="menu-text">
          Sign in
          <i
            style={{ marginLeft: '9px' }}
            className={`fas ${
              dropdownVis ? 'fa-angle-up' : 'fa-angle-down'
            }`}></i>
        </div>
        {dropdownVis && (
          <div className="dropdown">
            <Link to="/student/signin" className="option">
              Students
            </Link>
            <Link to="/signin" className="option">
              Clubs
            </Link>
          </div>
        )}
      </div>
    </>
  );

  const loggedInStudent = (
    <>
      <Link to="/about" className="nav-link">
        About
      </Link>
      <Link to="/catalog" className="nav-link">
        Discover
      </Link>
      <div
        className={`menu login ${dropdownVis ? 'menu-open' : 'menu-close'} button-blue-fill`}
        ref={dropDownRef}
        onClick={toggleDropdown}>
        <div className="menu-text">
          Account
          <i
            style={{ marginLeft: '9px' }}
            className={`fas ${
              dropdownVis ? 'fa-angle-up' : 'fa-angle-down'
            }`}></i>
        </div>
        {dropdownVis && (
          <div className="dropdown">
            <Link to="/dashboard" className="option">
              Dashboard
            </Link>
            <Link to="/" className="option">
              Favorites
            </Link>
            <Link to="/" className="option">
              Settings
            </Link>
            <div className="option" onClick={logoutSelect}>
              Log Out
            </div>
          </div>
        )}
      </div>
    </>
  );

  const loggedInOrg = (
    <>
      <Link to="/about" className="nav-link">
        About
      </Link>
      <Link to="/catalog" className="nav-link">
        Discover
      </Link>
      <div
        className={`menu login ${dropdownVis ? 'menu-open' : 'menu-close'} button-blue-fill`}
        ref={dropDownRef}
        onClick={toggleDropdown}>
        <div className="menu-text">
          Account
          <i
            style={{ marginLeft: '9px' }}
            className={`fas ${
              dropdownVis ? 'fa-angle-up' : 'fa-angle-down'
            }`}></i>
        </div>
        {dropdownVis && (
          <div className="dropdown">
            <Link to="/admin" className="option">
              Profile
            </Link>
            <Link to="/security" className="option">
              Security
            </Link>
            <div className="option" onClick={logoutSelect}>
              Log Out
            </div>
          </div>
        )}
      </div>
    </>
  );

  const display = isAuthenticated ? loggedInOrg : loading ? '' : loggedOut;

  return (
    <>
      <div className="header" ref={navbarRef}>
        <img src={logo} className="logo-img" alt="bears" />
        <Link to="/" className="nav-link logo">
          sproul.club
        </Link>
        <div className="hamburger" onClick={toggleNavbar}>
          <i className="fas fa-bars"></i>
        </div>
        {(navbarVis || window.innerWidth >= 800) && (
          <div className="header-right">{display}</div>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  organizationEmail: state.profile.owner,
  orgId: state.profile.link_name,
  loading: state.auth.loading,
});

export default connect(mapStateToProps, { logout, login })(withRouter(Navbar));
