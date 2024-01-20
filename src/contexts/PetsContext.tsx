import {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
  useEffect,
} from "react";
import { Pet, PetsContextType, PetsProviderProps } from "../types/PetTypes";
import { GetPets } from "../services/GetPets";

const PetsContext = createContext<PetsContextType>({
  pets: [],
  addPet: () => {},
  removePet: () => {},
  updatePet: () => {},
});

const PetsProvider = ({ children }: PetsProviderProps) => {
  const [pets, setPets] = useState<Pet[]>([]);
  // хочу так const [pets, setPets] = useState<Pet[]>(() => GetPets());

  useEffect(() => {
    GetPets()
      .then((fetchedPets: Pet[]) => {
        setPets(fetchedPets);
      })
      .catch((error: Error) => {
        console.error("Error fetching pets:", error);
      });
  }, []);

  const addPet = useCallback(
    (pet: Pet) => {
      setPets([...pets, pet]);
    },
    [pets]
  );

  const removePet = useCallback(
    (id: number) => {
      setPets(pets.filter((pet: Pet) => pet.id !== id));
    },
    [pets]
  );

  const updatePet = useCallback(
    (id: number, newPet: Partial<Pet>) => {
      setPets(
        pets.map((pet: Pet) => (pet.id === id ? { ...pet, ...newPet } : pet))
      );
    },
    [pets]
  );

  const contextValue = useMemo(
    () => ({
      pets,
      addPet,
      removePet,
      updatePet,
    }),
    [pets, addPet, removePet, updatePet]
  );

  return (
    <PetsContext.Provider value={contextValue}>{children}</PetsContext.Provider>
  );
};

const usePets = () => useContext(PetsContext);

export { PetsProvider, usePets };
