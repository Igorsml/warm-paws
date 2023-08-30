import { useState, useEffect } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Categories } from "../Categories/Categories";
import { PetCard } from "../PetCard/PetCard";
import { SortPets } from "../SortPets/SortPets";
import classes from "./PetsList.module.scss";
import "react-loading-skeleton/dist/skeleton.css";

const mockData = "https://64ed8ea61f872182714160f3.mockapi.io/pets/pets";
const skeletonLimit = 6;
const skeletonLinesCount = 4;

export const PetsList = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    name: "Имя",
    sortProperty: "name",
  });
  const [orderType, setOrderType] = useState("asc");
  // &order=${orderType}

  useEffect(() => {
    setIsLoading(true);
    fetch(`${mockData}`).then((response) => {
      response.json().then((data) => {
        setTimeout(() => {
          setItems(data);
          setIsLoading(false);
        });
      }, 1000);
    });
    window.scrollTo(0, 0);
  }, [categoryId]);

  return (
    <div>
      <Categories
        value={categoryId}
        onChangeCategory={(id) => setCategoryId(id)}
      />
      <SortPets value={sortType} onChangeSort={(i) => setSortType(i)} />
      <div className={classes.petsList}>
        <SkeletonTheme
          baseColor="#5294e0"
          highlightColor="#96c7ff"
          borderRadius="0.5rem"
          duration={2}
        >
          {isLoading
            ? [...new Array(skeletonLimit)].map((_, index) => {
                <>
                  <Skeleton
                    circle={true}
                    height={200}
                    width={200}
                    key={index}
                  />
                  <Skeleton
                    count={skeletonLinesCount}
                    duration={2}
                    width={200}
                    height={20}
                  />
                </>;
              })
            : items.map((obj) => <PetCard key={obj.id} data={obj} />)}
        </SkeletonTheme>
      </div>
    </div>
  );
};

// <PetCard
//   key={pet.id}
//   petId={pet.id}
//   petName={pet.name}
//   petImg={pet.photoUrl}
//   petAge={pet.age}
//   petWeight={pet.weight}
//   petMale={pet.male}
// />
