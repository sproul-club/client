import React, { useState, useRef } from 'react';
import './Navbar.css';
import useOnClickOutside from '../utils/useOnClickOutside';

const Navbar = () => {
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

  return (
    <>
      {/* This is the mobile header without  */}
      <div className={navbarVis ? 'header hidden' : 'header'} ref={ref}>
        <a href="/" className="logo">
          sproul.club
        </a>
        <div className="hamburger" onClick={() => toggleNavbar()}>
          <i className="fas fa-bars"></i>
        </div>
      </div>
      {/*  This the main header, shown when dropdown is open as well */}
      <div className={navbarVis ? 'header' : 'header hidden'} ref={ref}>
        <a href="/" className="logo">
          sproul.club
        </a>
        <div className="hamburger" onClick={() => toggleNavbar()}>
          <i className="fas fa-bars"></i>
        </div>
        <div className="header-right">
          <a href="/comingsoon">Discover</a>
          <a className="signin" href="/comingsoon">
            Club sign in
          </a>
          <a className="active" href="/comingsoon">
            Add a club
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
