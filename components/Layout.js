import Head from 'next/head';
import React from 'react';
import Navbar from './Navbar';

function Layout({ children, title, description, keywords }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>

      <Navbar />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
