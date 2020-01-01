
// var app = {
//     'init': function(){

//     },
// }
// document.addEventListener('DOMContentLoaded',app.init())

// 1ère étape : récupérer les différents element HTML input/ bouton / ol avec leur id
// 2ème étape : ajouter un ecouteur d'event sur le bouton
// 3ème étape : lorsqu'on clique il faut créer un li, lui ajouter la value de l'input comme textContent, puis l'envoyer vers le HTML dans le ol
// --> Au clique sur le bouton, vous devez avoir la valeur contenue dans l'input qui s'affiche en bas dans votre li
// 4ème étape : Créer un tableau arrList. En utilisant la méthode push(), ajouter à chaque clique sur le bouton le contenue de l'input dans le tableau.
// 5ème étape : Utiliser vos lignes de code qui vous ont permis de créer le li et les mettre dans une fonction .


// function createLi(choseAAcheter){
// 	....createElement(...);
// 	...textContent=choseAAcheter
// 	...appendChild(...);
// }
//6ème étape : Utiliser un boucle for pour parcourir le tableau arrList, à chaque boucle executer la fonction createLi(...)
// 7ème étape : Créer une méthode deleteHTML :


// function deleteHTML(id){
// 	var myNode = document.getElementById(id);
// 	while (myNode.firstChild) {
// 	  myNode.removeChild(myNode.firstChild);
// 	}
// }



// var input = document.getElementById("shop-item");

// var list = document.getElementById("shopping-list");

// var btn = document.getElementById("add");

// var i=0;

// function createLi(choseAAcheter){
//     var li =document.createElement('li');
//     li.textContent=choseAAcheter
//     list.appendChild(li);
// }

// function createLi(choseAAcheter){
//     var li =document.createElement('li');
//     li.textContent=choseAAcheter
//     list.appendChild(li);
// }



var input = document.getElementById("shop-item")

var list = document.getElementById("shopping-list")

var btn = document.getElementById("add")

var arrList = [];



btn.addEventListener("click",function(evt){
    evt.preventDefault();
    arrList.push(input.value)
    deleteHTML('shopping-list');
    for (var i = 0; i < arrList.length; i++) {
        console.log('arrList[i]:',arrList[i])
        createLi(arrList[i])  
    }
})

function createLi(trucAAcheter){
    var li = document.createElement("li");
    li.textContent = trucAAcheter;
    list.appendChild(li);
}

function deleteHTML(id){
    var myNode = document.getElementById(id);
    while (myNode.firstChild) {
      myNode.removeChild(myNode.firstChild);
    }
}














// var counter2 = document.getElementById('conte');
// var j=0;

// non.addEventListener('click',
//     function(evt){
//         j = j+1
//         non.textContent ='oui ('+j+')';

//     });

