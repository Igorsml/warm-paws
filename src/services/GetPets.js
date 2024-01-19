import { useState, useEffect } from "react";
import axios from "axios";

export function GetPets() {
  return axios
    .get("http://localhost:3000/pets-list")
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching pets:", error);
      throw error; // Re-throw the error to be handled in the calling function
    });
}
