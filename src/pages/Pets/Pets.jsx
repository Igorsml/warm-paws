import { useState, useEffect } from "react";
import { Categories } from "../../components/Categories/Categories";
import { PetCard } from "../../components/PetCard/PetCard";
import { SortPets } from "../../components/SortPets/SortPets";

const mockData = "https://64ed8ea61f872182714160f3.mockapi.io/pets/pets";

export const Pets = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    name: "Имя",
    sortProperty: "name",
  });
  const [orderType, setOrderType] = useState("asc");

  useEffect(() => {
    setIsLoading(true);
    fetch(`${mockData}&order=${orderType}`).then((response) => {
      response.json().then((data) => {
        setItems(data);
        setIsLoading(false);
      });
    });
    window.scrollTo(0, 0);
  }, [categoryId]);

  return (
    <div>
      <Categories
        value={categoryId}
        onChangeCategory={(id) => setCategoryId(i)}
      />
      <SortPets value={sortType} onChangeSort={(i) => setSortType(i)} />
      {isLoading
        ? [new Array(6)].map((_, index) => <Skeleton key={index} />)
        : items.map((obj) => <PetCard key={obj.id} data={obj} />)}
    </div>
  );
};
