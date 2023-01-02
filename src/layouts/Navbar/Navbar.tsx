import styles from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";
import * as Route from "../../routes";

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <NavLink to={Route.List}>Home</NavLink>
      <NavLink to={Route.Favorites}>Favorites</NavLink>
    </header>
  );
};

export default Navbar;
