import classes from "./PetCard.module.scss";

export const PetCard = (props) => {
  return (
    <div className={classes.petCard}>
      <h2>{props.petName || "Имя питомца: уточняется"}</h2>
      <div className={classes.petImgContainer}>
        <img className={classes.petImg} src={props.petImg} alt="img" />
      </div>
      <p>
        Возраст: {props.petAge || "Возраст: уточняется"}{" "}
        {props.petAge === 1 ? "год" : "лет"}
      </p>
      <p>Вес: {props.petWeight || "Возраст: уточняется"} кг</p>
      <p>Пол: {props.petMale || "Пол: уточняется"}</p>
    </div>
  );
};
