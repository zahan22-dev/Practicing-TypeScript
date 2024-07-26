let guests:string[] = ["Zahan","Ibad","Ayesha","Zaid","Abdullah"];
let notcomingguest = guests[0];
console.log(notcomingguest, "is not coming.");
guests.splice(0,1,"Arham");
console.log("We have just found a bigger dinner table.")
guests.unshift("Obama");

guests.push("Altaf");

let middlename: number = Math.floor(guests.length/2);

guests.splice(middlename,0,"Fizza");

console.log("Check out I just updated the list of guest!");

guests.forEach(guest => console.log(`${guest}, I am inviting you for a dinner tonight.`));
