import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={styles.notFoundContainer}>
      <h1 className={styles.notFoundHeading}>404 - Page Not Found</h1>
      <p className={styles.notFoundMessage}>
        The page you are looking for does not exist or has been moved.
      </p>
      <Link to="/" className={styles.backButton}>
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
