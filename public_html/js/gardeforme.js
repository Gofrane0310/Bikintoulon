/* 
    Created on : 5 juin 2020, 11:12:35
    Author     : BEJAOUI, BRISCAS, BOUTELLIS, CALABUIG
*/

window.addEventListener("load", function() {
    window.document.querySelector("#btn_calculer").addEventListener("click", calculCal);
});

window.addEventListener("load", function() {
    window.document.querySelector("#btn_calculer").addEventListener("click", calories);
});

function calories (nb_effort, nb_poids, nb_temps) {
    let nb_calories;
    let elH1 = window.document.querySelector('#formulaire');
    elH1 = window.document.createElement('h1');
    elH1.id = 'remuneration';
    window.document.querySelector('#recueilinfos').appendChild(elH1);
    nb_calories = ((nb_effort*3,5*nb_poids)/200)*nb_temps;
    elH1.innerHTML = 'Une balade de nb_temps minutes vous a fait perdre nb_calories Kcal !';
    alert(nb_calories);
}

function calculCal() {
    var cal = ((document.getElementById("form_simulateur").elements["nb_poids"].value * document.getElementById("form_simulateur").elements["nb_effort"].value*3,5)/200)*document.getElementById("form_simulateur").elements["nb_temps"].value;
    alert(cal);
}
