var guests = ["Zahan", "Ibad", "Ayesha", "Zaid", "Abdullah"];
var notcomingguest = guests[0];
console.log(notcomingguest, "is not coming.");
guests.splice(0, 1, "Arham");
console.log("We have just found a bigger dinner table.");
guests.unshift("Obama");
guests.push("Altaf");
var middlename = Math.floor(guests.length / 2);
guests.splice(middlename, 0, "Fizza");
console.log("Check out I just updated the list of guest!");
guests.forEach(function (guest) { return console.log("".concat(guest, ", I am inviting you for a dinner tonight.")); });
console.log("Unfortunately the dinner table won't arrive on time. So, I can only invite two people for dinner.");
// using while loop to justify length of array which greator than two
while (guests.length > 2) {
    var removedguests = guests.pop();
    console.log("Sorry ".concat(removedguests, ", I can't invite you to dinner."));
}
console.log("The last two guyz are still invited.");
guests.forEach(function (lastguyz) { return console.log("You ".concat(lastguyz, " are still invited.")); });
// ye array ki last value ko nikal dega.
guests.pop();
guests.pop();
console.log("Empty: ".concat(guests));
