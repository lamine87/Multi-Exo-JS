/*
 * 1. Dans #container, affiche l'heure à la seconde près.
 *    Sous le format : 11h 12m 06s
 * 2. Chaque seconde, l'heure doit être actualisée
 *
 * Astuce : on peut avoir un objet de date en faisant : var now = new Date();
 * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date
 */


var app = {
  init: function () {
    console.log('App init');
    // Je recup le container du DOM
    app.container = document.getElementById('container');
    // affichage de l'heure
    app.display();
    // interval pour le rafraichissement
    setInterval(app.display, 1000);
  },
  display: function () {
    // Recup de la date courante
    var now = new Date();

    // Recup de l'heure (HH:MM:SS)
    var hours = '0' + now.getHours();
    var minutes = '0' + now.getMinutes();
    var seconds = '0' + now.getSeconds();

    // Structure de l'affichage (HH:MM:SS)
    var hoursStructured = hours.slice(-2) + 'h';
    var minutesStructured = minutes.slice(-2) + 'm';
    var secondsStructured = seconds.slice(-2) + 's';

    // injection de la date dans le container
    app.container.textContent = hoursStructured + minutesStructured + secondsStructured;
  }
};

document.addEventListener('DOMContentLoaded', app.init);
