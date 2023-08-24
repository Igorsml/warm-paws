import classes from "./SortPets.module.scss";
import { useState, useEffect } from "react";
import { PetCard } from "../PetCard/PetCard";
import { petsData } from "../../petsData";

export const SortPets = () => {
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState("age");
  const [filterValue, setFilterValue] = useState(""); // State for the selected filter value

  useEffect(() => {
    const sortData = (type) => {
      const types = {
        name: "name",
        age: "age",
        weight: "weight",
      };
      const sortProperty = types[type];

      const sorted = [...petsData].sort(
        (a, b) => b[sortProperty] - a[sortProperty]
      );
      // const filtered = [...petsData].filter((elem) => petsData.male === elem);

      // setData(filtered);
      setData(sorted);
    };

    sortData(sortType);
  }, [sortType]);

  const handleFilterChange = (e) => setFilterValue(e.target.value);

  const filteredList = data.filter((item) => item.male === filterValue);

  return (
    <div>
      <div className={classes.SortBody}>
        <div className={classes.Sort}>
          <h3>Сортировать по</h3>
          <select
            className={classes.selectDropdown}
            onChange={(event) => setSortType(event.target.value)}
          >
            <option value="name">Имя</option>
            <option value="age">Возраст</option>
            <option value="weight">Вес</option>
          </select>
        </div>
        <fieldset>
          <legend>Пол:</legend>
          <div className={classes.inputsBody}>
            <label>
              <input
                type="radio"
                name="gender"
                value=""
                checked={filterValue === ""}
                onChange={handleFilterChange}
              />
              Любой
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="кобель"
                checked={filterValue === "кобель"}
                onChange={handleFilterChange}
              />
              Кобель
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="сука"
                checked={filterValue === "сука"}
                onChange={handleFilterChange}
              />
              Сука
            </label>
          </div>
        </fieldset>

        <div className={classes.petsList}>
          {filteredList.map((pet) => {
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
      </div>
      <div className={classes.petsList}>
        {data.map((pet) => {
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
    </div>
  );
};
