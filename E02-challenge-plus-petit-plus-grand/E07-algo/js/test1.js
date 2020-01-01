/*
 * Tests
 */
var container = document.getElementById('container');
if (
  doubleInt(4) === 8
  && doubleInt(-4) === -8
  && doubleInt(0) === 0
) {
  container.textContent = 'Yeaaah';
  container.className = 'success';
}
else {
  container.textContent = 'Nope';
  container.className = 'error';
}


/*
 * Exo1
 *
 * int est un entier
 * Le doubler, et le retourner
 */

/* === NOTIONS ===
 * - return
 * - types Number, Boolean
 * - opérateurs arithméthique
 */

/* === PLAN ===
 * - Multiplier la valeur reçue par 2
 * - Retourner le résultat de l'opération
 */

function doubleInt(int) {

}






/* === SOLUTION ===
  function doubleInt(int) {
    return int * 2;
  }
*/