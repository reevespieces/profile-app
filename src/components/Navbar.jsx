import styles from "../styles/navbar.module.css"

const Navbar = ({toggleStyles, toggleText}) => {
    const buttonText = toggleText === "light-mode" ? "Dark Mode" : "Light Mode";
    return (
    <nav className={styles.nav}>
  <div className={styles.navInner}>
    <ul className={styles.navList}>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#cards">Cards</a></li>
    </ul>

    <button
      className={styles.toggleButton}
      onClick={toggleStyles}
    >
      {buttonText}
    </button>
  </div>
</nav>

  );
};

export default Navbar;