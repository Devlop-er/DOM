// Variables pour stocker les informations

var button = document.querySelector("button");
var texte = document.getElementById("tache");
var ul = document.querySelector("ul");

function textLength() {
    return text.value.length;
}

function textInput() {
    var li = document.createElement("li");
    // Insertion du texte taper par l'utilisateur
    li.appendChild(document.createTextNode(texte.value));
    ul.appendChild(li);
    text.value = "";
}

// Ajouter un évènement au click sur le "button"

button.addEventListener("click", function() {
    // Condition si la valeur est supérieur à 0 executer le code sinon afficher une alert
    if (textLength() > 0) {
        textInput();
    } else {
        alert("La case est vide...")
    }       
})

text.addEventListener("keypress", function(event) {

    // Condition si la valeur est supérieur à 0 executer le code sinon afficher une alert
    if (textLength() > 0 && event.keycode === 13) {
        textInput();
    } else {
        alert("La case est vide...")
    }       
})

