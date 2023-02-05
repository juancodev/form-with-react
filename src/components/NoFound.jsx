import React from 'react';
import notFoundImage from '../assets/error404/error404-notfound.jpg';
import styles from '../styles/NotFound.module.scss';

const NoFound = () => {
  return (
    <div className={styles.divImage}>
      <img
        className={styles.notFoundImage}
        src={notFoundImage}
        alt="Not Found"
      />
    </div>
  )
}

export { NoFound }