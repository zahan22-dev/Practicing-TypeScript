var users = [];
if (users.length > 0) {
    users.forEach(function (user) {
        console.log("Hello, ".concat(user));
    });
}
else {
    console.log("We need to find some users.");
}
