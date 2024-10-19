import React from 'react';
import { Link } from 'react-router-dom';
import styles from './TopNavigation.module.scss';

const TopNavigation = () => {
  return (
    <nav className={styles.topNav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to="/" className={styles.navLink}>Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/users" className={styles.navLink}>Users</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/info" className={styles.navLink}>Info</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/about" className={styles.navLink}>About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default TopNavigation;