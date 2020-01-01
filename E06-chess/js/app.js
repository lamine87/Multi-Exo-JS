
// dessiner des cases * 64

// récuperer le container existant
var chessBoard = document.getElementById('chess');

var letters = ['A','B','C','D','E','F','G','H'];

function createCell(couleur,colNumber,ligneNumber) {
  // création de ma cellule depuis JS
  var cell = document.createElement('div');
  // console.log('cell:', cell)

  // ajouter une class à ma balise
  cell.className = 'cellBasic ' + couleur;

  // ajouter le numero
  cell.textContent = letters[colNumber] + (8 - ligneNumber);
  
  // ajouter un id unique à ma cellule
  cell.id = letters[colNumber] + (8 - ligneNumber);

  // envoi mon element créé vers mon container chessBoard
  chessBoard.appendChild(cell);

  // ajouter un ecouteur d'event 
  cell.addEventListener('click',function(){
    var cellAModifier = document.getElementById(cell.id);

    var red = Math.random()*255;
    var green = Math.random()*255;
    var blue = Math.random()*255;

    cellAModifier.classList.toggle('active')
    
    cellAModifier.style["background-color"] ='rgb('+red+','+green+','+blue+')';
    
  })
}

///////////////////////////////////////////////////////////////////////////////////////////////////////


// A FAIRE
// var oldColor ;
// var caseNumber =0 ; // 0 --> 8 --> 0
// for(var i=0; i<64; i++){
//   caseNumber++;

//   if(caseNumber==8){
//     caseNumber = 0
//   }

//   if(i%2 == 0){
//     createCell('beige');
//   }else{
//     createCell('brown');
//   }
// }

// version prof
for (var numLigne = 0; numLigne < 8; numLigne++) {
  for (var numColone = 0; numColone < 8; numColone++) {

    if ((numLigne + numColone) % 2 == 0) {
      createCell('beige',numColone,numLigne);
    } else {
      createCell('brown',numColone,numLigne);
    }
  }
}


// version michel 
// var decalage = 0;
// for (var numLigne = 0; numLigne < 8; numLigne++) {

//   if (numLigne % 2 == 0) {
//     decalage = 1;
//   } else {
//     decalage = 0;
//   }

//   for (var numColone = 0; numColone < 8; numColone++) {
//     if ((numColone + decalage) % 2 == 0) {
//       createCell('brown');
//     } else {
//       createCell('beige');
//     }
//   }
// }




/////////////////////////////////////////////////////////////////////////////////////////////////////////




///// VERSION CORRIGé


/**
 * 1. Il faut créer directement en JS les éléments permettant de créer les 64 cases de l'échiquier :
 * > créer des éléments avec JS : createElement()
 * > 64 cases : 8 cases par ligne et il y a 8 lignes (grille de 8x8)
 * -> créer une case
 * -> ajouter la case au DOM (#chess)
 * -> créer une ligne de cases (8 cases d'un coup)
 * -> créer les 8 lignes contenant les cases
 *
 * 2. Il faut rajouter des classes à ces éléments pour faire des cases de couleurs différentes.
 */


var app = {
  init: function () {
    console.log('App init');
    // Recup de l'échiquier dans le DOM
    app.board = document.querySelector('#chess');

    // Je créer les 8 lignes (création des lignes)
    for (var line = 0; line < 8; line++) {
      // Je créer 8 case par dans une ligne (création de colonnes)
      for (var column = 0; column < 8; column++) {
        // Créer une case
        app.createSquare(line, column);
      }
    }
  },
  createSquare: function (lineNumber, colNumber) {
    console.log('Creation d\'une case');

    // créer l'élément du DOM
    var square = document.createElement('div');
    square.addEventListener('click', app.selectSquare);

    // Ajouter su style / classe CSS
    square.className = 'square';

    // Si c'est impair, je rajoute la classe square--brown
    if ((lineNumber + colNumber) % 2 !== 0 ) {
      square.className = 'square square--brown';
    }
    // Lettres stockées dans un tableau
    var letters = ['A','B','C','D','E','F','G','H'];

    square.textContent = letters[colNumber] + (8 - lineNumber);
    // ajouter au dom
    app.board.appendChild(square);
  },
  selectSquare: function (evt) {
    // la cible de l'événement
    var currentSquare = evt.target;
    console.log(currentSquare);

    // Ajoute 'active' si elle n'existe pas sur mon élément ou bien que tu la retires si elle est présente
    currentSquare.classList.toggle('active');
  },
};

document.addEventListener('DOMContentLoaded', app.init);




 
 
 
 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
 var app = {
  init: function(){
     console.log('App initialized');
     app.chess = document.querySelector('#chess'); // On importe la div chess
     app.pattern = 0;
     app.createChess();
  },  // Fin de la propriété init:

  handleClick: function(evt){
    app.target = evt.target;
    if (app.target.style.color=='red') {
      app.target.style.color='black';
      app.target.style.border = '0px';
    }else if(app.target.style.color!=='red'){
      app.target.style.color='red';
      app.target.style.border = '2px solid red';
    }
  },
  createChess: function(){
      app.cellCount = window.prompt('Veuillez indiquez la taille', 8);
      app.varj= app.cellCount;
    do {
    //8  6  4  2
      app.createRow();
     app.varj=app.varj-2;
    }while (app.pattern<(app.cellCount/2));
  }, // Fin de la propriété createChess:

  createRow: function(){
    app.vari=app.varj;
    // app.number=document.createTextNode(i);
    //   app.cell.appendChild(app.number);
    //8 7    6 5   4 3   2 1
    app.whiteRow=document.createElement('div');
    app.whiteRow.className = 'Row';
    app.chess.appendChild(app.whiteRow);
    app.createCell(app.whiteRow,app.vari);

    app.vari=app.vari-1;
    app.brownRow=document.createElement('div');
    app.brownRow.className='Row';
    app.chess.appendChild(app.brownRow);
    app.createCell(app.brownRow,app.vari)
    app.pattern++;
  }, // Fin de la propriété createRow:

  createCell: function(rowType,number){
    for (var i = 0; i < app.cellCount; i++) {
      app.cell =document.createElement('div');

      app.text=document.createTextNode(app.addLetter(i+1) + number);
      rowType.appendChild(app.cell);
      app.cell.appendChild(app.text);
       if ((i%2 === 0 && rowType === app.whiteRow)||(i%2 !== 0 && rowType === app.brownRow)) {
         app.cell.className="whiteCell";
         app.cell.classList.add("cell");
         app.cell.classList.add(app.addLetter(i+1) + number);
       }else if ((i%2 !== 0 && rowType === app.whiteRow)|| (i%2 === 0 && rowType === app.brownRow)) {
         app.cell.className="brownCell";
         app.cell.classList.add("cell");
         app.cell.classList.add(app.addLetter(i+1) + number);

       }
       app.cell.style.width=(100 / app.cellCount )+'%';
       app.cell.style.fontSize=(20/ app.cellCount )+'em';
       app.cell.addEventListener('click',app.handleClick);
     }
  },// Fin de la propriété createCell:

  addLetter: function(i){
    alphabet = {
    0:'Z',
    1:'A',
    2:'B',
    3:'C',
    4:'D',
    5:'E',
    6:'F',
    7:'G',
    8:'H',
    9:'I',
    10:'J',
    11:'K',
    12:'L',
    13:'M',
    14:'N',
    15:'O',
    16:'P',
    17:'Q',
    18:'R',
    19:'S',
    20:'T',
    21:'U',
    22:'V',
    23:'W',
    24:'X',
    25:'Y',
    }
    if (i >= 26) {
      i = (i%26);
    }
    return alphabet[i];
  }

}; // Fin de l'objet app


document.addEventListener('DOMContentLoaded', app.init);
