/* 
    Created on : 5 juin 2020, 11:12:35
    Author     : BEJAOUI, BRISCAS, BOUTELLIS, CALABUIG
    Email : BikinToulon@gmail.com
*/

window.addEventListener("load", function() {
    // tabEvents est une collection d'évenements
    window.document.querySelector("#btn_envoyer").addEventListener("click", validEnvoi); // On fait appelle à la fonction lorsqu'on clique sur le bouton "envoyer"
});

// Déclaration de la fonction :
function validEnvoi() {
    // Si les champs #i_nom et #i_prénom sont vides ..
    if (window.document.querySelector("#i_nom").value === "" &&
        window.document.querySelector("#i_prenom").value === "" ) {
        alert("Le nom ou le prénom doivent être remplis"); // .. On affiche un message
    }
    // Si le champs #i_email est vide ..
    else if (window.document.querySelector("#i_email").value === "") {
        alert("L'email doit être rempli"); // .. On affiche un message
    }
    // Sinon ..
    else {
        // .. On affiche une question lorsqu'on rempli le champs #i_email ..
        let question = "Souhaitez-vous réellement utiliser l'adresse suivante : "
            + window.document.querySelector("#i_email").value;
        // .. Si la confirmation est ok ..
        if (confirm(question)) {
            window.document.querySelector("#form_contact").submit(); // .. On envoie le message
        }
    }
}




