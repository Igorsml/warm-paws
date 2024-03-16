import { NavLink } from "react-router-dom";
import classes from "./Contacts.module.scss";
import Telegram from "../../assets/icons/telegram.svg";
import Vk from "../../assets/icons/vk.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Whatsapp from "../../assets/icons/whatsapp.svg";
import { HookForm } from "../../lib/HookForm/HookForm";

export const Contacts = () => {
  return (
    <>
      <p>Связь доступна в текстовом форате или аудиое сообщением на следующих реусрсах:</p>
      <div className={classes.contactLinksList}>
        <NavLink className={classes.socialIconLink} to='https://vk.com/public211358147'>
          <img src={Vk} alt='vk' />
        </NavLink>
        <NavLink className={classes.socialIconLink} to='https://t.me/tioplyelapki'>
          <img src={Telegram} alt='telegram' />
        </NavLink>
        <NavLink className={classes.socialIconLink} to='https://instagram.com/tioplyelapki'>
          <img src={Instagram} alt='instagram' />
        </NavLink>
        <NavLink className={classes.socialIconLink} to='https://api.whatsapp.com/send?phone=79818956652'>
          <img src={Whatsapp} alt='whatsapp' />
        </NavLink>
      </div>
      <HookForm />
    </>
  );
};
