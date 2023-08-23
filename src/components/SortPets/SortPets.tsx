import classes from "./SortPets.module.scss";
import { useState } from "react";

export const SortPets = () => {
  const [checked, setSchecked] = useState(false);

  return (
    <div>
      <h2>Sort Pets</h2>
      <div className={classes.SortBody}>
        <div className={classes.Sort}>
          <h3>Сортировать по</h3>
          <select>
            <option value="name">Имя</option>
            <option value="age">Возраст</option>
            <option value="age">Вес</option>
            <option value="age">Пол</option>
          </select>
        </div>
        <label>
          <input type="checkbox" checked={checked} onChange={setSchecked} />
          My Value
        </label>
      </div>
    </div>
  );
};
