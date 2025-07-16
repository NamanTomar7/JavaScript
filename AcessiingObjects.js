let marks = [56, 78, 45, 89, 32, 60, 90, 38];

let passed = marks.filter(mark => mark >=40 );
console.log(passed);

let increased = marks.map(mark => mark+5);
console.log(increased);

let total = marks.reduce((mark,sum) => mark+sum, 0);
console.log(total);

// let car =  {
//     brand: "toyota",
//     model: "fortuner",
//     year: 2020,
//     info : function(){
//         console.log(`${car.brand} ${car.model} (${car.year})`);
//     }, 
//     info2: function(){
//         console.log(` Another Method of using object elements ${this.year}`);
//     }
// };

// car.info();

let cars = [
  { brand: "Toyota", model: "Fortuner", year: 2020 },
  { brand: "Honda", model: "Civic", year: 2018 },
  { brand: "Tesla", model: "Model S", year: 2022 }
];

console.log(`${cars[0].brand} ${cars[0].model} (${cars[0].year})`);
// OR
cars.forEach(car => {
    console.log(`${car.brand} ${car.model} (${car.year})`);
});

let recentCars = cars.filter(car => car.year >= 2020);
console.log(recentCars);

let gaadi={
    brand : "Maruti Suzuki",
    model : "Swift",
    year : 2022
};

gaadi.color = "black"; // Add a property
gaadi.year= 2021; // Update a Property

console.log(gaadi);

delete cars[0].model; // Delete a property
console.log(cars[0]);