let places =["Maldives","Tokyo","Dubai","Switzerland","Australlia",];
console.log("Original order:",places);
// Creating a copy of array and then using the sort function to arrange in alphabetical order.
console.log("Alphabetical order:",[...places].sort());
console.log("Original order:",places);
// using reverse order to print the places in unalphabetical order
console.log("Reverse order:",[...places].reverse());

console.log("Original order:",places);
// reversing the array without making a copy of array.
console.log("Reverse in orgingal order:", places.reverse);
// reversing again the array without making a copy of array.
console.log("Reversing again in orgingal order:", places.reverse);
// sorting the array without making a copy to print.
console.log("Alphabetical order without making a copy:",places.sort());
console.log("Reverse order without making a copy:",places.reverse());
