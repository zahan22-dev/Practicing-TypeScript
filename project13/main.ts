let guests = ["Zahan","Ibad","Ayesha","Zaid","Abdullah"];
let notcomingguest = guests[0];
console.log(notcomingguest, "is not coming.")
guests.splice(0,1,"Arham");
guests.forEach(guest => console.log(`${guest}, I am inviting you for a dinner tonight.`));
