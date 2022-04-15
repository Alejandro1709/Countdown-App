import React, { useState } from 'react';
import { CirclePicker } from 'react-color';
import { slugifyText } from '../utils/slugify';
import { supabase } from '../utils/supabaseClient';
import { getDaysDifference } from '../utils/dates';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from '../styles/CreateCard.module.css';
import chroma from 'chroma-js';

function CreateCard({ onCancel, handleCreate }) {
  const [title, setTitle] = useState('');
  const [color, setColor] = useState('');
  const [emoji, setEmoji] = useState('');
  const [startDate, setStartDate] = useState(new Date());

  const onSwatchHover = (color) => {
    setColor(color);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (title === '' || !color || !startDate) {
      alert('Please fill out the required fields!');
      return;
    }

    const user = supabase.auth.user();

    const newCountdown = {
      title: title,
      slug: slugifyText(title),
      color: color.hex,
      altColor: chroma(color.hex).darken(0.5).hex(),
      emoji: emoji,
      user: user.id,
      date: startDate,
      daysLeft: getDaysDifference(startDate),
    };

    console.log(newCountdown);
    try {
      const { data, error } = await supabase
        .from('countdowns')
        .insert([newCountdown]);
    } catch (error) {
      console.error(error);
    }

    handleCreate(newCountdown);
  };

  return (
    <div className={styles.CreateCard}>
      <div className={styles.Wrapper}>
        <form onSubmit={onSubmit} className={styles.Form}>
          <div className={styles.FormGroup}>
            <label htmlFor='title'>Title:</label>
            <input
              type='text'
              name='title'
              id='title'
              placeholder='Graduation'
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
            <CirclePicker onChangeComplete={onSwatchHover} />
          </div>
          <div className={styles.FormGroup}>
            <label htmlFor='emoji'>Emoji:</label>
            <input
              type='text'
              name='emoji'
              id='emoji'
              value={emoji}
              onChange={(e) => setEmoji(e.target.value)}
            />
          </div>
          <button className={styles.SubmitButton} type='submit'>
            Create Countdown
          </button>
          <button
            className={styles.CancelButton}
            type='button'
            onClick={onCancel}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateCard;
