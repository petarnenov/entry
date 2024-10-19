import { Link } from 'react-router-dom';

import styles from './BottomNavigation.module.scss';

const BottomNavigation = () => {
  return (
    <nav className={styles.bottomNav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to="/home" className={styles.navLink}>
            <span className={styles.navIcon}>🏠</span>
            <span className={styles.navText}>Home</span>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/search" className={styles.navLink}>
            <span className={styles.navIcon}>🔍</span>
            <span className={styles.navText}>Search</span>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/favorites" className={styles.navLink}>
            <span className={styles.navIcon}>⭐</span>
            <span className={styles.navText}>Favorites</span>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/profile" className={styles.navLink}>
            <span className={styles.navIcon}>👤</span>
            <span className={styles.navText}>Profile</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNavigation;