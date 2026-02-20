// WHILE LOOP FUNCTION
// ------------------------------
function whileLoopFunction() {
    let count = 1; // starting number
    let text = ""; // empty string to build output

    // while loop runs as long as condition is true
    while (count <= 5) {
        text += "Count is: " + count + "<br>";
        count++; // increase count to avoid infinite loop
    }

    // Display result in HTML
    document.getElementById("while_output").innerHTML = text;
}



// ------------------------------
// FOR LOOP FUNCTION
// ------------------------------
function forLoopFunction() {
    let text = "";

    // for loop runs 5 times
    for (let i = 0; i < 5; i++) {
        text += "Loop iteration: " + i + "<br>";
    }

    document.getElementById("for_output").innerHTML = text;
}



// ------------------------------
// ARRAY FUNCTION
// ------------------------------
function arrayFunction() {
    // Create an array of fruits
    let fruits = ["Aforcador", "Carrot", "Mango", "Orange"];

    // Accessing array items
    let message = "My favorite fruit is: " + fruits[2]; // Mango

    document.getElementById("array_output").innerHTML = message;
}



// ------------------------------
// OBJECT CREATED WITH "let"
// ------------------------------
function objectFunction() {
    // Create an object using let
    let car = {
        make: "Toyota",
        model: "Camry",
        year: 2015,
        color: "Gray"
    };

    // Build a sentence using object properties
    let description =
        "Car Info: " +
        car.year + " " +
        car.color + " " +
        car.make + " " +
        car.model;

    document.getElementById("object_output").innerHTML = description;
}