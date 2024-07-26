"use strict";
// List of current usernames
const current_users = ["Zahan", "Zaid", "Abdullah", "Ibad", "Misbah", "Hasnain"];
// List of new usernames
const new_users = ["Zahan", "Sethi", "Abdul Rehman", "Ishaq", "Misbah", "Bilal"];
// Converting all current usernames to lowercase
const current_users_lower = current_users.map(user => user.toLowerCase());
for (const new_user of new_users) {
    // Checking that the username is available or not.
    if (current_users_lower.includes(new_user.toLowerCase())) {
        console.log(`Sorry ! the username ${new_user} is not available.Please try a new one`);
    }
    else {
        console.log(`The username ${new_user} is available.`);
    }
}
