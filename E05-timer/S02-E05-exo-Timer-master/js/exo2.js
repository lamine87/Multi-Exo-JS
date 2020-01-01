var app = {
    init: function () {
        app.container = document.getElementById('app');
        app.createHTML();
        app.addEvent();
        app.launch();
    },
    createHTML: function () {
        // créer un paragraphe
        app.clock = document.createElement('p');
        // version sans app
        // var clock = document.createElement('p');
        app.container.appendChild(app.clock);

        // creation du sous container pour les deux boutons
        var subContainer = document.createElement('div');
        subContainer.id = 'subContainer';
        app.container.appendChild(subContainer)

        // créer un bouton stop
        app.buttonStop = document.createElement('button')
        app.buttonStop.textContent = 'Stop'
        subContainer.appendChild(app.buttonStop)

        // créer un bouton reprendre
        app.buttonReStart = document.createElement('button')
        app.buttonReStart.textContent = 'restart';
        subContainer.appendChild(app.buttonReStart)

    },

    launch: function () {
        app.timerId = setInterval(app.getTime, 1000);
    },

    getTime: function () {
        var date = new Date();
        var h = date.getHours();
        var m = date.getMinutes();
        var s = date.getSeconds();
        if (h < 10) {
            h = '0' + h;
        }
        if (m < 10) {
            m = '0' + m;
        }
        if (s < 10) {
            s = '0' + s;
        }
        app.clock.textContent = h + ' : ' + m + ' : ' + s
    },

    addEvent: function () {
        app.buttonReStart.addEventListener('click', app.launch)
        app.buttonStop.addEventListener('click', app.stop)
    },

    stop: function () {
        console.log('stop')
        clearInterval(app.timerId);
    }
};

document.addEventListener('DOMContentLoaded', app.init())
////////////////



































// var Affiche = document.getElementById("Compte");
// var format;

// function mouseover(){
//     format="secondes";

// }
// function mouseout(){
//     format="jours";
// }
// function Rebour() {
// var date1 = new Date();
// var date2 = new Date ("September 9 21:30:00 2011");
// var sec = (date2 - date1) / 1000;
// var n = 24 * 3600;
// if (sec > 0)
//     {
//         j = Math.floor (sec / n);
//         h = Math.floor ((sec - (j * n)) / 3600);
//         mn = Math.floor ((sec - ((j * n + h * 3600))) / 60);
//         sec2 = Math.floor (sec - ((j * n + h * 3600 + mn * 60)));
//         if (format = "jours"){


//                 document.getElementById("Compte").innerHTML = "Temps restant : "+ Math.floor(sec) + " s ";
//                 window.status = "Temps restant : " + Math.floor(sec) + " s ";
//             }
//         else
//         {
//             document.getElementById("Compte").innerHTML = "Temps restant : "+ Math.floor(sec) + " s ";
//             window.status = "Temps restant : " + Math.floor(sec) + " s ";
//         }
//     }
    
//     else{
//         document.getElementById("Compte").innerHTML = "Temps restant : 0j 00h 00min 00s";
//         window.status = "Temps restant : 0j 00h 00min 00s";
//     }
// tRebour=setTimeout ("Rebour();", 1000);
// }



// var compteRebours = document.getElementById("compteRebours");

// var date = new Date();


// var paragraphe = document.createElement('p');

// paragraphe.textContent = date.getHeure + minute + seconde;

// paragraphe.appendChild(paragraphe);










// var prefixe = "Compte à rebours terminé dans";

// if (totalSecondes < 0)
// {
//     prefixe = "Compte à rebours terminé"; // On modifie le préfixe si la différence est négatif
//     totalSecondes = Math.abs(totalSecondes); // On ne garde que la valeur absolue
// }

// if (totalSecondes > 0)
// {
//     // A faire, tous nos calculs
// }
// else // Si total_secondes == 0 (puisque l'on a prit sa valeur absolue)
// {
//     compteRebours.innerHTML = 'Compte à rebours terminé.';
