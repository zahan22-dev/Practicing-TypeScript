// Making an array for users
let users:string[] =["Zahan","Admin","Abdullah","Ibad","Zaid"];
for (let user of users){ 
if(user === "Admin"){
    console.log(`Hello ${users}, would you like to see a status report?.`)
}
else{
users.forEach(user => {console.log(`Hello ${user}, thank you for logging in again.`)});
}
}