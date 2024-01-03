import React, { createContext, useContext, useState } from "react";
import { petsList } from "./petsList";

const PetsContext = createContext(petsList);

const PetsProvider = ({ children }) => {
  const [pets, setPets] = useState(petsList);

  const addPet = (pet) => {
    setPets([...pets, pet]);
  };

  const removePet = (id) => {
    setPets(pets.filter((pet) => pet.id !== id));
  };

  const updatePet = (id, newPet) => {
    setPets(pets.map((pet) => (pet.id === id ? { ...pet, ...newPet } : pet)));
  };

  return (
    <PetsContext.Provider value={{ pets, addPet, removePet, updatePet }}>
      {children}
    </PetsContext.Provider>
  );
};

const usePets = () => useContext(PetsContext);

export { PetsProvider, usePets };
