import React from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { NavLink, useNavigate } from 'react-router-dom';
import styles from '../styles/FormLogin.module.scss';

const FormLogin = () => {
  const [error, setError] = React.useState();
  const navigate = useNavigate();

  const auth = getAuth();

  const submit = async (event) => {
    event.preventDefault();
    setError('');
    const email = event.target.email.value;
    const password = event.target.password.value;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
      console.log('sign in');
    } catch (error) {
      setError('Your error is: ' + error.code);
    }
  };

  return (
    <>
      {error && <div
        className={styles['error_div']}
      >
        <p className={styles['error_p']}>
          {error}
        </p>
      </div>}

      <form onSubmit={submit} className={styles.form}>
        <div className={styles['title-form']}>
          <p>LOGIN</p>
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
    </>
  );
}

export { FormLogin };
