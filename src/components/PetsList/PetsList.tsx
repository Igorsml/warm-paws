import classes from "./PetsList.module.classes";
import { PetCard } from "../PetCard/PetCard";

export const PetsList = (props) => {
  return (
    <div className={classes.booksList}>
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
