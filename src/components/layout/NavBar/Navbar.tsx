import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../assets/logo.png'

import React, { useState } from 'react';
import styles from './Navbar.module.scss';

import { useRouter } from 'next/router';
import useAuth from '../../../contexts/Auth/useAuth';

import Button from '../../ui/Button/Button';
import Hamburger from '../../Hamburger/Hamburger';
import MenuOverlay from '../../MenuOverlay/MenuOverlay';

interface Props {
  authenticated: boolean;
  hasClub: boolean;
}

export default function NavBar({ authenticated, hasClub }: Props) {
  const auth = useAuth();
  const router = useRouter();
  const [navOpen, setNavOpen] = useState(false)

  const closeNav = () => {
    setNavOpen(false);
  }

  return (
    <>
    <div className={styles.container}>
      <Link href="/">
        <div className={styles.logoContainer}>
          <Image src={logo} alt="bear" height={50} width={50} />
          <span>sproul.club</span>
        </div>
      </Link>
      <div className={[styles.options, styles.fullMenu].join(' ')}>
        <div className={router.pathname == "/about" ? styles.selectedOption : ""}>
          <Link href="/about">About</Link>
        </div>
        <div className={router.pathname == "/discover" ? styles.selectedOption : ""}>
          <Link href="/discover">Discover</Link>
        </div>
        <div className={router.pathname == "/events" ? styles.selectedOption : ""}>
          <Link href="/events">Events</Link>
        </div>
        <div className={router.pathname == "/account" ? styles.selectedOption : ""}>
          <Link href="/account">Account</Link>
        </div>
        {hasClub ?
        <Button href="/club" variant="outlined" className="styles.navbarButton" colorVariant='dark'>
          Add your club
        </Button> : null}
        {auth.isAuthenticated ? null :
        <Button href="/login" className={styles.navbarButton} colorVariant='dark'>Sign In</Button> }
      </div>
      <div className={[styles.hamburger, styles.collapsedMenu].join(' ')}>
        <Hamburger isOpen={navOpen} onClick={()=> { setNavOpen(!navOpen)}}/>
      </div>
    </div>
    <div>
    {navOpen ?
    <div className={styles.collapsedMenu}>
      <MenuOverlay navOpen={navOpen} closeNav={closeNav} hasClub={true}/>
    </div>
      : null}
    </div>
    </>
  );
}
