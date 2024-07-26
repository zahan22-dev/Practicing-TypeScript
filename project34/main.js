function makeShirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love typescript"; }
    console.log("Creating a ".concat(size, " shirt with a message ").concat(message));
}
makeShirt();
makeShirt("medium");
makeShirt("small", "Typescript is love.");
