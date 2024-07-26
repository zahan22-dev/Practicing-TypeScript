// Making an array of magicians name
const magicians:string[]=["Zahan","Zaid","Abdullah","Ebad"];
// Making a function that shows the magicians name
function showMagicians(magicians:string[]):void{
    magicians.forEach(magician => {
      console.log(magician)  
    })
}
// Calling the function, it will print the names
console.log("When the list is not modified")
showMagicians(magicians);
console.log("When the list is modified")

function makeGreat(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `the Great ${magicians[i]}`;
    }
}

// Modify the list of magicians by adding "the Great"
makeGreat(magicians);

// Show the modified list of magicians
console.log("\nAfter adding 'the Great':");
showMagicians(magicians);