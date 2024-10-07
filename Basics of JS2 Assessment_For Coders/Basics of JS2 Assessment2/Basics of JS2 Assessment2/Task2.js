// 1. Define 2 functions
// 1st function named as checkEven which will check if the num passed is even or not.
// 2nd function named as filterEvens which will take an array of numbers and the checkEven function as arguments.
// This filterEvens function will filter out  only even numbers using the checkEven function and generate a new array of the even numbers.

function checkEven(num) {
    return num % 2 === 0;
}

function filterEvens(arr, checkEven) {
    return arr.filter(checkEven);
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterEvens(numbers, checkEven);
console.log(evenNumbers); // Output: [2, 4, 6]

//2. Write an IIFE that calculates the factorial of a given number and immediately logs the result to the console.

(function(num) {
    function factorial(n) {
        if (n === 0) {
            return 1;
        }
        return n * factorial(n - 1);
    }
    console.log(factorial(num));
})(5); // Example number with recursive factorial calculation

//3. The product1 object (which is already given) consists of title, price and category information of Nike Shoes.
// The description() function describes the product using its properties.
// Your task is to create a product2 object which consists of the title, price and category information of Sony TV.
// Next, use the call() method to invoke the description() method of product1 on product2.
// This should display the details of product2 on the console. 
var product1 = {
    title: "Nike Shoes",
    price: 30,
    category: "Shoes",
    description: function (){
        return "Title: " + this.title + " Price: " + this.price + " Category: " + this.category;
    }
}
var product2 = {
    title: "Sony TV",
    price: 500,
    category: "Electronics"
};

console.log(product1.description.call(product2)); // Output: Title: Sony TV Price: 500 Category: Electronics

//4. Given an array of person objects, define a function to find oldest person object.

var persons = [{"name" : "Harry", "age" : 12}, {"name" : "Ron", "age" : 11}, {"name" : "Hermione", "age" : 13}]

function findOldestPerson(persons) {
    return persons.reduce((oldest, person) => {
        return (person.age > oldest.age) ? person : oldest;
    }, persons[0]);
}

const oldestPerson = findOldestPerson(persons);
console.log(oldestPerson); // Output: { name: 'Hermione', age: 13 }

//5.  Create a function that calculates the sum of an array using IIFE function and returns it.

const sumArray = (function(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
})([1, 2, 3, 4, 5]); // Example array

console.log(sumArray); // Output: 15

//6. Write a function printContext that, when invoked, logs the this keyword to the console. Then, demonstrate how the context of a function can change when calling it with different objects using the call method.

function printContext() {
    console.log(this);
}

// Example objects
const obj1 = {
    name: "Object 1"
};

const obj2 = {
    name: "Object 2"
};

// Demonstrate context change using call method
printContext.call(obj1); // Logs: { name: 'Object 1' }
printContext.call(obj2); // Logs: { name: 'Object 2' }

//7. Create a function multiply that takes two parameters and returns their product. Use the bind method to create a new function "double" that multiplies a single parameter by 2.

function multiply(a, b) {
    return a * b;
}

const double = multiply.bind(null, 2);

// Example usage:
console.log(double(5)); // Output: 10
console.log(double(10)); // Output: 20

// 8. Create an object person with properties name and age. Write a function "introduce" that logs a message introducing the person. Then, use the call method to invoke the introduce function with the person object as the context.

const person = {
    name: "John",
    age: 30
};

function introduce() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}

// Use the call method to invoke introduce with person as the context
introduce.call(person); // Output: Hello, my name is John and I am 30 years old.

// 9. Write a higher order function createMultiplier that takes a factor as an argument and returns another functiom that multiplies a number by that factor. 

function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

// Example usage:
const multiplyBy3 = createMultiplier(3);
console.log(multiplyBy3(5)); // Output: 15

const multiplyBy10 = createMultiplier(10);
console.log(multiplyBy10(5)); // Output: 50

// 10. Write a function called "calculate" that adds two numbers and assign a property "description" to it with a string describing what the function does. Then, access and log this property.

function calculate(a, b) {
    return a + b;
}

calculate.description = "This function adds two numbers.";

console.log(calculate.description); // Output: This function adds two numbers.
