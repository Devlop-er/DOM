// Variables pour stocker les informations

var button = document.querySelector("button");
var texte = document.getElementById("tache");
var ul = document.querySelector("ul");

// Ajouter un évènement au click sur le "button"

button.addEventListener("click", function() {

    // Condition si la valeur est supérieur à 0 executer le code sinon afficher une alert
    if (texte.value.length > 0) {
        var li = document.createElement("li");
        // Insertion du texte taper par l'utilisateur
        li.appendChild(document.createTextNode(texte.value));
        ul.appendChild(li);
        input.value = "";
    } else {
        alert("La case est vide...")
    }       
})

