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

Layout.defaultProps = {
  title: 'Countdown App',
  description:
    'Create your own custom countdowns for your most important events',
  keywords: 'countdown, countdowns, count, events',
};
