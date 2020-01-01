/*
 * Tests
 */
var container = document.getElementById('container');
if (
  getLongestString(['coucou', 'hello', 'bonjour']) === 'bonjour'
  && getLongestString(['css', 'html', 'js', 'php']) === 'html'
  && getLongestString([]) === false
  && getLongestString(['un', 2, 'trois', 4, 'cinq']) === 'trois'
) {
  container.textContent = 'Yeaaah';
  container.className = 'success';
}
else {
  container.textContent = 'Nope';
  container.className = 'error';
}


/*
 * Exo4
 *
 * arr est un array
 * Retourner la chaine la plus longue de l'array
 */


/* === NOTIONS ===
 * - types String, Array, Boolean
 * - structures : for, if, continue
 * - typeof
 */

/* === PLAN ===
 * 
 * - Définir une variable pour recevoir la chaîne la plus longue
 * - SI le tableau est vide on arrête la fonction, on retourne `false`
 * - POUR chaque élément du tableau
 *   - SI la taille de cet élément est plus grand que la chaîne stockée, on remplace la valeur actuelle par l'élément
 *   - SINON on ne fait rien, on continue sans agir.
 * - Une fois le tableau parcouru, on renvoie la chaîne la plus longue (la valeur stockée)
 * 
 */

function getLongestString(arr) {

}









/* === SOLUTION ===
  function getLongestString(arr) {
    // Je définis la string la plus grande
    var strMax = '';

    // Sur chaque élément
    for (var index in arr) {
      var str = arr[index];

      // On vérifie que c'est pas une chaine de caractère
      if (typeof str !== 'string') {
        // Si je veux passer à l'itération suivante
        continue;
      }

      // Puis on regarde si c'est la plus grande
      if (str.length > strMax.length) {
        strMax = str;
      }
    }

    // Si l'array est vide, on renvoie false
    if (arr.length === 0) {
      return false;
    }

    // On retourne la plus grande
    return strMax;
  }
*/