// Global variable for increment and decrement
let counter = 10;

/* Addition function using + operator */
function addNumbers() {
    let a = 10;
    let b = 5;
    let result = a + b;  // Addition
    document.getElementById("output").innerHTML = "Addition result: " + result;
}

/* Subtraction function using - operator */
function subtractNumbers() {
    let a = 20;
    let b = 8;
    let result = a - b;  // Subtraction
    document.getElementById("output").innerHTML = "Subtraction result: " + result;
}

/* Multiplication function using * operator */
function multiplyNumbers() {
    let a = 6;
    let b = 4;
    let result = a * b;  // Multiplication
    document.getElementById("output").innerHTML = "Multiplication result: " + result;
}

/* Modulus function using % operator */
function modulusNumbers() {
    let a = 15;
    let b = 4;
    let result = a % b;  // Modulus (remainder)
    document.getElementById("output").innerHTML = "Modulus result: " + result;
}

/* Increment function using ++ operator */
function incrementNumber() {
    counter++;  // Increment counter by 1
    document.getElementById("output").innerHTML = "Incremented value: " + counter;
}

/* Decrement function using -- operator */
function decrementNumber() {
    counter--;  // Decrement counter by 1
    document.getElementById("output").innerHTML = "Decremented value: " + counter;
}

/* Random number function using Math.random() */
function randomNumber() {
    let random = Math.floor(Math.random() * 100) + 1;  
    // Generates a random number between 1 and 100
    document.getElementById("output").innerHTML = "Random number: " + random;
}
