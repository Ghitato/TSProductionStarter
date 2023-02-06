"use strict";
//Helps to make components reusable
//Allow you to write reusable code that can work with any data type, rather than a specific data type. 
//  A generic function or class in TypeScript is written with a placeholder type T that represents any data type. 
//  When the generic function or class is used, the data type can be specified as a parameter.
//For example, you can create a generic function identity that takes an argument of type T and returns a value of the same type:
const scoreArray = [];
const nameArray = [];
//------------------------------------------------------------------------------------------------------------------------------
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
//Ready to accept numbers, booleans, strings etc., then the return type becomes either a number, boolean, string etc.
function identityFour(arg) {
    return arg;
}
let output = identityFour("Hello"); // output is of type string
identityFour({ brand: "Coke", type: 1 });
//------------------------------------------------------------------------------------------------------------------------------
//Generics with Arrow Functions
function getSearchProduct(products) {
    //Do some database operation
    const myIndex = 3;
    return products[myIndex];
}
const getMoreSearchProdcts = (products) => {
    //Do some database operation
    const myIndex = 4;
    return products[myIndex];
};
