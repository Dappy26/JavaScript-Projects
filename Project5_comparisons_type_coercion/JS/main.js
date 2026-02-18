// Create a variable of your choosing
let myVariable = 25;   // Number type

// Display the data type using typeof and document.write()
document.write("Data type of myVariable: " + typeof myVariable + "<br><br>");

/********************************
 STRING + NUMBER (TYPE COERCION)
*********************************/

// Combine a string and a number
let combined = "Age: " + 40;

// Display result
document.write("String + Number result: " + combined + "<br><br>");

/*************************
 COMPARISON OPERATORS
*************************/

// Variables for comparisons
let x = 10;
let y = "10";
let a = 5;
let b = 20;

// == (equal value, type not checked)
document.write("x == y : " + (x == y) + "<br>");

// === (equal value and equal type)
document.write("x === y : " + (x === y) + "<br>");

// > (greater than)
document.write("b > a : " + (b > a) + "<br>");

// < (less than)
document.write("a < b : " + (a < b) + "<br><br>");

/*************************
 LOGICAL OPERATORS
*************************/

// && (AND operator)
document.write("(x == 10 && b == 20) : " + (x == 10 && b == 20) + "<br>");

// || (OR operator)
document.write("(x == 5 || b == 20) : " + (x == 5 || b == 20) + "<br>");

// ! (NOT operator)
document.write("!(x == 10) : " + !(x == 10) + "<br>");


