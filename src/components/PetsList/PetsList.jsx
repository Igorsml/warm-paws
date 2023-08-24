import classes from "./PetsList.module.scss";
import { PetCard } from "../PetCard/PetCard";
import { SortPets } from "../SortPets/SortPets";
import { petsData } from "../../petsData";

export const PetsList = () => {
  return (
    <>
      <h1>Список питомцев</h1>
      <SortPets />
      {/* <div className={classes.petsList}>
        {petsData.map((pet) => {
          return (
            <PetCard
              key={pet.id}
              petId={pet.id}
              petName={pet.name}
              petImg={pet.photoUrl}
              petAge={pet.age}
              petWeight={pet.weight}
              petMale={pet.male}
            />
          );
        })}
      </div> */}
    </>
  );
};
