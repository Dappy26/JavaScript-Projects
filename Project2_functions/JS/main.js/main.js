// Function that uses += operator to concatenate strings and display the result in an HTML element with id "output".
function myFunction() {
    var sentence = "I am learning JavaScript functions!";// Initial string assigned to the variable 'sentence'.
    sentence += " Very interesting leaning new things.";// Using the += operator to concatenate another string to the existing value of 'sentence'.
    document.getElementById("concatenate").innerHTML = sentence;// Displaying the concatenated string in an HTML element with id "concatenate".
}
