"use strict";
console.log("TypeScript is here still");
console.log("TypeScript is amazing");
//------------------------------------------------------------------------------------------------------------------------------------------------
//Classes
class User {
    constructor(email, name) {
        this.city = ""; //Needs an initializer, or we can mark it as empty
        this.email = email;
        this.name = name;
    }
}
const newUser = new User("g@g.com", "Gman");
//newUser.city = "Berlin" <-- Cannot modify since it is readonly
//------------------------------------------------------------------------------------------------------------------------------------------------
//Private vs Public
class User1 {
    constructor(email, name, userID) {
        this.email = email;
        this.name = name;
        this.userID = userID;
        this.city = "";
    } //Exact same code but by using the usage of public in the constructor
}
const newUser1 = new User1("g@g.com", "Gman");
//newUser.city = "Berlin" <-- Cannot modify since it is readonly and it since it is not in the function since it is private
//------------------------------------------------------------------------------------------------------------------------------------------------
//Getters and Setters (Access Modifiers)
//A getter is a method that is used to retrieve the value of an object property
//A setter is a method that is used to set the value of an object property.
//Example
// class User {
//     private _fullName: string;
//     get fullName(): string {
//       return this._fullName;
//     }
//     set fullName(newFullName: string) {
//       this._fullName = newFullName;
//     }
//   }
//   const user = new User();
//   user.fullName = "John Doe";
//   console.log(user.fullName); // Output: John Doe
class User2 {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCounter = 1;
        this._courseCounter2 = 1; //Will be available to any class that inherits this class, but not outside of a class
        this.city = "Toronto";
    }
    deleteToken() {
        console.log("Token Deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCounter;
    }
    set courseCount(courseNum) {
        //A 'set' accessor cannot have a return type annotation (seen when first defining the setter and using :void or any other varaint of :"")
        //This is a common interview question
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCounter = courseNum;
    }
}
const newUser2 = new User1("g@g.com", "Gman");
//newUser2.deleteToken() <-- Not allowed b/c it is private
//------------------------------------------------------------------------------------------------------------------------------------------------
//Protected (Access Modifer)
//When using extend it inherits all the properties of the extended class EXCEPT private properties
class SubUser2 extends User2 {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCounter2 = 4; //We are inheriting a protected property from the extended class
    }
}
