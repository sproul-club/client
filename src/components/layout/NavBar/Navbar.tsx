import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import useOnClickOutside from '../../../hooks/useOnClickOutside';
import styles from './Navbar.module.scss';

import logo from '../../../assets/logo.png';
import useAuth from '../../../contexts/Auth/useAuth';

interface Props {}

export default function NavBar({}: Props) {
  const {} = useAuth();

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Image src={logo} alt="bear" height={50} width={50} />
        <span>sproul.club</span>
      </div>
      <div className={styles.options}></div>
    </div>
  );
}
