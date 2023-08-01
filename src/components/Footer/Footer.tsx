import scss from "./Footer.module.scss";
import { NavLink } from "react-router-dom";
import Telegram from "../../assets/icons/telegram.svg";
import Vk from "../../assets/icons/vk.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Avito from "../../assets/icons/avito.svg";

export const Footer = () => {
  return (
    <footer className={scss.footer}>
      <div className={scss.footerBody}>
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
      </div>
    </footer>
  );
};
