let guests = ["Zahan","Ibad","Ayesha","Zaid","Abdullah"];
let notcomingguest = guests[0];
console.log(notcomingguest, "is not coming.");
guests.splice(0,1,"Arham");
console.log("We have just found a bigger dinner table.")
guests.unshift("Obama");
// it pushes the value to the end of an array.
guests.push("Altaf");
//  using math.floor to round of the value.
let middlename: number = Math.floor(guests.length/2);

guests.splice(middlename,0,"Fizza");

console.log("Check out I just updated the list of guest!");

guests.forEach(guest => console.log(`${guest}, I am inviting you for a dinner tonight.`));

console.log("Unfortunately the dinner table won't arrive on time. So, I can only invite two people for dinner.");
// using while loop to justify length of array which greator than two
while(guests.length>2){
    let removedguests= guests.pop();
    console.log(`Sorry ${removedguests}, I can't invite you to dinner.`)
}
console.log("The last two guyz are still invited.");

guests.forEach(lastguyz => console.log(`You ${lastguyz} are still invited.`));
// ye array ki last value ko nikal dega.
guests.pop();
guests.pop();

console.log(`Empty: ${guests}`);