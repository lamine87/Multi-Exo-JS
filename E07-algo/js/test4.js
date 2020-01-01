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
   
 // Définir une variable pour recevoir la chaîne la plus longue
    var pluslong = '';

 // SI le tableau est vide on arrête la fonction, on retourne `false`
 if (arr.length === 0) {
  return false;
}

//  SI la taille de cet élément est plus grand que la chaîne stockée, on remplace la valeur actuelle par l'élément
    for (temple in arr) {
      var str = arr[temple];

  
      if (str !== 'string') {
           //  SINON on ne fait rien, on continue sans agir.
      }
    
      if (str.length > pluslong.length) {
        pluslong = str;
      }
    }
   
  // Une fois le tableau parcouru, on renvoie la chaîne la plus longue (la valeur stockée)
    return pluslong;
  }

  
// Solution 2

  function getLongestString(arr) {

    var longestWord = '';
  
    // cas où le tableau est vide
    if(arr.lenght === 0){
      return false ;
    }
  
    var tailleMax=0;
  
    for (var counter = 0 ; counter< arr.lenght ; counter=counter+1){
  
      var motActuel = arr[counter];
  
      if(  motActuel.lenght > tailleMax    ){
        tailleMax = motActuel.lenght ;
        longestWord = motActuel;
      }
      
    }
  
    // retourne le mot le plus long du tableau
    return longestWord;
  }
  
  getLongestString(['123','2423'])








