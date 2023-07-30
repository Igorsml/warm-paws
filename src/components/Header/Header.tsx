import logo from "../../assets/images/logo.jpg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo" />
      <nav>
        <ul>
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
