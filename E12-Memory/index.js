var app = {
    'init': function () {
        console.log('--> init');
        // importer le plateau qui va contenir les cartes
        app.plateau = document.getElementById('plateau');
        // tableau qui contient les classes permettants d'identifier deux cartes identiques
        app.arrayClass = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
            'i', 'j', 'k', 'l', 'm', 'n', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
            'i', 'j', 'k', 'l', 'm', 'n'];
        app.clickAllowed = true;
        app.clickCount = 1;
      
        // lancer la function pour créer le plateau
        app.createPlateau();
    },
    'createPlateau': function () {
        // boucle for qui s'execute 28 fois de 0 à 27
        for (var i = 0; i < 28; i++) {
            app.createCard(i);
        }
    },
    'createCard': function (param) {
        console.log('createCard(', param, ')');

        // créer une div au sein du javascript
        var card = document.createElement('div');
        // ajouter une class commune à toute les cartes : card
        // ajouter la class commune à deux cartes :  app.arrayClass[param]
        card.className = 'card ' + app.arrayClass[param];
        // ajouter un id unique à l'élément
        card.id = param;

        // modifier dynamiquement la propriété css backgroundpositiony
        // pour les 14 premières cartes de l'image png
        if ((param + 1) < 15) {
            card.style.backgroundPositionY = (param + 1) * 100 + 'px';
            // pour repartir à 100px pour reprendre les 14 premières cartes
        } else {
            card.style.backgroundPositionY = (param + 1 - 14) * 100 + 'px';
        }
        // envoyer la div vers le html dans le plateau
        app.plateau.appendChild(card);

        // ajouter un ecouteur d'evenement click
        card.addEventListener('click', function (evt) {
            console.log(evt.target.id)
            // ajouter ou enlever la class active sur l'element sur lequel on a cliqué
            
            if (app.clickAllowed) {
                evt.target.classList.toggle('active');

                if (app.clickCount == 1) {
                    app.clickCount=app.clickCount+1;
                    // evt.target.classList.toggle('active');/*
                } else if (app.clickCount == 2) {
                    app.clickCount=1;
                    app.clickAllowed=false;
                    // evt.target.classList.toggle('active');
                } 
                     if(app.card===app.card){
                        app.clickAllowed=true;
                     }else{
                          app.clickAllowed=false;
                     }
                    
            }
        })
    }
}
document.addEventListener('DOMContentLoaded', app.init);