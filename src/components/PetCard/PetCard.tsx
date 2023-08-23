import classes from "./PetCard.module.scss";

export const PetCard = (props) => {
  return (
    <div className={classes.petCard}>
      <h3>Имя питомца: {props.petName || "Имя питомца: уточняется"}</h3>
      <img className={classes.petImg} src={props.petImg} alt="img" />
      <p>Возраст: {props.petAge || "Возраст: уточняется"}</p>
      <p>Вес: {props.petWeight || "Возраст: уточняется"}</p>
      <p>Пол: {props.petMale || "Пол: уточняется"}</p>
    </div>
  );
};
