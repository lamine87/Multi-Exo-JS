// // debugger;

// var app = {

// };

// // Au chargement du DOM => app.init sera exécutée
// document.addEventListener('DOMContentLoaded', app.init);
'use strict';

// Selectionner le boutton
var elSubmit = document.querySelector('button');

// Ajouter l'événement click pour capture l'action à engager sur le boutton
elSubmit.addEventListener('click', function(e) {
	// Reset le comportement du boutton
    e.preventDefault();
	
    // Selectionner l'intégralité des inputs du formulaire
    var elInputs = document.querySelectorAll('input');
    // Déclarer le tableau pour sauvgarder les resultats
    var obj = [];
	
    // Parcourir tout les inputs récupérer avec le querySelectorAll
    elInputs.forEach(function(input) {
        var valid = true;
		
        // Si l'input et require et qu'il est vide colorer le champ en rouge si il n'ai pas requis le mettre en blanc
        if (input.dataset.require && !input.value.length) {
            input.style.background = 'red';
            valid = false;
        } else {
            input.style.background = 'white';
            valid = true;
        }
		
        // Pousser les éléments de chaque champs dans le tableau obj pour récupérer les resultats
        obj.push({
            id:  input.name,
            value: input.value,
            valid
        });
    });
	
    // Afficher le resultat
    console.log(obj);
});

// Selectionner l'input avec l'attribut name et la valeur nom
var elInputNom = document.querySelector('input[name="nom"]');

// Ajouter l'événement keypress (pour capturer les touches du clavier) sur l'input attribut name=nom
elInputNom.addEventListener('keypress', function(e) {
	// Afficher la valeur de la cible de l'événement déclenché
    console.log(e.target.value);
});