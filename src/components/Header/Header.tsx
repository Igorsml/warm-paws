import logo from "../../assets/images/logo.jpg";
import { NavLink } from "react-router-dom";
import scss from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={scss.header}>
      <div className={scss.headerWrapper}>
        <img className={scss.logo} src={logo} alt="logo" />
        <nav className={scss.nav}>
          <ul className={scss.navBar}>
            <li>
              <NavLink to="/about">О нас</NavLink>
            </li>
            <li>
              <NavLink to="/get-pet">Стать хозяином</NavLink>
            </li>
            <li>
              <NavLink to="/contacts">Контакты</NavLink>
            </li>
            <li>
              <NavLink to="/events">События</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
