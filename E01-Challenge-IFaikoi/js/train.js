/**
 * 1.	On est le contrôleur du train et on nous présente un billet en montant :
 *  - Si le type de billet est "first", on affiche "Première classe" dans la console
 *  - Sinon si le type de billet est "second", on affiche "Seconde classe"
 *  - Sinon si le type de billet est "eco", on affiche "Classe éco"
 */
//var billet = "eco";



/**
 * 2. On répète le test pour chacun des autres billets mais avec switch
 * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/switch
 */


/**
 * BONUS:
 * - Maintenant on demande directement le type du billet avec "prompt" et on affiche
 * le message correspondant avec "alert"
 */


 // Function : retourner le parametre multiplier par deux
 // Function paramètre
 // Retourner paramètre * 2
 // Instance de ma function avec pour paramètre 4, cela renvoie 8
 

//  function nombre(chiffre){
//      return (chiffre * 4);
//  }


// function nombre(chiffre){
//     console.log(chiffre)
//     var valeur = chiffre * 2;
//     return (valeur);
// }
// console.log (nombre(10));


var coeff = 2;

function doubleLeChiffre(chiffreAMultiplier) {

    // console.log("chiffre avant multiplication :",chiffreAMultiplier)

    var valeur= chiffreAMultiplier*coeff;

    // console.log("chiffre après multiplication :",valeur)
    
    return valeur;
}

console.log( "résulat: ", doubleLeChiffre(500));



// function affiche(chiffre){

//     console.log('Le resultat est' + chiffre);
// }
//  affiche(doubleLeChiffre(4));

// displayResult(doubleLeChiffre(5));


// 1 ere étape 
// je passe le chiffre 5 à la fonction doubleLeChiffre
// donc la fonction devient :

// function doubleLeChiffre(5) {
//     return 5 * 2;
// }

// 2eme étape je remplace doubleLechiffre(5) par la valeur après le return : 10

// displayResult(10);

// 3eme étape : je passe le chiffre 10 à la fonction displayResult
// donc la fonction devient :

// function displayResult(10) {
//     console.log('Le résultat est ' + 10);
// }

//4eme étape : j'execute displayResult c-a-d je fais console.log('Le résultat est 10')

// 'Le résultat est 10'



// créer une fonction qui renvoie une chaine de caractère 'Mon nom est' en concaténant un paramètre à la fin du string.

// créer une 2ème fonction qui renvoie une chaine de caractère 'Mon prénom est' en concaténant un paramètre à la fin du string.

// créer une 3ème fonction qui affiche les deux resultats des précédentes fonctions comme cela :
// 'Mon nom est KIRK et Mon prénom est Axel'




function nom(diarra){

return ("Mon nom est :" + diarra)
}

function prenom(lamine){

    return ("Mon prenom est :" + lamine);
    }

    // function nomPrenom(diarra, lamine){
    //     // return diarra + lamine;

    //     console.log(nomPrenom(diarra, lamine));
    // }

   function nomPrenom(nom,prenom){
       console.log(nom(diarra)+" et "+prenom(lamine))
   }
   resultat ("diarra","lamine");

//    **************************************************************************

   function identifiant(parametre){
    return "mon nom est " + parametre;
}
function classe(parametre){
    return "mon prenom est " + parametre;
}

// version kamel
function  resultat(nom,prenom){
    console.log(identifiant(nom)+" et "+classe(prenom))
}
resultat ("guenineche","kamel");

// version Ali
function nomEtPrenom(toto,tata){
    console.log(toto+" et "+tata)
}
nomEtPrenom(identifiant("YILDIZ"),classe("ALI"))
