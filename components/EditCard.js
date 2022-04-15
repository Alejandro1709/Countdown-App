import React, { useState, useEffect } from 'react';
import { CirclePicker } from 'react-color';
import { slugifyText } from '../utils/slugify';
import { useRouter } from 'next/router';
import { supabase } from '../utils/supabaseClient';
import { v4 } from 'uuid';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from '../styles/CreateCard.module.css';
import chroma from 'chroma-js';

function EditCard({ onCancel, handleCreate }) {
  const countdown = JSON.parse(localStorage.getItem('currentCountdown'));

  const [title, setTitle] = useState(countdown.title);
  const [color, setColor] = useState(countdown.color);
  const [emoji, setEmoji] = useState(countdown.emoji);
  const [startDate, setStartDate] = useState(new Date(countdown.date));
  const [selectedCountdown, setSelectedCountdown] = useState({});

  useEffect(() => {
    const getCountdown = async () => {
      try {
        const { data, error } = await supabase
          .from('countdowns')
          .select('*')
          .eq('slug', countdown.slug);

        setSelectedCountdown(data[0]);
      } catch (error) {
        console.error(error);
      }
    };
    getCountdown();
  }, []);

  const onSwatchHover = (color) => {
    setColor(color);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (title === '' || !color || !startDate) {
      alert('Please fill out the required fields!');
      return;
    }

    const countdownToUpdate = {
      title,
      color,
      altColor: chroma(countdown.color).darken(0.5).hex(),
      emoji,
      date: startDate,
    };

    try {
      const { data, error } = await supabase
        .from('countdowns')
        .update(countdownToUpdate)
        .match({ slug: countdown.slug });
    } catch (error) {
      console.log(error);
    }
    handleCreate(countdownToUpdate);
    history.push('/');
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
              dateFormat='yyyy/MM/dd'
              selected={new Date(countdown.date)}
              closeOnScroll={true}
              onChange={(date) => setStartDate(date)}
            />
          </div>
          <div className={styles.ColorGroup}>
            <label htmlFor='title'>Color:</label>
            <CirclePicker
              color={selectedCountdown.color}
              onChangeComplete={onSwatchHover}
            />
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
            Edit Countdown
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

export default EditCard;
