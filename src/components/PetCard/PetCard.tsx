import scss from "./PetCard.module.scss";
import { Link } from "react-router-dom";

export const PetCard = (props) => {
  try {
    return (
      <div className={scss.petCard}>
        <Link to={props?.petLink} target="_blank" rel="noreferrer">
          <img className={scss.petCardImg} src={props?.petCardImg} alt="img" />

          {props?.petName ? (
            <h3>Имя питомца: {props?.petName}</h3>
          ) : (
            "Имя питомца: уточняется"
          )}
          {props?.petSize ? (
            <h3>Вырастет: {props?.petSize}</h3>
          ) : (
            "Вырастет: уточняется"
          )}

          {props?.petMale ? <h3>Пол: {props?.petMale}</h3> : "Пол: уточняется"}
        </Link>
      </div>
    );
  } catch (err) {
    console.error(err);
  }
};
