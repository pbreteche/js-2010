'use strict';

// Une fonction est un enchainement de traitements (instructions)
//  * définit 1 fois au préalable
//  * peut être invoquer à de multiples reprises
//  * peut accepter des paramètres

let result = carre1(3) // 9
result = carre2(3) // undefined is not a function

// Définition d'une fonction avec la syntaxe de déclaration
function carre1(x) { // nommage de la fonction "carre" + nommage premier paramètre "x"
    return x * x; // return termine l'exécution de la fonction et définit la valeur "résultat"
}

// Définition d'une fonction avec la syntaxe d'expression
const carre2 = function (x) {
    return x * x;
}

console.log(variable1); // undefined
const variable1 = 4;
console.log(variable1); // 4