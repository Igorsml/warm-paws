import { useState, useEffect } from "react";
import { Categories } from "../Categories/Categories";
import { PetCard } from "../PetCard/PetCard";
import { SortPets } from "../SortPets/SortPets";
import classes from "./PetsList.module.scss";
import "react-loading-skeleton/dist/skeleton.css";

const mockData = "https://64ed8ea61f872182714160f3.mockapi.io/pets/pets";

export const PetsList = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    name: "Имя",
    sortProperty: "name",
  });
  const [orderType, setOrderType] = useState("asc");
  // &order=${orderType}

  useEffect(() => {
    setIsLoading(true);
    fetch(`${mockData}`).then((response) => {
      response.json().then((data) => {
        setTimeout(() => {
          setItems(data);
          setIsLoading(false);
        });
      }, 1000);
    });
    window.scrollTo(0, 0);
  }, [categoryId]);

  return (
    <>
      <div className={classes.petsListSort}>
        <Categories
          value={categoryId}
          onChangeCategory={(id) => setCategoryId(id)}
        />
        <SortPets value={sortType} onChangeSort={(i) => setSortType(i)} />
      </div>
      <div className={classes.petsList}>
        {items.map((obj) => (
          <PetCard key={obj.id} data={obj} isLoading={isLoading} />
        ))}
      </div>
    </>
  );
};
