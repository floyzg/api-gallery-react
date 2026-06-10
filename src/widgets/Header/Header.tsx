import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <button className={styles.themeButton}>☀️</button>
    </header>
  );
};
