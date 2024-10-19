import styles from './MainContent.module.scss';

const MainContent = ({ children }) => {
  return (
    <div className={styles.mainContent}>
      {children}
    </div>
  );
};

export default MainContent;