/*
 * Tests
 */
var container = document.getElementById('container');
if (
  getExtension('test1.css') === 'css'
  && getExtension('jquery.min.js') === 'js'
  && getExtension('.eslintrc') === 'eslintrc'
  && getExtension('monfichier') === false
) {
  container.textContent = 'Yeaaah';
  container.className = 'success';
}
else {
  container.textContent = 'Nope';
  container.className = 'error';
}


/*
 * Exo3
 *
 * str est une string
 * Retourner l'extension de fichier.
 * Par exemple index.html => html
 */

function getExtension(str) {

    var parts = str.split('.');
    if (parts.length === 1) {
      return false;
    }

    var test3 = parts[parts.length - 1];
    return test3;
  }

  
  



/* === NOTIONS ===
 * - types String, Array, Boolean
 * - length
 * - slice()
 * - lastIndexOf()
 * - split()
 */

/* === PLAN ===
 * 
 * Approche 1
 * ==========
 * 
 * - Récupèrer l'index (position) du dernier . dans la chaîne
 * - SI aucun . n'est trouvé, on arrête la fonction (on renvoie `false`)
 * - SI un . est trouvé, on utilise son index pour couper la chaîne à partir de la position du point
 * 
 * Approche 2
 * ==========
 * 
 * - Segmenter la chaîne à chaque . 
 * - SI un seul segment est présent, on retourne `false` - on arrête la fonction
 * - SI plusieurs segments existent, on récupère le dernier segment que l'on retourne 
 * 
 */









/* === SOLUTION 1 ===
  function getExtension(str) {
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
  }
*/


/* === SOLUTION 2 ===
  function getExtension(str) {
    // Je vais couper ma string à chaque point
    var parts = str.split('.');

    // Si j'ai qu'un seul élément, je retourne false
    if (parts.length === 1) {
      return false;
    }

    // Je prends le dernier
    // dernier = length - 1 (-1, parce qu'on indexe à partir de 0)
    var lastPart = parts[parts.length - 1];

    // Je retourne la dernière partire qui est l'extension
    return lastPart;
  }
*/