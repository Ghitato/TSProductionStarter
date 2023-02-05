console.log("TypeScript is here still")
console.log("TypeScript is amazing")

//------------------------------------------------------------------------------------------------------------------------------------------------
//Classes

class User {
    //We are making sure TS is aware of email and name in advance
    email: string 
    name: string
    readonly city: string = "" //Needs an initializer, or we can mark it as empty
    constructor(email: string, name: string){
        this.email = email
        this.name = name
    }
}

const newUser = new User("g@g.com", "Gman")
//newUser.city = "Berlin" <-- Cannot modify since it is readonly

//------------------------------------------------------------------------------------------------------------------------------------------------
//Private vs Public

class User1 {
    private readonly city: string = "" 
    constructor(public email: string, public name: string, private userID?: string){
    } //Exact same code but by using the usage of public in the constructor
}

const newUser1 = new User1("g@g.com", "Gman")
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

    private _courseCounter = 1
    protected _courseCounter2 = 1 //Will be available to any class that inherits this class, but not outside of a class

    private readonly city: string = "Toronto" 
    constructor(
        public email: string, 
        public name: string){
    }

    private deleteToken(){
        console.log("Token Deleted")
    }
    
    get getAppleEmail(): string{ //Defining a getter function with return type of string
        return `apple${this.email}`
    }

    get courseCount(): number{ //Defining a getter function with return type of number
        return this._courseCounter
    }

    set courseCount(courseNum){ //Defining a setter function that takes in a course number and returns nothing (DO NOT USE :"x")
        //A 'set' accessor cannot have a return type annotation (seen when first defining the setter and using :void or any other varaint of :"")
            //This is a common interview question
        if (courseNum <= 1){
            throw new Error ("Course count should be more than 1")
        }
        this._courseCounter = courseNum
    }
}

const newUser2 = new User1("g@g.com", "Gman")
//newUser2.deleteToken() <-- Not allowed b/c it is private

//------------------------------------------------------------------------------------------------------------------------------------------------
//Protected (Access Modifer)

//When using extend it inherits all the properties of the extended class EXCEPT private properties
class SubUser2 extends User2 {
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCounter2 = 4 //We are inheriting a protected property from the extended class
    }
}

//------------------------------------------------------------------------------------------------------------------------------------------------
//Interface
//Blueprint for objects that defines the shape of an object, including the properties and methods that it should have. 
//  Interfaces allow you to define a contract for objects, so that if an object implements an interface, 
//  you know that it will have certain properties and methods available

interface takePhoto {
    cameraMode: string,
    filter: string,
    burst: number
}

interface story {
    createStory(): string
}

class instagramClone implements takePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){}
}

class youtubeClone implements takePhoto, story {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short: string
    ){}
    //Cannot use implements with a constructor where you are taking less from an interface 
    createStory(): string {
        return "Story was created"
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

abstract class Shape {
    abstract getArea(): number;
  }
  
  class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
      super();
    }
  
    getArea(): number {
      return this.width * this.height;
    }
  }
  
  const rectangle = new Rectangle(10, 20);
  console.log(rectangle.getArea()); // Output: 200

  //Interface Example----------------------------------------

  interface Shape2 {
    getArea2(): number;
  }
  
  class Rectangle2 implements Shape2 {
    constructor(private width: number, private height: number) {}
  
    getArea2(): number {
      return this.width * this.height;
    }
  }
  
  const rectangle2 = new Rectangle2(10, 20);
  console.log(rectangle.getArea()); // Output: 200