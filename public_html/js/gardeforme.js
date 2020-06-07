/* 
    Created on : 5 juin 2020, 11:12:35
    Author     : BEJAOUI, BRISCAS, BOUTELLIS, CALABUIG
    Email : BikinToulon@gmail.com
*/

window.addEventListener("load", function() {
    // tabEvents est une collection d'évenements
    window.document.querySelector("#btn_calculer").addEventListener("click", calculCal); // On fait appelle à la fonction lorsqu'on clique sur le bouton "calculer"
});

// Déclaration d'une fonction :
function calories (nb_cal) {
    let elH1 = window.document.querySelector('#formulaire'); // Déclaraqtion de la variable
    elH1 = window.document.createElement('p'); // Permet de créer l'élement HTML <p></p> et de le placer dans la variable elH1
    elH1.id = 'formulaire'; // Permet d'affecter un "id" à l'élement que l'on vient de créer

   /* elH1.innerHTML = 'Une balade de ' + document.getElementById("form_simulateur").elements["nb_temps"].value + ' minutes vous a fait perdre ' + nb_cal + ' Kcal !';*/ // Calcul de calories et permet d'afficher un élement de type texte
    elH1.appendChild(window.document.createTextNode('Une balade de ' + document.getElementById("form_simulateur").elements["nb_temps"].value + ' minutes vous a fait perdre ' + nb_cal + ' Kcal !')); // Permet de créer un élement HTML de type "texte"
    window.document.querySelector('#recueilinfos').appendChild(elH1); // Permet de placer un élement HTML enfant dans l'élement HTML contenu dans elH1
}

// Déclaration d'une fonction :
function calculCal() {
    var cal = document.getElementById("form_simulateur").elements["nb_poids"].value * document.getElementById("form_simulateur").elements["nb_effort"].value*document.getElementById("form_simulateur").elements["nb_temps"].value*3.5/200; // Déclaration d'une variable qui vaut le calcul de calories
    calories(cal); // Rappel de la fonction avec la variable cal
}
