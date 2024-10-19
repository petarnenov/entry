import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SidebarNavigation.module.scss';

const SidebarNavigation = () => {
  return (
    <nav className={styles.sideNav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to="/dashboard" className={styles.navLink}>Dashboard</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/profile" className={styles.navLink}>Profile</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/settings" className={styles.navLink}>Settings</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/messages" className={styles.navLink}>Messages</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/help" className={styles.navLink}>Help</Link>
        </li>
      </ul>
    </nav>
  );
};

export default SidebarNavigation;