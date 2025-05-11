const cars = [
  { make: "Toyota", model: "Corolla", year: 2020 },
  { make: "Honda", model: "Civic", year: 2019 },
  { make: "Ford", model: "Mustang", year: 2021 },
  { make: "Tesla", model: "Model 3", year: 2022 },
  { make: "Chevrolet", model: "Camaro", year: 2018 },
];

const sortCarsByManufacturingYear = (cars) => {
  cars.sort((a, b) => a.year - b.year);
  console.log(cars);
};
sortCarsByManufacturingYear(cars);
