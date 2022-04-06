import Link from 'next/link';
import React from 'react';
import styles from '../styles/Navbar.module.css';

function Navbar() {
  return (
    <header className={styles.Navbar}>
      <Link href='/' passHref>
        <h1 className={styles.logo}>Logo</h1>
      </Link>
      <nav role='navigation'>
        <ul className={styles.navItems}>
          <Link href='/new-countdown'>
            <a className={styles.navLink}>Create Countdown</a>
          </Link>
          <Link href='/account'>
            <a className={styles.navLink}>Account</a>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
