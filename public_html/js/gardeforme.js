/* 
    Created on : 5 juin 2020, 11:12:35
    Author     : BEJAOUI, BRISCAS, BOUTELLIS, CALABUIG
*/

window.addEventListener("load", function() {
    window.document.querySelector("#btn_calculer").addEventListener("click", calories);
});

function calories () {
    let nb_calories;
    elH1 = window.document.createElement('h1');
    nb_calories = ((("#nb_effort")*3,5*("#nb_poids"))/200)*("#nb_temps");
    elH1.innerHTML = 'Une balade de ("#nb_temps") minutes vous a fait perdre nb_calories Kcal !';
}
