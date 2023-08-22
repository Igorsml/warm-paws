import classes from "./PetsList.module.scss";
import { PetCard } from "../PetCard/PetCard";

export const PetsList = (props) => {
  return (
    <div className={classes.petsList}>
      {props.pets.map((pet) => {
        <PetCard
          key={pet.id}
          petImg={pet.imageLinks?.thumbnail}
          petName={pet.volumeInfo?.name}
          petId={pet?.id}
        />;
      })}
    </div>
  );
};
