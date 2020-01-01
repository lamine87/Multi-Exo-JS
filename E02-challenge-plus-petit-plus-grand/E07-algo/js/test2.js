/*
 * Tests
 */
var container = document.getElementById('container');
if (!isEven(1) && isEven(2) && !isEven(3) && isEven(35468432)) {
  container.textContent = 'Yeaaah';
  container.className = 'success';
}
else {
  container.textContent = 'Nope';
  container.className = 'error';
}


/*
 * Exo2
 *
 * int est un entier
 * Retourner "true" si c'est pair, "false" si c'est impair
 */


/* === NOTIONS ===
 * - return
 * - types Number, Boolean
 * - opérateurs arithméthique
 * - condition
 * - comparaison
 */

/* === PLAN ===
 * 
 * Approche 1
 * ==========
 * 
 * - SI l'entier transmit est pair (multiple de 2)
 * - ALORS la fonction doit renvoyée un booléen `true` (est pair)
 * - SINON la fonction doit renvoyée un booléen `false` (n'est pas pair)
 * 
 * Approche 2
 * ==========
 * 
 * - On retourne `true` sur l'entier diviser par 2 n'a pas de reste (est pair / multiple de 2)
 * - On retourne `false` si l'entier n'est pas pair
 * 
 */

function isEven(int) {

}








/* === SOLUTION 1 ===
  function isEven(int) {
    if (int % 2 === 0) {
      // Pair
      return true;
    }
    else {
      // Impair
      return false;
    }
  }
*/

/* === SOLUTION 2 ===
  function isEven(int) {
    return int % 2 === 0;
  }
*/