import { useState, useEffect, Fragment } from 'react';
import { arrayMove } from 'react-sortable-hoc';
import { supabase } from '../utils/supabaseClient';
import CreateCard from '../components/CreateCard';
import Layout from '../components/Layout';
import List from '../components/List';
import Modal from '../components/Modal';
import styles from '../styles/NewButton.module.css';
import Login from './login';

export default function Home() {
  const [countdowns, setCountdowns] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [session, setSession] = useState(null);

  const fetchData = async () => {
    try {
      const { data } = await supabase.from('countdowns').select();
      setCountdowns(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    fetchData();
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
          <List
            countdowns={countdowns}
            axis='y'
            onSortEnd={onSortEnd}
            onCreate={onCreate}
          />
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
