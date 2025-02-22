console.log('Hello, World!');
console.log('My name is ' + 'Isai ' + 'I am ' + 21 + ' years old');

//? this is a comment
//? STRING VARIABLES

let name = 'Peter';
let lastName = 'Parker';

console.log(name);
console.log(lastName);

//? CREATING NUMERICAL VARIABLES 

let age = 25;
console.log(age);

let grade = 9.5;
console.log(grade);

//? BOOLEAN VARIABLES(true or false)

let isAProfessor = true;
let isAStudent = false;
let isAdmin = true;
console.log(isAdmin);

/* Many lines of comments
?xxxxxx
?xxxxxx
?xxxxxx
End of this comment*/

let num1 = 8.3;
let num2 = 4;
let addition = num1 + num2;

//? Solution #1 | console.log(num1 + ' plus five' + num2 + ' equals to ' + (num1 + num2));
console.log(num1 + ' plus ' + num2 + ' equals to ' + addition);

//? Chaing the value of num1 and num2
num1 = 7;
num2 = 3;

let substraction = num1 - num2;
console.log(num1 + ' - ' + num2 + ' = ' + substraction); //? substraction

let multiplication = num1 * num2;
console.log(num1 + ' * ' + num2 + ' = ' + multiplication); //? multiplication

let divition = num1 / num2;
console.log(num1 + ' / ' + num2 + ' = ' + divition.toFixed(2)); //? divition | toFixed(2) is to show only 2 decimal places


//? LET VS VAR
let y = 10;
console.log(y);

console.log(x);
var x = 5;

//? let example | let school = 'SDGKU';
//? let example | let school = 'school2';

var school = 'SDGKU';
var school = 'school2';
console.log(school); //! DO NOT USE VAR >:(\

//? let: give you more precise control over the scope of the variable
//? let is a part of the modern best practices in JavaScript

//? CONST VARIABLES
const pi = 3.1416;
const myName = 'Isai';
console.log(pi);
console.log(myName);

//? value cannot be reassigned or changed. 
//? It's useful when you want to make sure the value stays the same throughout your code.