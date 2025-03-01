console.log("Conditionals");

//? If Statements
//? if (condition) { Y/N? 
//? code to be executed if condition is true
//? }

if(3 < 5){
    console.log("This is true");
}

let student1 = 24;
let student2 = 25;

if(student1 == student2){
    console.log("The values are the same");
}

//? If-ele Statements
//? if (condition) { Y/N? 
//? code to be executed if condition is true
//? } else {
//? code to be executed if condition is false
//? }

let isTrue = false;

if(isTrue == true){
    console.log("Yes");
} else {
    console.log("No");
}

let waterTemp = 92;

if(waterTemp == 100){
    console.log("The water is boiling");
} else {
    console.log("The water is NOT boiling");
}

//! --------------Challenge #1--------------
//* Challenge 1: 
//* check if the age is greater than 21
//* T: display "you are an adult" 
//* F: display "you are underage"

let age = 21;

if(age > 21){
    console.log("You are an adult");
} else {
    console.log("You are a minor");
}

//? If-ele Statements
//? if (condition) { Y/N? 
//? code to be executed if condition is true
//? } else {
//? code to be executed if condition is false
//? } else if {
//? code to be executed if the other conditions are false
//? }

age = 67;

if(age < 13){
    console.log("You are a child");
} else if(age < 21){    
    console.log("You are a teenager");
} else if(age < 64){
    console.log("You are a young adult");
} else {
    console.log("You are a senior");
}

//! --------------Challenge #2--------------
function ticketPricing(){
    let age = prompt("Please enter your age: ");
    let ticketPrice = 0;
    age < 12 ? ticketPrice = 5 : age <= 17 ? ticketPrice = 8 : ticketPrice = 10;
    return console.log(`Your ticket is $${ticketPrice}`);
}

