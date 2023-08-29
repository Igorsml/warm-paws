import classes from "./SortPets.module.scss";
import { useState, useEffect, useCallback } from "react";

export const SortPets = () => {
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState("");
  const [filterValue, setFilterValue] = useState("");

  return (
    <div>
      <button onClick={() => setOrderType("asc")}> ↑ </button>
      <button onClick={() => setOrderType("desc")}> ↓ </button>
    </div>
  );
};
