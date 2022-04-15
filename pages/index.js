import { useState, useEffect, Fragment } from 'react';
import { arrayMove } from 'react-sortable-hoc';
import { supabase } from '../utils/supabaseClient';
import CreateCard from '../components/CreateCard';
import Layout from '../components/Layout';
import List from '../components/List';
import Modal from '../components/Modal';
import { slugifyText } from '../utils/slugify';
import styles from '../styles/NewButton.module.css';
import { getDaysDifference } from '../utils/dates';
import Login from './login';

export default function Home() {
  const [countdowns, setCountdowns] = useState([
    {
      id: 1,
      title: 'California 2022',
      slug: slugifyText('California 2022'),
      color: '#47ED6C',
      altColor: '#33D356',
      emoji: '🌴',
      date: '09/16/22',
      daysLeft: getDaysDifference('09/16/22'),
    },
    {
      id: 2,
      title: 'Cumpleaños 23',
      slug: slugifyText('Cumpleaños 23'),
      color: '#47C5ED',
      altColor: '#38B2D9',
      emoji: '🥳',
      date: '09/17/22',
      daysLeft: getDaysDifference('09/17/22'),
    },
    {
      id: 3,
      title: 'Concierto TØP',
      slug: slugifyText('Concierto TØP'),
      color: '#B070E3',
      altColor: '#9E52DB',
      emoji: '🎹',
      date: '09/18/22',
      daysLeft: getDaysDifference('09/18/22'),
    },
    {
      id: 4,
      title: 'Alcatraz SF',
      slug: slugifyText('Alcatraz SF'),
      color: '#E370B5',
      altColor: '#CC338F',
      emoji: '🤪',
      date: '09/19/29',
      daysLeft: getDaysDifference('09/19/22'),
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setCountdowns(arrayMove(countdowns, oldIndex, newIndex));
  };

  const onCreate = (cd) => {
    setCountdowns([...countdowns, cd]);
    setIsModalOpen(false);
  };

  return (
    <Layout
      title='My Countdowns'
      description='Create your own custom countdowns for your most important events'
      keywords='countdown, countdowns, count, events'
    >
      {!session ? (
        <Login />
      ) : (
        <Fragment>
          <List countdowns={countdowns} axis='y' onSortEnd={onSortEnd} />
          {isModalOpen && (
            <Modal>
              <CreateCard
                onCancel={() => setIsModalOpen(false)}
                handleCreate={onCreate}
              />
            </Modal>
          )}
          <div
            onClick={() => setIsModalOpen(true)}
            className={styles.Container}
          >
            <span>Add new Countdown</span>
          </div>
        </Fragment>
      )}
    </Layout>
  );
}
