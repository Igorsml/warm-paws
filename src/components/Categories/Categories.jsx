import classes from "./Categories.module.scss";
import "./Categories.module.scss";

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
    <div className={classes.categories}>
      <ul className={classes.categoriesList}>
        {categories.map((categoryName, i) => {
          return (
            <li
              key={i}
              onClick={() => onChangeCategory(i)}
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
