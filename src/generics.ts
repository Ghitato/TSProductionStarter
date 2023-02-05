//Helps to make components reusable

//Allow you to write reusable code that can work with any data type, rather than a specific data type. 
//  A generic function or class in TypeScript is written with a placeholder type T that represents any data type. 
//  When the generic function or class is used, the data type can be specified as a parameter.

//For example, you can create a generic function identity that takes an argument of type T and returns a value of the same type:

const scoreArray: Array<number > = []
const nameArray: Array<string> = []

//------------------------------------------------------------------------------------------------------------------------------

function identityOne(val: boolean | number): boolean | number{
    return val
}

function identityTwo(val: any): any{
    return val
}

function identityThree <Type>(val: Type): Type{
    return val
}
//Ready to accept numbers, booleans, strings etc., then the return type becomes either a number, boolean, string etc.

function identityFour<T>(arg: T): T {
    return arg;
}
let output = identityFour<string>("Hello");  // output is of type string

//------------------------------------------------------------------------------------------------------------------------------
interface Bottle{
    brand: string,
    type: number
}

identityFour<Bottle>({brand: "Coke", type: 1})