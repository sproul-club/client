import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';

import './Navbar.css';
import useOnClickOutside from '../utils/useOnClickOutside';

const Navbar = ({ isAuthenticated }) => {
  const [navbarVis, setNavbarVis] = useState(true);

  const hideNavbar = () => setNavbarVis(false);
  const toggleNavbar = () => setNavbarVis((navbarVis) => !navbarVis);

  const ref = useRef();

  // If it is on mobile, and the navbar is visible, if click outside, hide sidebar
  useOnClickOutside(ref, () => {
    if (window.innerWidth <= 800 && navbarVis === true) {
      hideNavbar();
    }
  });

  const loggedOutLinks = (
    <>
      <Link href="/catalog">Discover</Link>
      <Link className="signin" to="/signin">
        Club sign in
      </Link>
      <Link className="active" href="/signup">
        Add a club
      </Link>
    </>
  );

  const loggedInLinks = (
    <>
      <Link href="/catalog">Discover</Link>
      <Link className="active" href="/signup">
        <div className="profile-dropdow"></div>
        organizationname@berkeley.edu
      </Link>
    </>
  );

  return (
    <>
      {/* This is the mobile header without  */}
      <div className={navbarVis ? 'header hidden' : 'header'} ref={ref}>
        <Link to="/" className="logo">
          sproul.club
        </Link>
        <div className="hamburger" onClick={() => toggleNavbar()}>
          <i className="fas fa-bars"></i>
        </div>
      </div>
      {/*  This the main header, shown when dropdown is open as well */}
      <div className={navbarVis ? 'header' : 'header hidden'} ref={ref}>
        <Link to="/" className="logo">
          sproul.club
        </Link>
        <div className="hamburger" onClick={() => toggleNavbar()}>
          <i className="fas fa-bars"></i>
        </div>
        <div className="header-right">
          {isAuthenticated ? loggedInLinks : loggedOutLinks}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Navbar);
