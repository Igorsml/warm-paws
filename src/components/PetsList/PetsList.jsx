import classes from "./PetsList.module.scss";
import { PetCard } from "../PetCard/PetCard";
import { petsData } from "../../petsData";

// interface PetsListComponent {
//   pets: Array;
//   pet: object;
//   petsData: Array;
// }

export const PetsList = () => {
  return (
    <>
      <h1>Список питомцев</h1>
      <div className={classes.petsList}>
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
      </div>
    </>
  );
};
