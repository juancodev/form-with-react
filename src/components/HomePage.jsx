import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import instagramIcon from '../assets/icons/icon-instagram.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';
import githubIcon from '../assets/icons/icon-github.svg';
import styles from '../styles/HomePage.module.scss';

const HomePage = () => {
  const { width, height } = useWindowSize()
  const { user, logout } = useAuth();
  const logoutUser = async () => {
    await logout();
  };

  return (
    <>
      <Confetti
        width={width}
        height={height}
        recycle={false}
      />
      <div className=''>
        <div className={styles['title-container']}>
          <h1 className={styles['title-h1']}>
            Welcome
            <span>
              {user.email}
            </span>
            <p>
              👋
            </p>
          </h1>
          <button onClick={logoutUser}>Logout</button>
        </div>
        <div className={styles['social-media']}>
          <div className={styles["icon-social-media"]}>
            <Link to="https://www.instagram.com/juancodev/"
              target="_blank">
              <img src={instagramIcon} alt="my instagram" width={60} />
            </Link>
            <p>@juancodev</p>
          </div>
          <div className={styles["icon-social-media"]}>
            <Link to="https://www.linkedin.com/in/juancodev/"
              target="_blank">
              <img src={linkedinIcon} alt="my linkedin" width={60} />
            </Link>
            <p>juancodev</p>
          </div>
          <div className={styles["icon-social-media"]}>
            <Link to="https://github.com/juancodev"
              target="_blank">
              <img src={githubIcon} alt="my github" width={60} />
            </Link>
            <p>juancodev</p>
          </div>
        </div>
      </div>
    </>
  );
};

export { HomePage };
