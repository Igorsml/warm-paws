import classes from "./SortPets.module.scss";
import { useState } from "react";

export const SortPets = ({ value, onChangeSort }) => {
  const [open, setOpen] = useState(false);

  const list = [
    { name: "имя", sort: "name" },
    { name: "вес", sort: "weight" },
    { name: "возраст", sort: "age" },
  ];

  const onClickListItem = (i) => {
    onChangeSort(i);
    setOpen(false);
  };

  return (
    <div>
      <b>Сортировать по:</b>
      <span onClick={() => setOpen(!open)}>{value.name}</span>
      {open && (
        <div className={classes.sort__popup}>
          <ul>
            {list.map((obj, i) => (
              <li
                key={i}
                onClick={() => onClickListItem(obj)}
                className={
                  value.sortProperty === obj.sortProperty ? "active" : ""
                }
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
