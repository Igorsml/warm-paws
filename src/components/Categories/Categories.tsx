import classes from "./Categories.module.scss";
import { useState } from "react";

interface CategoriesProps {
  categories: Array<string>;
  value: number;
}

export const Categories = ({ value, onClickCategory }): CategoriesProps => {
  const categories = [
    "Все",
    "Щенки",
    "Котята",
    "Собаки",
    "Кошки",
    "Экзотические",
  ];

  return (
    <div className={classes.categories}>
      <ul>
        {categories.map((categoryName, i) => {
          return (
            <li
              key={i}
              onClick={() => onClickCategory(i)}
              className={value === i ? "active" : ""}
            >
              {categoryName}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
