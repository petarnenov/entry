import styles from "./MainWrapper.module.scss";

const MainWrapper = ({ children }) => {
	return (
		<main className={styles.mainWrapper}>
			{children}
		</main>
	);
};

export default MainWrapper;
