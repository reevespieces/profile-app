import styles from "../styles/navbar.module.css"
import { Link } from "react-router-dom";
import { useContext } from "react";
import ModeContext from "../context/ModeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ModeContext)
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
          className={styles.themeToggle}
          onClick={toggleTheme}
        >
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </nav>

  );
};

export default Navbar;