import { NavLink } from "react-router-dom";
import classes from "./GetPet.module.scss";

export const GetPet = () => {
  return (
    <div>
      <strong>Условия передачи питомца: </strong>
      <ul>
        <li className={classes.powListItem}>
          Ознакомить и заполнить{" "}
          <NavLink
            to="https://docs.google.com/document/d/15lKsBKe5WWl-Dide2CF_e1GAWz4eERQJTmwu0qk2AeY/edit"
            target="_blank"
          >
            договор о передаче животного
          </NavLink>
          ;
        </li>
        <li className={classes.powListItem}>
          Оплата дороги до Санкт-Петербурга при получении с хозяина (
          <NavLink to="/contacts" target="_blank">
            уточняйте
          </NavLink>
          );
        </li>
        <li className={classes.powListItem}>
          Предварительное общение с нашим кинологом, который Вам подскажет и
          поможет понять подойдёт ли питомец в Вашу семью, а так же ответит на
          волнующие вопросы.
        </li>
      </ul>
    </div>
  );
};
