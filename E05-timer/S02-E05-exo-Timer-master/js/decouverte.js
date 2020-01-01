
// setTimeout(function, delai);
// function = handler
// delai = temps exprimé en millisecondes
//

function hello() {
  console.log('hello');
}
console.log('start');

// Au bout d'un certain délai // compte à rebours
setTimeout(hello, 2000); // hello sera executée au bout de 2000 ms ou 2 secondes

// Toutes les .... millisecondes, répeteur / intervalle de temps régulier
setInterval(hello, 2000); // hello sera executée toutes les 2000 ms
