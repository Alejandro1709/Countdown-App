import React, { useState } from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import Card from './Card';
import Modal from './Modal';
import styles from '../styles/Home.module.css';
import EditCard from './EditCard';

const List = SortableContainer(({ countdowns, onCreate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const changeUrl = (countdown) => {
    localStorage.setItem('currentCountdown', JSON.stringify(countdown));
    setIsModalOpen(true);
  };

  return (
    <div className={styles.Home}>
      <div className={styles.HomeList}>
        {countdowns.map((countdown, index) => (
          <Card
            index={index}
            key={countdown.id}
            countdown={countdown}
            onEdit={() => changeUrl(countdown)}
          />
        ))}
      </div>
      {isModalOpen && (
        <Modal>
          <EditCard
            onCancel={() => setIsModalOpen(false)}
            handleCreate={onCreate}
          />
        </Modal>
      )}
    </div>
  );
});

export default List;
