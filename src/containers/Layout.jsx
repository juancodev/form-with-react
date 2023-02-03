import React from 'react';
import styles from '../styles/Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};

export { Layout };
