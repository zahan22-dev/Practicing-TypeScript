// Making an array of magicians name
var magiciansName = ["Zahan", "Zaid", "Abdullah", "Ebad"];
// Making a function that shows the magicians name
function showMagicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function makeGreat(magicians) {
    magiciansName.forEach(function (magicians) {
        console.log("Great".concat(magicians));
    });
}
// Calling the function, it will print the names
showMagicians(magiciansName);
