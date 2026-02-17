let person = {
    Name: "Dapo",
    Age: 40,
    Career: "Cybersecurity",
    Skill: "Web Development"
};
function showDictionary() {

delete person.Skill; // Deletes the Skill property from the person object

    document.getElementById("Dictionary").innerHTML = 
        "Name: " + person.Name + "<br>" +
        "Age: " + person.Age + "<br>" +
        "Career: " + person.Career;
}
