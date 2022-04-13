import React, { useState } from 'react';
import { CirclePicker } from 'react-color';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from '../styles/CreateCard.module.css';

function CreateCard() {
  const [color, setColor] = useState('');
  const [startDate, setStartDate] = useState(new Date());

  const onSwatchHover = (color) => {
    setColor(color);
  };

  return (
    <div className={styles.CreateCard}>
      <div className={styles.Wrapper}>
        <form className={styles.Form}>
          <div className={styles.FormGroup}>
            <label htmlFor='title'>Title:</label>
            <input
              type='text'
              name='title'
              id='title'
              placeholder='Graduation'
            />
          </div>
          <div className={styles.FormGroup}>
            <label htmlFor='date'>Date:</label>
            <DatePicker
              closeOnScroll={true}
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
          <div className={styles.ColorGroup}>
            <label htmlFor='title'>Color:</label>
            <CirclePicker onSwatchHover={onSwatchHover} />
          </div>
          <div className={styles.FormGroup}>
            <label htmlFor='emoji'>Emoji:</label>
            <input type='text' name='emoji' id='emoji' />
          </div>
          <button
            style={{
              backgroundColor: color ? color.hex : '#46e97d',
            }}
            className={styles.SubmitButton}
            type='submit'
          >
            Create Countdown
          </button>
          <button className={styles.CancelButton} type='button'>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateCard;
