import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';
import Link from 'next/link';
import React from 'react';
import styles from '../styles/Navbar.module.css';

function Navbar() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <header className={styles.Navbar}>
      <Link href='/' passHref>
        <h1 className={styles.logo}>Logo</h1>
      </Link>
      <nav role='navigation'>
        <ul className={styles.navItems}>
          {!session ? (
            <Link href='/login'>
              <a className={styles.navLink}>Login</a>
            </Link>
          ) : (
            <Link href='/account'>
              <a className={styles.navLink}>Account</a>
            </Link>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
