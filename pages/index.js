import Card from '../components/Card';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

const countdowns = [
  {
    id: 1,
    title: 'California 2022',
    color: '#47ED6C',
    altColor: '#33D356',
    emoji: '🌴',
    daysLeft: 66,
  },
  {
    id: 2,
    title: 'Cumpleaños 23',
    color: '#47C5ED',
    altColor: '#38B2D9',
    emoji: '🥳',
    daysLeft: 67,
  },
  {
    id: 3,
    title: 'Concierto TØP',
    color: '#B070E3',
    altColor: '#9E52DB',
    emoji: '🎹',
    daysLeft: 68,
  },
  {
    id: 4,
    title: 'Alcatraz SF',
    color: '#E370B5',
    altColor: '#CC338F',
    emoji: '👮‍♀️',
    daysLeft: 69,
  },
];
export default function Home() {
  return (
    <Layout
      title='My Countdowns'
      description='Create your own custom countdowns for your most important events'
      keywords='countdown, countdowns, count, events'
    >
      <div className={styles.Home}>
        <div className={styles.HomeList}>
          {countdowns.map((countdown) => (
            <Card key={countdown.id} countdown={countdown} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
