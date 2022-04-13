import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import Card from './Card';
import styles from '../styles/Home.module.css';

const List = SortableContainer(({ countdowns, onCardClick }) => {
  return (
    <div className={styles.Home}>
      <div className={styles.HomeList}>
        {countdowns.map((countdown, index) => (
          <Card index={index} key={countdown.id} countdown={countdown} />
        ))}
      </div>
    </div>
  );
});

export default List;
