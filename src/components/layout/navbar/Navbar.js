import React, { useState, useEffect, useRef } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout, login } from '../../../redux/actions/auth';

import './Navbar.css';
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
      <a
        href="https://www.notion.so/sproul-club-c4765bb5e0884179b8bd38498eeec40f"
        className="nav-link join-us"
        target="none">
        Join our team
      </a>
      <div
        className={`menu logout ${dropdownVis ? 'menu-open' : 'menu-close'}`}
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
            <Link className="option" to="/comingsoon">
              Students
            </Link>
            <Link className="option mid-option" to="/signin">
              Clubs
            </Link>
          </div>
        )}
      </div>
    </>
  );

  const loggedInStudent = (
    <div className="logged-in-links">
      <Link to="/about" className="nav-link">
        About
      </Link>
      <Link to="/catalog" className="nav-link">
        Discover
      </Link>
      <div
        className={`menu login ${dropdownVis ? 'menu-open' : 'menu-close'}`}
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
            <Link to="/" className="option mid-option">
              Favorites
            </Link>
            <Link to="/" className="option mid-option">
              Settings
            </Link>
            <div className="option" onClick={logoutSelect}>
              Log Out
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const loggedInOrg = (
    <div className="logged-in-links">
      <Link to="/about" className="nav-link">
        About
      </Link>
      <Link to="/catalog" className="nav-link">
        Discover
      </Link>
      <div
        className={`menu login ${dropdownVis ? 'menu-open' : 'menu-close'}`}
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
            <Link to="/security" className="option mid-option">
              Security
            </Link>
            <div className="option" onClick={logoutSelect}>
              Log Out
            </div>
          </div>
        )}
      </div>
    </div>
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
