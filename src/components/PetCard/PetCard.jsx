import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import classes from "./PetCard.module.scss";

export const PetCard = (props) => {
  return (
    <div className={classes.petCard}>
      <SkeletonTheme color="#202020" highlightColor="#444">
        <div className={classes.petImgContainer}>
          <img
            className={classes.petImg}
            src={props.data.photoUrl + +new Date()}
            alt="img"
          />
        </div>
        <h2>{props.data.name || <Skeleton />}</h2>
        <p>
          Возраст: {props.data.age || <Skeleton /> || "Возраст: уточняется"}
          {props.data.age === 1 ? "год" : "лет"}
        </p>
        <p>
          Вес: {props.data.weight || <Skeleton /> || "Возраст: уточняется"} кг
        </p>
        <p>Пол: {props.data.male || <Skeleton /> || "Пол: уточняется"}</p>
      </SkeletonTheme>
    </div>
  );
};
