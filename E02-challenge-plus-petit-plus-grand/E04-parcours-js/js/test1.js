/*
 * 1. Demander à l'utilisateur de rentrer un premier nombre dans une boite de dialogue
 * -> prompt
 * -> stocker la valeur
 * -> convetir en nombre
 *
 * 2. Demander à l'utilisateur de rentrer un 2e nombre dans une boite de dialogue
 * -> prompt
 * -> stocker la valeur
 * -> convetir en nombre
 *
 * 3. Additionner les deux nombres
 * -> calcul avec les 2 valeurs (nombres) récup avant
 *
 * 4. Afficher le résultat dans #container
 * -> cibler un élément du dom
 * -> injecter le résultat du calcul
 */

var app = {
  init: function () {
    console.log('App init');
    // Recup des nombres
    app.getNumbers();

    // Calcul et affichage
    app.display();
  },
  getNumbers: function () {
    // Recup des nombres
    var userNumber1 = window.prompt('Entrez un nombre');
    var userNumber2 = window.prompt('Entrez un 2eme nombre');
    // Convertir en nombre
    app.userNumber1 = Number(userNumber1);
    app.userNumber2 = Number(userNumber2);
  },
  display: function () {
    // Si les nombres sont bien des nombres exploitables
    if (!isNaN(app.userNumber1) && !isNaN(app.userNumber2)) {
      // addition
      var result = app.userNumber1 + app.userNumber2;
      // Cible un élément du DOM
      var container = document.getElementById('container');
      // Afficher le résultat
      container.textContent = result;
    }
  },
};

document.addEventListener('DOMContentLoaded', app.init);
