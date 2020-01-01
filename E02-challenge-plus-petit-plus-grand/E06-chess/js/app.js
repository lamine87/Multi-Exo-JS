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
