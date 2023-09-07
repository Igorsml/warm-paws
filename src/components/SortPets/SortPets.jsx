import classes from "./SortPets.module.scss";
import { useState } from "react";
import cn from "classnames";

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
      <b>Сортировать по: </b>
      <span
        className={classes.sortSelectedValue}
        onClick={() => setOpen(!open)}
      >
        {value.name}
      </span>
      {open && (
        <ul className={classes.sortList}>
          {list.map((obj, i) => (
            <li
              key={i}
              onClick={() => onClickListItem(obj)}
              className={cn(
                classes.sortListItem +
                  (value.sortProperty === obj.sortProperty ? "active" : "")
              )}
            >
              {obj.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
