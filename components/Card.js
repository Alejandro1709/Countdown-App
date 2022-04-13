import React from 'react';
import { SortableElement } from 'react-sortable-hoc';
import styles from '../styles/Card.module.css';

const Card = SortableElement(({ countdown, onEdit }) => {
  return (
    <div
      style={{ backgroundColor: countdown.color }}
      className={styles.ListCard}
      onClick={onEdit}
    >
      <div className={styles.Wrapper}>
        <div className={styles.LeftSide}>
          <div
            style={{ backgroundColor: countdown.altColor }}
            className={styles.Emoji}
          >
            <span>{countdown.emoji}</span>
          </div>
          <div className={styles.CardInfo}>
            <h3>{countdown.title}</h3>
            <p>{countdown.daysLeft} days to go</p>
          </div>
        </div>
        <button
          style={{ backgroundColor: countdown.altColor }}
          className={styles.EditButton}
          onClick={onEdit}
        >
          Edit
        </button>
      </div>
    </div>
  );
});

export default Card;

Card.defaultProps = {
  title: 'Not Specified',
  color: '#eee',
  daysLeft: 0,
};
