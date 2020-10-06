'use strict';

// définition d'un objet littéral
const myContact1 = {
    firstName: 'Pierre',
    email: 'pbreteche@dawan.fr',
    welcome: function() {
        console.log('bonjour, je suis ' + this.firstName);
    }
}

// création d'une fonction "constructeur"
// qui a pour but de "construire" des objets
const Contact = function(firstName, email) {
    this.firstName = firstName;
    this.email = email;
}

// Le prototype d'une fonction constructeur permet de mutualiser
// ce qui sera partagé par tous les objets "Contact"
Contact.prototype.welcome = function() {
    console.log('bonjour, je suis ' + this.firstName);
}

// appel de la fonction constructeur avec "new"
const myContact2 = new Contact('Gurvan', 'gcarriou@dawan.fr');

console.log(myContact1);
console.log(myContact2);
