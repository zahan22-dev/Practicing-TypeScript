var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["Maldives", "Tokyo", "Dubai", "Switzerland", "Australlia",];
console.log("Original order:", places);
// Creating a copy of array and then using the sort function to arrange in alphabetical order.
console.log("Alphabetical order:", __spreadArray([], places, true).sort());
console.log("Original order:", places);
// using reverse order to print the places in unalphabetical order
console.log("Reverse order:", __spreadArray([], places, true).reverse());
console.log("Original order:", places);
// reversing the array without making a copy of array.
console.log("Reverse in orgingal order:", places.reverse);
// reversing again the array without making a copy of array.
console.log("Reversing again in orgingal order:", places.reverse);
