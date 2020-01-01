// var nbRandom = Math.floor(Math.random() * 1000);
// var nbUser;

// while (nbRandom != nbUser) {
//     nbUser = prompt('Merci de proposer un chiffre');

//     if (nbUser > nbRandom) {
//         alert("c'est inferieur");

//     } else if (nbUser < nbRandom) {
//         alert("c'est superieur");
//     } else {
//         alert("tu as gagné");
//     }
// }

///////////////////////////////
//     CREATION DU HTML     //
//////////////////////////////

var container = document.getElementById('container');


// CREATION DU PARAGRAPHE INFO
//////////////////////////////
var paraInfo = document.createElement('p');
paraInfo.textContent="A vous de jouer";
container.appendChild(paraInfo);

// CREATION DE L'INPUT
///////////////////////////

// creation du sous-conteneur pour l'input
var divInput = document.createElement('div');
divInput.className= 'subContainer';
container.appendChild(divInput);

var label = document.createElement('label');
label.textContent="Nombre :";
divInput.appendChild(label);

var input = document.createElement('input');
input.type='text';
divInput.appendChild(input);

// CREATION DES BOUTONS
///////////////////////////

// creation du sous-conteneur des deux boutons
var divBouton = document.createElement('div');
divBouton.className= 'subContainer';
container.appendChild(divBouton);

// creation du bouton start
var btnStart = document.createElement('button');
btnStart.textContent="Start";
divBouton.appendChild(btnStart);

// creation du bouton proposer
var btnPropose = document.createElement('button');
btnPropose.textContent="Proposer ce nombre";
divBouton.appendChild(btnPropose);

//////////////////////////////
// FIN DE CREATION DU HTML
//////////////////////////////

//////////////////////////////
// AJOUT DES ECOUTEURS
//////////////////////////////




//////////////////////////////
// INITIALISATION
//////////////////////////////

var nbUser;
var nbRandom;


//////////////////////////////
// CREATION DU HTML
//////////////////////////////

var container = document.getElementById('container');


// CREATION DU PARAGRAPHE INFO
//////////////////////////////
var paraInfo = document.createElement('p');
paraInfo.textContent = "Bienvenue";
container.appendChild(paraInfo);

// CREATION DE L'INPUT
///////////////////////////

// creation du sous-conteneur pour l'input
var divInput = document.createElement('div');
divInput.className = 'subContainer';
container.appendChild(divInput);

var label = document.createElement('label');
label.textContent = "Nombre :";
divInput.appendChild(label);

var input = document.createElement('input');
input.type = 'text';
divInput.appendChild(input);

// CREATION DES BOUTONS
///////////////////////////

// creation du sous-conteneur des deux boutons
var divBouton = document.createElement('div');
divBouton.className = 'subContainer';
container.appendChild(divBouton);

// creation du bouton start
var btnStart = document.createElement('button');
btnStart.textContent = "Start";
divBouton.appendChild(btnStart);

// creation du bouton proposer
var btnPropose = document.createElement('button');
btnPropose.textContent = "Proposer ce nombre";
divBouton.appendChild(btnPropose);

//////////////////////////////
// FIN DE CREATION DU HTML
//////////////////////////////

//////////////////////////////
// AJOUT DES ECOUTEURS
//////////////////////////////

btnStart.addEventListener("click", start)

btnPropose.addEventListener("click",checkNumber)

//////////////////////////////
// FONCTIONS UTILS
//////////////////////////////

function start() {
    nbRandom = Math.floor(Math.random() * 1000);
    nbUser = -1;
    paraInfo.textContent = "A vous de jouer";
}

function checkNumber() {
    // version simple 
    nbUser = input.value;

    if (nbUser > nbRandom) {
        paraInfo.textContent = "c'est inferieur";
    } else if (nbUser < nbRandom) {
        paraInfo.textContent = "c'est superieur";
    } else {
        paraInfo.textContent = "tu as gagné";
    }
}


// 1ere étape : Créer une class css 'hidden' avec une prop' display: none;
// 2ème étape : A la création du bouton Propose, lui donner la class 'hidden' avec .className
// 3ème étape : Au clic sur start supprimer la class hidden du bouton Propose (toujours avec .className)
// 4ème étape: Si on gagne, il faut venir cacher le bouton proposé




/////// CREER UN COMPTEUR DE NOMBRE D'ESSAI : par exemple l'utilisateur aura droit à 10 try si il ne trouve pas le bon chiffre avant 10 il perd sinon il gagne

// 1ère étape : créer la variable et l'incrémenter ( console.log pour vérifier que cela fonctionne)
// 2ème étape : ajouter la condition si compteur < 10 pour la victoire 
// 3ème étape : ajouter un nouveau if ou else if ou else pour la défaite si compteur > 10 
// 4ème étape : créer un élément HTML depuis JS : une balise p qui viendra prendre comme textContent une concaténation de 'Nombre de coup restant' et la valeur de mon compteur.



var app = {
    init:function (){
        app.nbUser;
        app.nbRandom;
        app.container = document.getElementById('container');

        app.createHTML();
        app.addEvent()
    },
    createHTML: function (){
        // CREATION DU PARAGRAPHE INFO
        //////////////////////////////
        app.paraInfo = document.createElement('p');
        app.paraInfo.textContent = "Bienvenue";
        app.container.appendChild(app.paraInfo);

        // CREATION DE L'INPUT
        ///////////////////////////

        // creation du sous-conteneur pour l'input
        var divInput = document.createElement('div');
        divInput.className = 'subContainer';
        app.container.appendChild(divInput);

        var label = document.createElement('label');
        label.textContent = "Nombre :";
        divInput.appendChild(label);

        app.input = document.createElement('input');
        app.input.type = 'text';
        divInput.appendChild(app.input);

        // CREATION DES BOUTONS
        ///////////////////////////

        // creation du sous-conteneur des deux boutons
        var divBouton = document.createElement('div');
        divBouton.className = 'subContainer';
        app.container.appendChild(divBouton);

        // creation du bouton start
        app.btnStart = document.createElement('button');
        app.btnStart.textContent = "Start";
        divBouton.appendChild(app.btnStart);

        // creation du bouton proposer
        app.btnPropose = document.createElement('button');
        app.btnPropose.textContent = "Proposer ce nombre";
        app.btnPropose.className='hidden';
        divBouton.appendChild(app.btnPropose);

    },
   
    addEvent: function () {

        app.btnStart.addEventListener("click", app.start)

        app.btnPropose.addEventListener("click", app.checkNumber)
    },

    start: function () {
        app.nbRandom = Math.floor(Math.random() * 1000);
        app.nbUser = -1;

        app.paraInfo.textContent = "A vous de jouer";
        app.input.value='';
        app.btnPropose.className = '';
        // btnPropose.classList.remove('hidden');
    },
    checkNumber: function () {
        // version simple 
        app.count = app.count - 1;
        app.counterInfos.textContent = " nombre de coups restant " + app.count;
        console.log(app.count)
        app.nbUser = app.input.value;
        console.log("nbUser:", app.nbUser, "nbRd:", app.nbRandom)

        if(app.count > 0){
            if (app.nbUser > app.nbRandom) {
                app.paraInfo.textContent = "c'est inferieur";
            } else if (app.nbUser < app.nbRandom) {
                app.paraInfo.textContent = "c'est superieur";
            } else if (app.nbUser == app.nbRandom) {
                app.paraInfo.textContent = "tu as gagné";
                app.btnPropose.className = 'hidden';
            }
        }else{
            app.paraInfo.textContent = "you lose !!";
            app.btnPropose.className = 'hidden';
        }
    }
}
    document.addEventListener('DOMContentLoaded', app.init())

   


