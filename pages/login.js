import React, { useState } from 'react';
import { supabase } from '../utils/supabaseClient';
import styles from '../styles/Login.module.css';

function Login() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  const handleLogin = async (email) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signIn({ email });
      if (error) throw error;
      alert('Check your email for the login link!');
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.Login}>
      <div className={styles.Heading}>
        <h1>Login</h1>
        <p className='description'>
          Sign in via magic link with your email below
        </p>
      </div>
      <div>
        <input
          className={styles.Field}
          type='email'
          placeholder='Your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleLogin(email);
          }}
          className={styles.Button}
          disabled={loading}
        >
          <span>{loading ? 'Loading' : 'Send magic link'}</span>
        </button>
      </div>
    </div>
  );
}

export default Login;
