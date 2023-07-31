import logo from "../../assets/images/logo.jpg";
import { NavLink } from "react-router-dom";
import scss from "./Header.module.scss";

const Header = () => {
  return (
    <header className={scss.header}>
      <img className={scss.logo} src={logo} alt="logo" />
      <nav>
        <ul className={scss.navBar}>
          <li>
            <NavLink to="/about">О нас</NavLink>
          </li>
          <li>
            <NavLink to="/slave-master">Стать хозяином</NavLink>
          </li>
          <li>
            <NavLink to="/contacts">Контакты</NavLink>
          </li>
          <li>
            <NavLink to="/events">События</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
