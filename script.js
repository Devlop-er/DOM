// Variables pour stocker les informations
var button = document.querySelector("button");
var texte = document.getElementById("tache");
var ul = document.querySelector("ul");

// Fonction qui permet de retourner la longueur de la variable texte
function textLength() {
    return texte.value.length;
}

// Fonction qui permet d'ajouter du contenu 
function textInput() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(texte.value));
    ul.appendChild(li);
    texte.value = "";
}

// Fonction qui permet d'ajouter du contenu après le Click
function ajouterListClick() {
    if (textLength() > 0) {
        textInput();
    } 
}

// Fonction qui permet d'ajouter du contenu après la touche Enter
function ajouterListKeyboard(event) {
    if (textLength() > 0 && event.keyCode === 13) {
        textInput();
    }
}

button.addEventListener("click", ajouterListClick);
texte.addEventListener("keypress", ajouterListKeyboard);
