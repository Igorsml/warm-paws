import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.jpg";
import classes from "./Header.module.classes";

export const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.layoutMaxWidth}>
        <div className={classes.headerLayout}>
          <NavLink to="/" className={classes.logoLayout}>
            <img className={classes.logo} src={Logo} alt="logo" />
          </NavLink>
          <nav className={classes.nav}>
            <ul className={classes.navBar}>
              <li>
                <NavLink to="/about">О нас</NavLink>
              </li>
              <li>
                <NavLink to="/get-pet">Стать хозяином</NavLink>
              </li>
              <li>
                <NavLink to="/want-help">Хочу помочь</NavLink>
              </li>
              <li>
                <NavLink to="/contacts">Контакты</NavLink>
              </li>
              <li>
                <NavLink to="/events">События</NavLink>
              </li>
              <li>
                <NavLink to="/pets-list">Питомцы</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
