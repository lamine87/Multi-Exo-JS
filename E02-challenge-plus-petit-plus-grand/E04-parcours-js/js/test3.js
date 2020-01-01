/*
 * 1. L'utilisateur tape un nombre dans chaque input
 * 2. Chaque fois que l'on tape au clavier dans l'un des deux input
 *    et si les deux inputs sont remplis, on additionne les deux nombres
 *    et on affiche le résultat dans #result
 */


var app = {
  init: function () {
    console.log('App init');

    // recup les éléments du dom
    var input1 = document.getElementById('input1');
    var input2 = document.getElementById('input2');

    // écoute un évenement clavier
    input1.addEventListener('keyup', app.handleKeyup);
    input2.addEventListener('keyup', app.handleKeyup);
  },
  handleKeyup: function () {
    console.log('changement');
    // Recup les valeurs
    app.getNumbers();
    // Calculer et afficher le résultat
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
