import { useState, useEffect } from "react";
import axios from "axios";
import { Pet } from "../types/PetTypes";

export const UsePets = () => {
  const [pets, setPets] = useState<Pet>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/pets-list")
      .then((response) => {
        setPets(response.data);
      })
      .catch((error: Error) => {
        console.error("Error fetching pets:", error);
      });
  }, []);

  return [pets, setPets];
};
