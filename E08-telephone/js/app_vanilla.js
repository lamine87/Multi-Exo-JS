var app = {
  init: function() {
    // Je récupère mes boutons
    var buttons = document.querySelectorAll('#buttons button');

    // Sur chaque bouton
    for (var index = 0; index < buttons.length; index++) {
      // Je recup chacun des boutons
      var currentBtn = buttons[index];

      // Listener sur le 'click', et lance app.onClick
      currentBtn.addEventListener('click', app.onClick);
    }

  },

  onClick: function(evt) {
    // Je récup la cible de l'event
    var button = evt.target;

    // Alternative avec `this` : celui qui subit l'événement
    // console.log(this);

    // On récupére le contenu texte
    var text = button.textContent;

    // On l'affiche dans #num
    var divNum = document.getElementById('num');
    divNum.textContent += text;
  }
};

document.addEventListener('DOMContentLoaded', app.init);
