import styles from "./styles.module.css";

export const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <span className={styles.headerText}>Catalog</span>
      </div>
    </div>
  );
};
