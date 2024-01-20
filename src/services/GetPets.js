// import { useState, useEffect } from "react";
import axios from "axios";

export function GetPets() {
  return axios
    .get("http://localhost:3000/pets-list")
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching pets:", error);
      throw error;
    });
}

// а хочу так
// ЛОГ ОШИБОК —→ https://prnt.sc/_GEEVljzt6CV
// export function GetPets() {
//   const [pets, setPets] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/pets-list")
//       .then((response) => {
//         setPets(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching pets:", error);
//         throw error;
//       });
//   }, []);

//   return pets;
// }
