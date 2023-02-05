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
class instagramClone {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class youtubeClone {
    constructor(cameraMode, filter, burst, short) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
    }
    //Cannot use implements with a constructor where you are taking less from an interface 
    createStory() {
        return "Story was created";
    }
}
//------------------------------------------------------------------------------------------------------------------------------------------------
//Abstract Classes
//Interview Question: If interfaces exist, what is the purpose of abstract classes
//Abstract classes in TypeScript are classes that can be used as a base class, 
//  but cannot be instantiated on its own. An abstract class provides a basic structure or blueprint for its subclasses, 
//  but it is expected that the subclasses will provide the specific implementation details.
//Abstract classes are useful when you want to provide a common structure or behavior for multiple related classes. 
//  For example, you could create an abstract class for Shape, and then create concrete classes for Rectangle, Triangle, and Circle 
//  that inherit from Shape and provide their own implementation.
//In comparison, interfaces in TypeScript provide a way to define the structure of an object, without providing implementation details. 
//  Interfaces are often used to define the shape of an object that will be passed between different parts of the code.
//So, the main difference between abstract classes and interfaces is that abstract classes provide implementation, 
//  while interfaces only provide structure. You would use abstract classes when you want to share implementation between multiple related classes, 
//  and use interfaces when you want to define the structure of an object.
class Shape {
}
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const rectangle = new Rectangle(10, 20);
console.log(rectangle.getArea()); // Output: 200
class Rectangle2 {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea2() {
        return this.width * this.height;
    }
}
const rectangle2 = new Rectangle2(10, 20);
console.log(rectangle.getArea()); // Output: 200
