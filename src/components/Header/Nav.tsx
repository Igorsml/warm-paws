import { NavLink } from "react-router-dom";
import classes from "./Header.module.scss";

interface NavProps {
  setIsMenuOpen: (isOpen: boolean) => void;
  isMenuOpen: boolean;
}

interface Link {
  caption: string;
  to: string;
}

export const Nav: React.FC<NavProps> = (props) => {
  const handleLinkClick = () => {
    props.setIsMenuOpen(false);
  };

  const links: Link[] = [
    { caption: "О нас", to: "/about" },
    { caption: "Стать хозяином", to: "/get-pet" },
    { caption: "Хочу помочь", to: "/want-help" },
    { caption: "Контакты", to: "/contacts" },
    { caption: "События", to: "/events" },
    { caption: "Питомцы", to: "/pets-list" },
  ];

  return (
    <nav className={classes.nav}>
      <ul
        className={`${classes.navBar} ${props.isMenuOpen ? classes.open : ""}`}
      >
        {links.map((link, index) => (
          <NavLink
            key={index}
            className={classes.navBarLink}
            onClick={handleLinkClick}
            to={link.to}
          >
            {link.caption}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};
