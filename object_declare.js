// Works, but is not concise
const myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;

// The better solution
const myOtherCar = {
    make: 'Ford', // Keys can also be string literals
    model: 'Mustang',
    year: 1969,
};

myOtherCar.make === myOtherCar['make']; // Both mean the same thing