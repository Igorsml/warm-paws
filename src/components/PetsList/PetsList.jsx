import { useLocalStorage } from "../../hooks/UseLocalStorage";
import { PetCard } from "../PetCard/PetCard";
import { usePetsContext } from "../../contexts/PetsContext";
import classes from "./PetsList.module.scss";

export const PetsList = () => {
  const key = "orders";

  const { pets } = usePetsContext();
  const [order, setOrder] = useLocalStorage([], key);

  const value = `${order.map((item) => item.name)}`;

  const addToOrder = (id) => {
    const newItem = pets.find((item) => item.id === id);

    setOrder([...order, newItem]);
  };

  const handleClear = () => {
    setOrder([]);
  };

  return (
    <>
      {value && <div style={{ display: "flex" }}>Ваш заказ в добрые руки: {value}</div>}
      {value && <button onClick={handleClear}>Очистить заказ</button>}
      <PetCard addToOrder={addToOrder} order={order} />
    </>
  );
};
