import Head from 'next/head';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout
      title='My Countdowns'
      description='Create your own custom countdowns for your most important events'
      keywords='countdown, countdowns, count, events'
    >
      <span>Hello</span>
    </Layout>
  );
}
