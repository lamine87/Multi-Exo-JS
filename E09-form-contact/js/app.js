// Au submit, on va vérifier :
//
// * Que chaque champ est rempli.
//   * Si non, afficher un message d'erreur
//   * Si oui, laisser le formulaire faire sa requête
//
// * Pour chaque champ
//   * On affiche une ombre bleue si le champ est actif
//   * Une fois qu'il n'est plus actif, on affiche une bordure verte si le champ a été rempli
//   * Une fois qu'il n'est plus actif, on affiche une bordure rouge si le champ n'a pas été rempli
//
// * **BONUS** Si le contenu du textarea dépasse 500 caractères, afficher "Dis-donc, on a un bavard !".


// 1. Récup les éléments dans le DOM
//  - [x] formulaire de contact
//  - [x] les champs de formulaires
// 2. poser des écouteurs sur les éléments necessaire
//  - [x] formulaire : écoute du submit
// 3. handler pour la soumission
//  - [x] On doit check si les champs sont remplis => fonction dédiée
//  - [x] Condition : message d'erreur si un champ est vide sinon on envoi le formulaire
//    - [x] if > blocage du comportement par défaut
// 4. fonction de validation d'un champ
//  - [x] un champ doit etre recup (parametre)
//  - [x] si la valeur est vide (length ou '') alors erreur (booleen ?)


var app = {
  init: function () {
    console.log('app init');
    // Recup les elem du DOM
    app.$form = $('#form-contact');
    app.$fieldName = $('#form-field-name');
    app.$fieldEmail = $('#form-field-email');
    app.$fieldMessage = $('#form-field-message');

    // Ecouteurs
    app.$form.on('submit', app.checkForm);
    app.$fieldMessage.on('keyup', app.checkLimit);
  },
  checkForm: function (evt) {
    if (app.hasErrors()) {
      // j'empeche l'envoi
      evt.preventDefault();
      // j'affiche l'erreur (show(), css(), fadeIn(), ...)
      $('#form-empty').fadeIn();
    }
  },
  isEmail: function(email) {
    // 1. = il y a au moins une fois : ( caractères entre a et z, caractères entre A et Z, chiffres de 0 à 9, _, il peut y avoir plusieurs points (.), - )
    // 1. ([a-zA-Z0-9_.+-])+
    // 2. = il doit y avoir un @
    // 2. \@
    // 3. (
    // 3.1. = il doit y avoir au moins une fois : (caractères entre a et z, caractères entre A et Z, chiffres de 0 à 9, -)
    //  3.1. ([a-zA-Z0-9-])+
    //  3.2. = il doit y avoir un point
    //  3.2. \.
    // )+
    // 4. il y a y avoir au moine une fois entre 2 et 4 caractères de type : ( caractères entre a et z, caractères entre A et Z, chiffres de 0 à 9, )
    // 4. ([a-zA-Z0-9]{2,4})+
    // nnn.nnn@nnn.nn
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  },
  checkLimit: function() {
    // Afficher le nombre de caractères
    var count = $(this).val().length;

    console.log(this); // la cible de l'évenement (element du DOM)
    console.log($(this)); // L'élément du DOM converti en jQuery

    $('#char-count').text(count);

    if (count > 500) {
      $('#form-too-long').fadeIn();
    }
    else {
      $('#form-too-long').hide();
    }

  },
  hasErrors: function() {
    // Est-ce que le champ est valide ? => booleen
    var name = app.isValid(app.$fieldName);
    var email = app.isValid(app.$fieldEmail);

    console.log(app.isEmail(app.$fieldEmail.val()));

    var message = app.isValid(app.$fieldMessage);

    // true = il y a des erreurs
    return !name || !email || !message;
  },
  // isValid vérifie la validité d'un champ
  isValid: function ($field) {
    // On nettoie
    $field.removeClass('valid error');

    // booleen : est ce rempli ?
    var fieldIsValid = $field.val().trim() !== '';

    // La ternaire de l'angoisse :O
    // -> fieldIsValid est(?) 'valid' ou(:) 'error'
    var currentClass = fieldIsValid ? 'valid' : 'error';
    $field.addClass(currentClass);

    // classique avec un if
    // if (fieldIsValid) $field.addClass('valid');
    // else $field.addClass('error');

    // true = si le champ est valide
    return fieldIsValid;
  },
};

$(app.init);
