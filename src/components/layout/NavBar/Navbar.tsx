import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import useOnClickOutside from '../../../hooks/useOnClickOutside';
import styles from './Navbar.module.scss';

import logo from '../../../pages/assets/logo.png';

interface NavBar_Props {}

const NavBar = ({}: NavBar_Props) => {
  const [navbarVis, setNavbarVis] = useState(false);
  const [dropdownVis, setDropownVis] = useState(false);

  const toggleNavbar = () => setNavbarVis((navbarVis) => !navbarVis);
  const toggleDropdown = () => setDropownVis((dropdownVis) => !dropdownVis);

  const navbarRef = useRef() as React.LegacyRef<HTMLInputElement>;
  const dropDownRef = useRef() as React.LegacyRef<HTMLInputElement>;

  // Close navbar on page change (mobile)
  // Close dropdown on page change
  useEffect(() => {
    setNavbarVis(false);
    setDropownVis(false);
    // eslint-disable-next-line
  }, []);

  // If it is on mobile, and the navbar is visible, if click outside, hide sidebar
  useOnClickOutside(navbarRef, () => {
    if (navbarVis === true) {
      setNavbarVis(false);
    }
  });

  // On desktop, if dropdown is visible, if click outside, hide dropdown
  useOnClickOutside(dropDownRef, () => {
    if (dropdownVis === true) {
      setDropownVis(false);
    }
  });

  const logoutSelect = () => {
    setDropownVis(false);
    // logout(history);
  };

  const loggedOut = (
    <div className={styles['loggedOut']}>
      <Link href="/about" className={styles['nav-link']}>
        <a>About</a>
      </Link>
      <Link href="/catalog" className={styles['nav-link']}>
        <a>Discover</a>
      </Link>
      <a
        href="https://www.notion.so/sproul-club-c4765bb5e0884179b8bd38498eeec40f"
        className={`${styles['nav-link']} ${styles['join-us']}`}
        target="none"
      >
        Join our team
      </a>
      <div
        className={`${styles['menu']} ${styles['logout']} ${
          dropdownVis ? styles['menu-open'] : styles['menu-close']
        }`}
        ref={dropDownRef}
        onClick={toggleDropdown}
      >
        <div className={styles['menu-text']}>
          Sign in
          <i
            style={{ marginLeft: '9px' }}
            className={`${styles['fas']} ${
              dropdownVis ? styles['fa-angle-up'] : styles['fa-angle-down']
            }`}
          ></i>
        </div>
        {dropdownVis && (
          <Link
            className={`${styles['option']} ${styles['mid-option']}`}
            href="/signin"
          >
            <a>Clubs</a>
          </Link>
        )}
      </div>
    </div>
  );

  // const loggedInStudent = (
  //   <div className="logged-in-links">
  //     <Link to="/about" className="nav-link">
  //       About
  //     </Link>
  //     <Link to="/catalog" className="nav-link">
  //       Discover
  //     </Link>
  //     <div
  //       className={`menu login ${dropdownVis ? "menu-open" : "menu-close"}`}
  //       ref={dropDownRef}
  //       onClick={toggleDropdown}
  //     >
  //       <div className="menu-text">
  //         Account
  //         <i
  //           style={{ marginLeft: "9px" }}
  //           className={`fas ${dropdownVis ? "fa-angle-up" : "fa-angle-down"}`}
  //         ></i>
  //       </div>
  //       {dropdownVis && (
  //         <div className="dropdown">
  //           <Link to="/dashboard" className="option">
  //             Dashboard
  //           </Link>
  //           <Link to="/" className="option mid-option">
  //             Favorites
  //           </Link>
  //           <Link to="/" className="option mid-option">
  //             Settings
  //           </Link>
  //           <div className="option" onClick={logoutSelect}>
  //             Log Out
  //           </div>
  //         </div>
  //       )}
  //     </div>
  //   </div>
  // );

  // const loggedInOrg = (
  //   <div className="logged-in-links">
  //     <Link to="/about" className="nav-link">
  //       About
  //     </Link>
  //     <Link to="/catalog" className="nav-link">
  //       Discover
  //     </Link>
  //     <div
  //       className={`menu login ${dropdownVis ? "menu-open" : "menu-close"}`}
  //       ref={dropDownRef}
  //       onClick={toggleDropdown}
  //     >
  //       <div className="menu-text">
  //         Account
  //         <i
  //           style={{ marginLeft: "9px" }}
  //           className={`fas ${dropdownVis ? "fa-angle-up" : "fa-angle-down"}`}
  //         ></i>
  //       </div>
  //       {dropdownVis && (
  //         <div className="dropdown">
  //           <Link to="/admin" className="option">
  //             Profile
  //           </Link>
  //           <Link to="/security" className="option mid-option">
  //             Security
  //           </Link>
  //           <div className="option" onClick={logoutSelect}>
  //             Log Out
  //           </div>
  //         </div>
  //       )}
  //     </div>
  //   </div>
  // );

  // const display = isAuthenticated ? loggedInOrg : loading ? "" : loggedOut;

  return (
    <>
      <div className={styles['container']} ref={navbarRef}>
        <div className={styles['header-left']}>
          <Image
            src={logo}
            className="logo-img"
            alt="bears"
            width="43px"
            height="43px"
          ></Image>
          <Link href="/" className={`${styles['nav-link']} ${styles['logo']}`}>
            <a>sproul.club</a>
          </Link>
        </div>
        {/* <div className="hamburger" onClick={toggleNavbar}>
          <i className="fas fa-bars"></i>
        </div> */}
        <div className={styles['header-right']}>{loggedOut}</div>
      </div>
    </>
  );
};

const mapStateToProps = (state: any) => ({
  isAuthenticated: state.auth.isAuthenticated,
  organizationEmail: state.profile.owner,
  orgId: state.profile.link_name,
  loading: state.auth.loading,
});

export default NavBar;

// export default connect(mapStateToProps, { logout, login })(withRouter(Navbar));
