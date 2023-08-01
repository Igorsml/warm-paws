import scss from "./Footer.module.scss";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className={scss.footer}>
      <p>© 2023</p>
      <NavLink to="https://github.com/Igorsml/warm-paws" target="_blank">
        Source code on github
      </NavLink>
      <div className={scss.socialIcons}></div>
      <NavLink to="https://vk.com/public211358147">
        <img src="./assets/icons/vk.svg" alt="vk" />
      </NavLink>
      <NavLink to="https://t.me/tioplyelapki">
        <img src="../../assets/icons/telegram.svg" alt="telegram" />
      </NavLink>
      <NavLink to="https://instagram.com/tioplyelapki">
        <img src="../../assets/icons/instagram.svg" alt="instagram" />
      </NavLink>
      <NavLink to="https://www.avito.ru/user/1bbf74c5e66eaf0216620c1c677d6961/profile?id=2430999295">
        <img src="../../assets/icons/avito.svg" alt="avito" />
      </NavLink>
    </footer>
  );
};
