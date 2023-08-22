interface Data {
  id: number;
  name: string;
  photo: string;
  age: number;
  weight: number;
  male: string;
}

export const petsData: Data[] = [
  {
    id: 1,
    name: "Timmy",
    photo: "https://images.dog.ceo/breeds/mastiff-bull/n02108422_1836.jpg",
    age: 9,
    weight: 10.5,
    male: "male",
  },
  {
    id: 2,
    name: "Miley",
    photo: "https://images.dog.ceo/breeds/mastiff-bull/n02108422_1836.jpg",
    age: 1,
    weight: 10.5,
    male: "female",
  },
  {
    id: 3,
    name: "Miriam",
    photo: "https://images.dog.ceo/breeds/mastiff-bull/n02108422_1836.jpg",
    age: 9,
    weight: 7,
    male: "female",
  },
];
