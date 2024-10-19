import React from 'react';

import styles from './ErrorBoundaryFallback.module.scss';

const ErrorBoundaryFallback = () => {
	return (
		<div className={styles.errorContainer}>
			<h1 className={styles.errorHeading}>Something went wrong.</h1>
			<p className={styles.errorMessage}>We're sorry for the inconvenience. Please try refreshing the page or come back later.</p>
		</div>
	);
};

export default ErrorBoundaryFallback;
