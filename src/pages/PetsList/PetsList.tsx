import scss from "./PetsList.module.scss";
import { PetCard } from "../../components/PetCard/PetCard";

export const PetsList = (props) => {
  return (
    <>
      <div className={scss.booksList}>
        {props?.books.map((pet) => {
          try {
            return (
              <PetCard
                key={pet?.id}
                petLink={pet.volumeInfo?.previewLink}
                petImg={pet.imageLinks?.thumbnail}
                petName={pet.volumeInfo?.name}
                petId={pet?.id}
              />
            );
          } catch (err) {
            console.error(err);
          }
        })}
      </div>
    </>
  );
};
