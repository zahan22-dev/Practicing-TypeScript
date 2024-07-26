// MAking variables.
let car ="Accord";
let carOwner ="Zahan Uddin Khan";
let carPrice = 10000
let persons =["Zahan","Ebad","Zaid","Abdullah"]
// Test 1:
console.log("Is car accord?");
console.log(car == 'Accord');
// Test 2:
console.log("Is car Owner name's Zahan Uddin Khan");
console.log(carOwner == 'Zahan Uddin Khan');
// Test 3:
console.log("Is this car price 10000?");
console.log(carPrice == 10000);
// Test 4:
console.log("This car is not owned by M.Zaid Khan?");
console.log(carOwner != 'M.Zaid Khan');
// Test 5:
console.log("Is this car price more than 5000?");
console.log(carPrice > 5000);
// Test 6:
console.log("Is car Civic?");
console.log(car == 'Civic');
// Test 7:
console.log("Is car Owner name's M.Zaid Khan");
console.log(carOwner == 'Zaid Uddin Khan');
// Test 8:
console.log("Is this car price's greator than 10000?");
console.log(carPrice > 10000);
// Test 9:
console.log("This car is owned by M.Zaid Khan.");
console.log(carOwner == 'M.Zaid Khan');
// Test 10:
console.log("Is this car price less than 5000?");
console.log(carPrice < 5000);
// Test using and && operators.
console.log("Car price is greator than 5000 and equals to 10000");
console.log(carPrice > 5000 && carPrice == 10000);

console.log("Car price is greator than 5000 and not equals to 10000");
console.log(carPrice > 5000 && carPrice != 10000);
// Test using or operators.(||) for or
console.log("Car price is less than 20000 and equals to 10000");
console.log(carPrice < 20000 || carPrice == 10000);

console.log("Car price is less than 10000 and equals to 5000");
console.log(carPrice < 10000 || carPrice == 5000);
// Test whether the item is in array
console.log("Is Zahan in the guestlist");
console.log(persons.includes("Zahan"));
// ! for using not including function.
console.log("Is Zaid not in the guestlist");
console.log(!persons.includes("Zaid"));

