// Question 1: Given a greet() function modify it to update its context with an object
// having firstName and lastName properties.
/*
function greet(name){
  console.log("Hi" + name + this + "is the original context of the function");
}
greet("Ron");
*/

function greet(name){
  console.log("Hi "+ name + ", I am "+ this.firstName, this.lastName);
}

var myDetails = {"firstName": "Harry", "lastName": "Potter"}
greet.call(myDetails,"Ron"); //Passing object myDetails for this keyword

var myDetails = {"firstName": "James", "lastName": "Potter"}
greet.call(myDetails,"Ron"); //Passing object myDetails for this keyword


// Question 2: Given a greet() function modify it to update its context with an object 
// having firstName and lastName properties
// and allow it to accept multiple arguments in an array
/*
function greet(name, lastName){
  console.log("Hi" + name + " " + lastName + this + "is the original context of the function");
}
greet("Ron", "Weasley");
*/

function greet(name, lastName){
  console.log("Hi "+ name, lastName + ", I am "+ this.firstName, this.lastName);
}

myDetails = {"firstName": "Harry", "lastName": "Potter"}
greet.apply(myDetails,["Ron", "Weasley"]); //Passing object myDetails for this keyword

myDetails = {"firstName": "James", "lastName": "Potter"}
greet.apply(myDetails,["Ron", "Weasley"]); //Passing object myDetails for this keyword


// Question 3: Given a greet() function modify it
//  to update its context with a fixed value so it can be invoked later.
/*
function greet(name){
  console.log("Hi" + name + this + "is the original context of the function");
}
greet("Ron");
*/

function greet(name){
  console.log("Hi "+ name + ", I am "+ this.firstName, this.lastName);
}

myDetails = {"firstName": "Harry", "lastName": "Potter"}
var boundGreet = greet.bind(myDetails); //Simply returning a function

boundGreet("Ron"); //Invoking the returned the function

// Question 4: Create a function multiplyBy that multiplies a number by a given factor.
// Use the bind method to create a new function that multiplies by a specific factor.

function multiplyBy(factor, number) {
  return factor * number;
}

var double = multiplyBy.bind(null, 2);
var triple = multiplyBy.bind(null, 3);

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15


// Question 5: Create a function that counts the number of properties in an object 
// using `apply` and the `arguments` object.

function countProperties(obj) {
  return Object.keys(obj).length;
}

// Example usage
var person = {
  name: "John",
  age: 30,
  city: "New York",
};

console.log(countProperties.apply(null, [person])); // Output: 3

// Question 6: Given an object `person` representing a person with a method to introduce himself,
// define another object `anotherPerson` and using call method borrow the introduce method from `person` object
// and use it for `anotherPerson` object

var person = {
  name: "John",
  introduce: function(greeting) {
    console.log(`${greeting}, my name is ${this.name}.`);
  }
};

var anotherPerson = {
  name: "Alice"
};

person.introduce.call(anotherPerson, "Hi");
// Output: Hi, my name is Alice.

person.introduce.apply(anotherPerson, ["Hello"]);
// Output: Hello, my name is Alice.

// Question 7: Using the `apply` method, write a function that finds the minimum number in an array. 
// You can use Math class's built-in min() method for this task.
function findMinNumber(numbers){
  return Math.min.apply(null, numbers);
}

var numbers = [10, 5, 8, 20];
console.log(findMinNumber(numbers));