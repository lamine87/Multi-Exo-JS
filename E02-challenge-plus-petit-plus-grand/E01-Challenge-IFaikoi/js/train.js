/**
 * 1.	On est le contrôleur du train et on nous présente un billet en montant :
 *  - Si le type de billet est "first", on affiche "Première classe" dans la console
 *  - Sinon si le type de billet est "second", on affiche "Seconde classe"
 *  - Sinon si le type de billet est "eco", on affiche "Classe éco"
 */
var billet = "eco";
if (billet == "first") {
    console.log  ('Première classe');
}
else if (billet == "second" ){
    console.log  ('Seconde classe');
}
else{
    console.log ('Classe éco');
}


/**
 * 2. On répète le test pour chacun des autres billets mais avec switch
 * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/switch
 */
var billet = "eco"
switch (billet) {
    case 'first':
        console.log ('Première classe');
        break;
        case 'Seconde classe':
        console.log ('Seconde classe');
        break;
        default:
         console.log ( 'Classe éco');
}




/**
 * BONUS:
 * - Maintenant on demande directement le type du billet avec "prompt" et on affiche
 * le message correspondant avec "alert"
 */
