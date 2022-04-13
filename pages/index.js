import { useState } from 'react';
import { arrayMove } from 'react-sortable-hoc';
import CreateCard from '../components/CreateCard';
import Layout from '../components/Layout';
import List from '../components/List';
import Modal from '../components/Modal';
import { slugifyText } from '../utils/slugify';

export default function Home() {
  const [countdowns, setCountdowns] = useState([
    {
      id: 1,
      title: 'California 2022',
      slug: slugifyText('California 2022'),
      color: '#47ED6C',
      altColor: '#33D356',
      emoji: '🌴',
      daysLeft: 66,
    },
    {
      id: 2,
      title: 'Cumpleaños 23',
      slug: slugifyText('Cumpleaños 23'),
      color: '#47C5ED',
      altColor: '#38B2D9',
      emoji: '🥳',
      daysLeft: 67,
    },
    {
      id: 3,
      title: 'Concierto TØP',
      slug: slugifyText('Concierto TØP'),
      color: '#B070E3',
      altColor: '#9E52DB',
      emoji: '🎹',
      daysLeft: 68,
    },
    {
      id: 4,
      title: 'Alcatraz SF',
      slug: slugifyText('Alcatraz SF'),
      color: '#E370B5',
      altColor: '#CC338F',
      emoji: '👮‍♀️',
      daysLeft: 69,
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(true);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setCountdowns(arrayMove(countdowns, oldIndex, newIndex));
  };

  return (
    <Layout
      title='My Countdowns'
      description='Create your own custom countdowns for your most important events'
      keywords='countdown, countdowns, count, events'
    >
      <List countdowns={countdowns} axis='y' onSortEnd={onSortEnd} />
      {isModalOpen && (
        <Modal>
          <CreateCard onCancel={() => setIsModalOpen(false)} />
        </Modal>
      )}
    </Layout>
  );
}
