import classes from "./Categories.module.scss";
import cn from "classnames";

export const Categories = ({ value, onChangeCategory }) => {
  const categories = [
    "Все",
    "Щенки",
    "Котята",
    "Собаки",
    "Кошки",
    "Экзотические",
  ];

  return (
    <ul className={classes.categoriesList}>
      {categories.map((categoryName, i) => {
        return (
          <li
            key={i}
            onClick={() => onChangeCategory(i)}
            className={cn(
              classes.categoriesListItem + (value === i ? "active" : "")
            )}
          >
            {categoryName}
          </li>
        );
      })}
    </ul>
  );
};
