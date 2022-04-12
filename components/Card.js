import React from 'react';
import Link from 'next/link';
import styles from '../styles/Card.module.css';

function Card({ countdown }) {
  return (
    <div
      style={{ backgroundColor: countdown.color }}
      className={styles.ListCard}
    >
      {/* Left Side */}
      <div className={styles.LeftSide}>
        {/* Emoji Viewer */}
        <div
          style={{ backgroundColor: countdown.altColor }}
          className={styles.Emoji}
        >
          <span>{countdown.emoji}</span>
        </div>
        {/* Countdown info */}
        <div className={styles.CardInfo}>
          <h3>{countdown.title}</h3>
          <p>{countdown.daysLeft} days to go</p>
        </div>
      </div>
    </div>
  );
}

export default Card;

Card.defaultProps = {
  title: 'Not Specified',
  color: '#eee',
  daysLeft: 0,
};
