// Question 1: Declare an object named "person" with properties "name", "age", and "city" and set their respective values to "John", 30, and "New York".

var person = {
  name: "John",
  age: 30,
  city: "New York",
};
console.log("Name:", person.name);
console.log("Age:", person.age);
console.log("City:", person.city);

// Question 2: Declare an object named "book" with properties "title", "author", and "year" and set their respective values to "The Great Gatsby", "F. Scott Fitzgerald", and 1925. Access the "author" property and store its value in a variable called "authorName".

var book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
};

var authorName = book.author;
console.log(authorName); // Output: F. Scott Fitzgerald

// Question 3: Declare an object named "employee" with properties "name", "age", and "city". Delete the "city" property from the object.

var employee = {
  name: "John",
  age: 30,
  city: "New York",
};

delete employee.city;

console.log(employee); // Output: { name: "John", age: 30 }

// Question 4: Create a "game" object having following information - 
// gamingPlatform as "Roblox", minimumAge as 10, programmingLanguage as "Lua". 
// Display object information.
// Change the value of minimumAge as 12. 
// Display object information again.

var game = {
  "gamingPlatform": "Roblox",
  "minimumAge": 10,
  "programmingLanguage": "Lua"
}
console.log(game);
game.minimumAge = 12;
console.log(game);

// Question 5: Given an array "employees" of Javascript objects. Write a code to iterate through
// each of these objects using forEach method and extract first name and last name of each employee.

var employees = [
  { firstName: "John", lastName: "Doe", role: "Senior Architect" },
  { firstName: "Thomas", lastName: "Griffin", house: "Marketing Executive" },
  { firstName: "Lily", lastName: "Johnson", house: "Financial Analyst" }
];

employees.forEach((employee) => {
  console.log(employee.firstName, employee.lastName)
});

// Question 6: Declare an object named "toy" with an empty object as its initial value. 
// Add the properties "name" and "category" with values "Super Space Rocket" and "Action Figures & Playsets" respectively.

var toy = {};

toy.name = "Super Space Rocket";
toy.category = "Action Figures & Playsets";

console.log(toy);

// Question 7: Given an array of employees objects, define a function to find employee with the least salary.

function filterLeastSalariedEmployee(employeesArr){
  minimumSalary = employeesArr[0].salary;
  var leastSalariedEmployee = null;
  employeesArr.forEach((employee) => {
      if(employee["salary"] <= minimumSalary){
          leastSalariedEmployee = employee;
          minimumSalary = employee["salary"];
      }
  });
  return leastSalariedEmployee;
}

var employees = [
  { firstName: "John", lastName: "Doe", role: "Senior Architect", salary: 1200 },
  { firstName: "Thomas", lastName: "Griffin", house: "Marketing Executive", salary : 1350 },
  { firstName: "Lily", lastName: "Johnson", house: "Financial Analyst", salary: 1300 }
];
console.log(filterLeastSalariedEmployee(employees));