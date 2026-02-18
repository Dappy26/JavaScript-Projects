let greeting = "Welcome to the JavaScript demo!";
// This variable can be accessed by ANY function in this file



// ------------------------------------------------------
// FUNCTION WITH LOCAL VARIABLE + IF STATEMENT
// ------------------------------------------------------
function checkAge() {
    // Local variable: only exists inside this function
    let age = document.getElementById("ageInput").value;

    // If-statement checks the user's age
    if (age >= 18) {
        document.getElementById("ageResult").textContent =
            "You are an adult.";
    } else {
        document.getElementById("ageResult").textContent =
            "You are a minor.";
    }

    // Show the global variable in the console
    console.log(greeting);
}



// ------------------------------------------------------
// INTENTIONAL ERROR + DEBUGGING WITH console.log()
// ------------------------------------------------------
function brokenFunction() {
    console.log("Starting brokenFunction...");

    let correctValue = 10;

    // Intentional error: misspelled variable name
    // This will cause an error in the console
    console.log("The value is: " + corectValue);

    // Use Chrome DevTools to inspect the error message
}



// ------------------------------------------------------
// TIME_FUNCTION() — determines morning, afternoon, evening
// ------------------------------------------------------
function Time_function() {
    // Get the current hour (0–23)
    let hour = new Date().getHours();

    let message;

    // Determine the time of day
    if (hour < 12) {
        message = "Good morning!";
    } else if (hour < 20) {
        message = "Good afternoon!";
    } else {
        message = "Good evening!";
    }

    // Display the result in the HTML
    document.getElementById("timeResult").textContent = message;
}