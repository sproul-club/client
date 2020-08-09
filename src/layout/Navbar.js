import React, { useState, useRef } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';

import './Navbar.css';
import useOnClickOutside from '../utils/useOnClickOutside';

const Navbar = ({ isAuthenticated, logout, history }) => {
  const [navbarVis, setNavbarVis] = useState(true);
  const [dropdownVis, setDropownVis] = useState(false);

  const toggleNavbar = () => setNavbarVis((navbarVis) => !navbarVis);
  const toggleDropdown = () => setDropownVis((dropdownVis) => !dropdownVis);

  const ref = useRef();

  // If it is on mobile, and the navbar is visible, if click outside, hide sidebar
  useOnClickOutside(ref, () => {
    if (window.innerWidth <= 800 && navbarVis === true) {
      setNavbarVis(false);
    }
  });

  const loggedOutLinks = (
    <>
      <Link to="/catalog" className="nav-link">
        Discover
      </Link>
      <Link to="/signin" className="signin">
        Club sign in
      </Link>
      <Link to="/signup" className="active">
        Add a club
      </Link>
    </>
  );

  const loggedInLinks = (
    <>
      <div
        className="org-menu"
        href="/signup"
        // onMouseEnter={() => setDropownVis(true)}
        // onMouseLeave={() => setDropownVis(false)}
      >
        <div className="org-email" onClick={toggleDropdown}>
          organizationname@berkeley.edu
          <i style={{ marginLeft: '5px' }} className="fas fa-caret-down"></i>
        </div>
        {dropdownVis && (
          <div className="dropdown">
            <div className="option">Edit Club Page</div>
            <div className="option mid-option">Account Security</div>
            <div className="option" onClick={() => logout(history)}>
              Log Out
            </div>
          </div>
        )}
      </div>
    </>
  );

  return (
    <>
      {/* This is the mobile header without  */}

      <div className="header" ref={ref}>
        <Link to="/" className="logo">
          sproul.club
        </Link>
        <div className="hamburger" onClick={toggleNavbar}>
          <i className="fas fa-bars"></i>
        </div>
        {navbarVis && (
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
});

export default connect(mapStateToProps, { logout })(withRouter(Navbar));
