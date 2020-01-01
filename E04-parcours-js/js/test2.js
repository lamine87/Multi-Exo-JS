/*
 * 1. L'utilisateur tape un nombre dans chaque input, puis clique sur OK
 * 2. A la soumission du formulaire, on additionne les deux nombres
 *    Et on affiche le résultat dans #result
 * -> cibler un élément du dom
 * -> écouter la soumission
 * -> lors de la soumission
 *
 */

var app = {
  init: function () {
    console.log('App init');
    // Je recup le form
    var form = document.getElementById('container');
    form.addEventListener('submit', app.submitForm);
  },
  submitForm: function (evt) {
    // bloquer le comportement par défaut
    evt.preventDefault();
    // Recup les nombres // valeur des champs
    app.getNumbers();
    // calculer et afficher
    app.display();
  },
  getNumbers: function () {
    // Recup des nombres
    var userNumber1 = document.getElementById('input1');
    var userNumber2 = document.getElementById('input2');
    // Convertir en nombre
    app.userNumber1 = Number(userNumber1.value);
    app.userNumber2 = Number(userNumber2.value);
  },
  display: function () {
    // Si les nombres sont bien des nombres exploitables
    if (!isNaN(app.userNumber1) && !isNaN(app.userNumber2)) {
      // addition
      var result = app.userNumber1 + app.userNumber2;
      // Cible un élément du DOM
      var container = document.getElementById('result');
      // Afficher le résultat
      container.textContent = result;
    }
  },
};

document.addEventListener('DOMContentLoaded', app.init);
