import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/404.module.css';

function NotFoundPage() {
  return (
    <Layout title='Page Not Found'>
      <div className={styles.container}>
        <h1>404 Page Not Found</h1>
        <p>
          The page that you are looking for does not exists. Please go back{' '}
          <Link href='/'>
            <a className={styles.link}>home</a>
          </Link>
        </p>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
