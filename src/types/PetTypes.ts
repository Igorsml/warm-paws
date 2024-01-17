type Pet = {
  id: number;
  name: string;
  age?: number;
};

type PetsContextType = {
  pets: Pet[];
  addPet: (pet: Pet) => void;
  removePet: (id: number) => void;
  updatePet: (id: number, newPet: Partial<Pet>) => void;
};

type PetsProviderProps = {
  children: React.ReactNode;
};

export type {Pet, PetsContextType, PetsProviderProps};