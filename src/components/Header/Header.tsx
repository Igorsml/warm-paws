import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.jpg";
import scss from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={scss.header}>
      <div className={scss.layoutMaxWidth}>
        <div className={scss.headerLayout}>
          <NavLink to="/" className={scss.logoLayout}>
            <img className={scss.logo} src={Logo} alt="logo" />
          </NavLink>
          <nav className={scss.nav}>
            <ul className={scss.navBar}>
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
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
