import { NavLink } from "react-router-dom";
import classes from "./Header.module.scss";

export const Nav = (props) => {
  return (
    <nav className={classes.nav}>
      <ul
        className={`${classes.navBar} ${props.isMenuOpen ? classes.open : ""}`}
      >
        <li>
          <NavLink className={classes.navBarLink} to="/about">
            О нас
          </NavLink>
        </li>
        <li>
          <NavLink className={classes.navBarLink} to="/get-pet">
            Стать хозяином
          </NavLink>
        </li>
        <li>
          <NavLink className={classes.navBarLink} to="/want-help">
            Хочу помочь
          </NavLink>
        </li>
        <li>
          <NavLink className={classes.navBarLink} to="/contacts">
            Контакты
          </NavLink>
        </li>
        <li>
          <NavLink className={classes.navBarLink} to="/events">
            События
          </NavLink>
        </li>
        <li>
          <NavLink className={classes.navBarLink} to="/pets-list">
            Питомцы
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
