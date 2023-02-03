"use strict";
console.log("TypeScript is here still");
console.log("TypeScript is amazing");
class User {
    constructor(email, name) {
        this.city = ""; //Needs an initializer, or we can mark it as empty
        this.email = email;
        this.name = name;
    }
}
const newUser = new User("g@g.com", "Gman");
newUser.city = "Berlin";
