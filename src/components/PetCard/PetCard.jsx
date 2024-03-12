import { usePetsContext } from "../../contexts/PetsContext";
import classes from "./PetCard.module.scss";

export const PetCard = (props) => {
  const { pets } = usePetsContext();

  return (
    <>
      <ul className={classes.petsList}>
        {pets.map((pet) => (
          <li className={classes.petCard} key={pet.id}>
            <h2>{pet.name}</h2>
            <img className={classes.petImg} src={pet.photoUrl} alt={pet.name} />
            <p>Возраст (месяцев): {pet.age}</p>
            <p>Пол: {pet.gender}</p>

            {props.order.every((petOrder) => petOrder.id !== pet.id) && <button onClick={() => props.addToOrder(pet.id)}>Приютить</button>}
          </li>
        ))}
      </ul>
    </>
  );
};
