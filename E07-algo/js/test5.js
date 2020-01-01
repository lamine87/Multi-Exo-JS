/*
 * Tests
 */
var container = document.getElementById('container');
if (
  sum([1, 2, 3]) === 6
  && sum(['un', 2, 'trois', 4, 'cinq']) === 6
  && sum([]) === 0
  && sum([1, [2, 3, [4, 5], 6], 7, [8, 9]]) === 45
) {
  container.textContent = 'Yeaaah';
  container.className = 'success';
}
else {
  container.textContent = 'Nope';
  container.className = 'error';
}


/*
 * Exo5
 *
 * arr est un array
 * Retourner la somme des nombres contenus dans cet array
 */

/* === NOTIONS ===
 * - types String, Array, Boolean, Number
 * - structures : for, if
 * - function / return
 * - typeof
 */

/* === PLAN ===
 * 
 * - Définir une variable pour recevoir le cumul des sommes
 * - POUR chaque élément du tableau
 *   - SI l'élément est un nombre (son type), on l'additionne au cumul
 *   - SINON SI c'est un tableau, on additionne au cumul le retour d'une fonction dont le travail est d'additionner des valeurs présentes dans un tableau
 * - Retourner le cumul
 * 
 * Notes : 
 * - sum() prend un tableau
 * - Le rôle de la fonction sum() est d'additionner tous les chiffres présents dans un tableau
 * 
 */

function sum(arr) {

    var result = 0;
   
    for (var index in arr) {
      var item = arr[index];

      if (typeof item === 'number') {
        result += item;
      }

      else if (typeof item === 'object') {
        result += sum(item);
      }
    }
    return result;
  }
  










/* === SOLUTION ===
  function sum(arr) {
    // Variable qui va venir accumuler les sommes
    var result = 0;

    // Pour chaque élément du tableau
    for (var index in arr) {
      var item = arr[index];

      // Si c'est un nombre, on additionne
      if (typeof item === 'number') {
        result += item;
      }

      // Si c'est un array, on additionne en utilisant sum()
      else if (typeof item === 'object') {
        result += sum(item);
      }
    }

    // On retourne la somme
    return result;
  }
*/
