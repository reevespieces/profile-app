import styles from "../styles/navbar.module.css"
import { Link } from "react-router-dom";

const Navbar = ({toggleStyles, toggleText}) => {
    const buttonText = toggleText === "light-mode" ? "Dark Mode" : "Light Mode";
    return (
    <nav className={styles.nav}>
  <div className={styles.navInner}>
    <ul className={styles.navList}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/add-profile">Add Profile</Link></li>
      <li><Link to="/fetched-profiles">Other Profiles</Link></li>
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