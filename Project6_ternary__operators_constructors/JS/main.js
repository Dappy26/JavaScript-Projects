function checkAge() {
    // Get value from input field
    const age = document.getElementById("ageInput").value;

    // Use a ternary operator to check if user is an adult
    const message = (age >= 18) ? "You are an adult." : "You are a minor.";

    // Display result in HTML
    document.getElementById("ageResult").textContent = message;
}



// -------------------------------
// CONSTRUCTOR FUNCTION
// -------------------------------
function Person(first, last) {
    // "this" refers to the new object being created
    this.firstName = first;
    this.lastName = last;

    // NESTED FUNCTION EXAMPLE
    this.fullName = function() {

        // Inner function (nested function)
        function combineNames() {
            return first + " " + last;
        }

        // Call the nested function
        return combineNames();
    };
}



// -------------------------------
// FUNCTION TO DISPLAY CONSTRUCTOR RESULTS
// -------------------------------
function createPerson() {
    // Get values from input fields
    const fName = document.getElementById("firstName").value;
    const lName = document.getElementById("lastName").value;

    // Create a new Person object using "new"
    const newPerson = new Person(fName, lName);

    // Display the full name using the constructor's method
    document.getElementById("personResult").textContent =
        "Full Name: " + newPerson.fullName();
}