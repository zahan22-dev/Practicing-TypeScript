// Making an array of magicians name
const magiciansName:string[]=["Zahan","Zaid","Abdullah","Ebad"];
// Making a function that shows the magicians name
function showMagicians(magicians:string[]):void{
    magicians.forEach(magician => {
      console.log(magician)  
    })
}
// Calling the function, it will print the names
showMagicians(magiciansName);