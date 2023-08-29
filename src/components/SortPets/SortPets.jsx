import classes from "./SortPets.module.scss";
import { useState, useEffect, useCallback } from "react";
import { PetCard } from "../PetCard/PetCard";
import { petsData } from "../../petsData";

interface sortData {
  id: number;
  name: string;
  age: number;
  weight: number;
  male: string;
}

export const SortPets = () => {
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState("");
  const [filterValue, setFilterValue] = useState("");

    const SortData = useCallback((types: sortData) => {
      const types = {
        name: "name",
        // age: "age",
        // weight: "weight",
        // male: "male",
      };
      const sortProperty = types[type];

      const sorted = [...petsData].sort(
        (a, b) => b[sortProperty] - a[sortProperty]
      );
      setData(sorted);
      SortData(sortType);
    }, [sortType]);
    });

console.log('fix')

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFilterValue(e.target.value);

  const filteredList = data.filter(
    (item: sortData) => item.male === filterValue
  );

  return (
    <div>
      <div className={classes.SortBody}>
        <div className={classes.Sort}>
          <h3>Сортировать:</h3>
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
                value="мальчик"
                checked={filterValue === "мальчик"}
                onChange={handleFilterChange}
              />
              мальчик
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="девочка"
                checked={filterValue === "девочка"}
                onChange={handleFilterChange}
              />
              девочка
            </label>
          </div>
        </fieldset>

        <div className={classes.petsList}>
          {filteredList.map((pet) => {
            return (
              <PetCard
                key={pet.id}
                petName={pet.name}
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
              petName={pet.name}
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
