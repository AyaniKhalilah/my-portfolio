const title = document.getElementById("about");
console.log(title.textContent);

const skills = ["C++","HTML", "React", "JavaScript"];
const skillsList = document.querySelector("#skills ul");
console.log(skillsList)

//manual construction
const skillItem = document.createElement("li");
skillItem.textContent = skills[0];
//skillsList.appendChild(skillItem);


// //variables 
// let userName = "John";
// const age = 25;
// userName = "Jane";
// const skills = ["HTML", "CSS", "JavaScript"];

// //logging (debugging)
// console.log("hello world");
// console.log(skills.at(1));

// //operations
// const sum = 10 + 5;
// const product = 10 * 2;
// console.log(sum, product, "hello world");

// //string stuff
// const firstName = "Jane";
// const lastName = "Doe";
// console.log("Hello, " + firstName + " " + lastName); //concatenation
// console.log("Hello," , firstName , lastName); //concatenation
// console.log(`Hello, ${firstName} ${lastName}`); //template literals

// //--------------------------functions---------------------------

// // standard function

// function greet(name) {
//     return `Hello, ${name} !`;
// }
// console.log(greet("John"));

// // anonymous function (is only used once)

// const greet1 = function(name) {
//     return `Hello, ${name} !`;
// };
// console.log(greet1("Jane"));

// const test = function(a, b) {
//     return a + b;
// }(3,5); //immmediate invocation

// // fat arrow function notation

// const greet2 = (name) => `Hello, ${name} !`; // single line output statement
// console.log(greet2("Alex"));

// const greet3 = (name) =>  { // bracketed output statement (can have multilpe lines, needs return statement)
//     return `Hello, ${name} !`
// };
// console.log(greet3("Matt"));

// const square = (num) => num * num; 
// console.log(function(num) {  //immmediate invocation
//     return num * num;
// }(5)); 

// console.log(test);

// // Monday 

// const names = ["Joe", "Jane", "John"];
// const numbers = [20, 99, 1, 23, 3, 4, 5];
// names.forEach((name) => (console.log(name)));
// skills.forEach((skill) => {
//   console.log(skill);
// });
// const squares = numbers.map((num) => num * num);
// console.log(squares);
// const evenNumbers = numbers.filter((num) => num % 2 === 0);
// console.log(evenNumbers);
// const sum2 = numbers.reduce( (acc, num) => acc + num , 1);
// console.log(sum2);
// const firstEven = numbers.find((num) => num % 2 === 0);
// console.log(firstEven);
// numbers.sort((a,b) => b - a);
// console.log(numbers);
// // const aFunc = (acc, num) => acc + num;
// // const aFunc = (num) => num % 2 === '0';
// // for (let i = 0; i < names.length; i++) {
// //     console.log(names[i]);
// // }
// const fruits = ["apple", "banana", "cherry"];
// fruits.forEach((fruit) => console.log(fruit));