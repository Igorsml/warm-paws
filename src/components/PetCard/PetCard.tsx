import classes from "./PetCard.module.scss";
import { Link } from "react-router-dom";

export const PetCard = (props) => {
  return (
    <div className={classes.petCard}>
      <img className={classes.petCardImg} src={props.petCardImg} alt="img" />

      {props.petName ? (
        <h3>Имя питомца: {props?.petName}</h3>
      ) : (
        "Имя питомца: уточняется"
      )}
      {props.petSize ? (
        <h3>Вырастет: {props?.petSize}</h3>
      ) : (
        "Вырастет: уточняется"
      )}

      {props.petMale ? <h3>Пол: {props?.petMale}</h3> : "Пол: уточняется"}
    </div>
  );
};
