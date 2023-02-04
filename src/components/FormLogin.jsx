import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from '../styles/FormLogin.module.scss';

const FormLogin = () => {

  const submit = (event) => {
    event.preventDefault();
    console.log(event);
  };
  return (
    <form onSubmit={submit} className={styles.form}>
      <div className={styles['title-form']}>
        <p>Login</p>
      </div>
      <div className={styles['form_input']}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" required />
      </div>
      <div className={styles['form_input']}>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" required />
      </div>

      <button type='submit'>Login</button>

      <NavLink
        style={({ isActive }) => (isActive) ? { color: 'blue' } : {
          color: '#acd9b2',
          textDecoration: 'none',
          marginTop: '2px'
        }}
        to="/signup">
        Don't have an account?
      </NavLink>

    </form>
  );
}

export { FormLogin };
