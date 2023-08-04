import { NavLink } from "react-router-dom";
import scss from "./Footer.module.scss";
import Logo from "../../assets/images/logo.jpg";
import Telegram from "../../assets/icons/telegram.svg";
import Vk from "../../assets/icons/vk.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Avito from "../../assets/icons/avito.svg";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={scss.footerBody}>
      <div className={scss.layoutMaxWidth}>
        <footer className={scss.footer}>
          <div>
            <img className={scss.logo} src={Logo} alt="logo" />
            <p>© 2008 — {currentYear} «Тёплые лапки»</p>
          </div>
          <div className={scss.socialIcons}>
            <NavLink
              className={scss.socialIconLink}
              to="https://vk.com/public211358147"
            >
              <img src={Vk} alt="vk" />
            </NavLink>
            <NavLink
              className={scss.socialIconLink}
              to="https://t.me/tioplyelapki"
            >
              <img src={Telegram} alt="telegram" />
            </NavLink>
            <NavLink
              className={scss.socialIconLink}
              to="https://instagram.com/tioplyelapki"
            >
              <img src={Instagram} alt="instagram" />
            </NavLink>
            <NavLink
              className={scss.socialIconLink}
              to="https://www.avito.ru/user/1bbf74c5e66eaf0216620c1c677d6961/profile?id=2430999295"
            >
              <img src={Avito} alt="avito" />
            </NavLink>
          </div>
        </footer>
      </div>
    </div>
  );
};
