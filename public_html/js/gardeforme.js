/* 
    Created on : 5 juin 2020, 11:12:35
    Author     : BEJAOUI, BRISCAS, BOUTELLIS, CALABUIG
*/

window.addEventListener("load", function() {
    window.document.querySelector("#btn_calculer").addEventListener("click", calculCal);
});

window.addEventListener("load", function() {
    window.document.querySelector("rst_annuler").addEventListener("click", efface());
});



function calories (nb_cal) {
    let elH1 = window.document.querySelector('#formulaire');
    elH1 = window.document.createElement('p');
    elH1.id = 'formulaire';
    window.document.querySelector('#recueilinfos').appendChild(elH1);
    elH1.innerHTML = 'Une balade de ' + document.getElementById("form_simulateur").elements["nb_temps"].value + ' minutes vous a fait perdre ' + nb_cal + ' Kcal !';
}

function calculCal() {
    var cal = document.getElementById("form_simulateur").elements["nb_poids"].value * document.getElementById("form_simulateur").elements["nb_effort"].value*document.getElementById("form_simulateur").elements["nb_temps"].value*3.5/200;
    calories(cal);
}
