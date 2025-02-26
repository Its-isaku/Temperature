console.log("functions.js file");

let name = "Mike";
let lastName = "Scott";

//? contatenation
console.log("Hello" + name + " " + lastName + ", welcome!");
console.log(`Hello ${name}  ${lastName} ${1+1}, welcome!`);

//? 1. funtion declaration(create a function)
function sayHello() {
    //? body of the function
    console.log("Hello cohort 56!");
}

//? call the function(code, console, from the user)
sayHello(); 
sayHello(); 

//? Example 2, witj parameters
function greet(name) {
    console.log(`Hello ${name}, welcome!`);
}

greet("Jeffrey");
greet();


function greet2(name1, name3){
    console.log(`Hello ${name1} and ${name3}, welcome to the system!`);
}

greet2("Erick", "Isai");
greet2("George", "Jefrrey");

//! -----------------Challenge-----------------
//* Challenge 1: Double the Number
//* Task:
//* - Create a function called `doubleNumber` that takes one number as a parameter.
//* - The function should return the number multiplied by 2.
//* - Print the result when you call the function with different numbers.

function doubleNumber(num){
    let total = num * 2;
    console.log(total);
    let tax = total * .08;
    console.log(`Taxes = ${tax}`);
}

doubleNumber(4);
doubleNumber(10);

//? Example 3, with prompt

function welcome(){
    let name2 = prompt("What is your name?");
    let age2 = prompt("How old are you?");

    console.log(`Welcome ${name2}!`);
    console.log(`You are ${age2} years old`);
}

//? Example 5, default parameters | avoid NaN(Not a Number)
function add(num1 = 0, num2 = 0){
    console.log(`The total is ${num1 + num2}`);
    document.write(`<p>The total is ${num1 + num2}</p>`);
}

add();
add(57.6, 38.4);
add(54.3,100);

//! -----------------Challenge #2-----------------
//* Challenge 2: Combine Names
//* Task:
//* - Create a function called `combineNames` that takes two parameters: `firstName` and `lastName`.
//* - The function should return the full name in the format: `"firstName lastName"`.
//* - If either parameter is missing, it should use the default value `"Unknown"` for that parameter.

function combineNames(firstName = "Unknown", lastName = "Unknown"){
    console.log(`${firstName} ${lastName}`);
}

combineNames("Alice", "Johnson");
combineNames("Alice");
combineNames();

//! -----------------Challenge #3-----------------
function convertToSeconds(minutes = 0){
    let seconds = minutes * 60;
    console.log(`${minutes} minutes is equal to ${seconds} seconds`);
}

convertToSeconds(5);
convertToSeconds(3);
convertToSeconds();

//? triger the function with a button and get the value from the prompt and display the result on the page
function convertToSeconds2(){
    let minutes = prompt("Enter the number of minutes");
    let seconds = minutes * 60;
    document.getElementById("result").innerHTML += `<p>${minutes} minutes is equal to ${seconds} seconds</p>`;
}
