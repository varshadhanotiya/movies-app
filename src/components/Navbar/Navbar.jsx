// import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.container}>
      <Link to="/" className={styles.logo}>ShowMovies</Link>

      <div className={styles.right}>
        {/* <div className={styles.search}>
          <input type="text" placeholder="Search movie" />
          <FiSearch />
        </div> */}
        <p className={styles.link}>
          <Link to="/explore">Explore</Link>
        </p>
      </div>
    </div>
  );
}

export default Navbar;
