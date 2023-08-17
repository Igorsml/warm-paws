import { NavLink } from "react-router-dom";
import classes from "./Footer.module.classes";
import Logo from "../../assets/images/logo.jpg";
import Telegram from "../../assets/icons/telegram.svg";
import Vk from "../../assets/icons/vk.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Avito from "../../assets/icons/avito.svg";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={classes.footerBody}>
      <div className={classes.layoutMaxWidth}>
        <footer className={classes.footer}>
          <div>
            <img className={classes.logo} src={Logo} alt="logo" />
            <p>© 2008 — {currentYear} «Тёплые лапки»</p>
          </div>
          <div className={classes.socialIcons}>
            <NavLink
              className={classes.socialIconLink}
              to="https://vk.com/public211358147"
              target="_blank"
            >
              <img src={Vk} alt="vk" />
            </NavLink>
            <NavLink
              className={classes.socialIconLink}
              to="https://t.me/tioplyelapki"
              target="_"
            >
              <img src={Telegram} alt="telegram" />
            </NavLink>
            <NavLink
              className={classes.socialIconLink}
              to="https://instagram.com/tioplyelapki"
              target="_"
            >
              <img src={Instagram} alt="instagram" />
            </NavLink>
            <NavLink
              className={classes.socialIconLink}
              to="https://www.avito.ru/user/1bbf74c5e66eaf0216620c1c677d6961/profile?id=2430999295"
              target="_"
            >
              <img src={Avito} alt="avito" />
            </NavLink>
          </div>
        </footer>
      </div>
    </div>
  );
};
