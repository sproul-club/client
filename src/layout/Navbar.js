import React, { useState, useEffect, useRef } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout, login } from '../actions/auth';

import './Navbar.css';
import useOnClickOutside from '../utils/useOnClickOutside';

const Navbar = ({
  organizationEmail,
  isAuthenticated,
  logout,
  login,
  history,
}) => {
  const [navbarVis, setNavbarVis] = useState(false);
  const [dropdownVis, setDropownVis] = useState(false);
  const [navFixed, setNavFixed] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY === 0) {
        setNavFixed(false);
      } else if (window.scrollY > 50) {
        setNavFixed(true);
      }
    });
  });
  useEffect(() => {}, [organizationEmail]);

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
      <Link to="/comingsoon" className="nav-link hide-sm">
        View Profile
      </Link>
      <div className="org-menu" href="/signup">
        <div className="org-email" onClick={toggleDropdown}>
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
            <div className="option" onClick={() => logout(history)}>
              Log Out
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      <div className={navFixed ? 'header fixed-nav' : 'header'} ref={ref}>
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
  organizationEmail: state.profile.profile.owner,
});

export default connect(mapStateToProps, { logout, login })(withRouter(Navbar));
