'use strict';
// active le mode strict
// Principe générale = transformer les problèmes en erreur
// exemple: déclenche une erreur si déclaration de variable sans mot-clé

// première instruction, utilisation de la console
console.log('le fichier est chargé');

//deuxième instruction : expression
// opération d'affection
// déclaration de variable à gauche
// expression arithmétique à droite
// variable = 1 donnée stockée en mémoire + 1 symbole + 1 type de données
// type de données définit: la manière dont la valeur est stockée + les opérations possibles
// 2 sortes de types de données:
//  - primitifs: stocke directement la valeur:
//      * numeric = "float"
//      * string
//      * bool = boolean (true / false)
//      * null = 1 seule valeur = null
//      * undefined = le symbol est reconnu, mais la variable n'a jamais été initialisé

let somme = 3 + 4;
console.log(somme);

let variable2;
console.log(variable2); // undefined

// console.log(variable3); // reference error

//  - référence: gère une "adresse mémoire" qui peut avoir plusieurs propriétés
//      * permet de stocker plusieurs valeurs (tableau, liste, objet...)
//      * passage "par référence" (pas de copie des données par défaut)

let somme2 = somme; // la donnée primitive de somme est recopiée dans somme2
somme2 = 34; // la donnée de somme2 est changée, pas celle de somme

let tableau1 = ['ananas', 'banane', 'cerise']; // déclaration d'un tableau = reference
let tableau2 = tableau1; // partage la référence de tableau1 avec tableau2
tableau2.push('datte'); // ajout d'un élément en fin de tableau
console.log(tableau1);

// La portée des variables
// par défaut "scope" global
// déclaration d'un bloc => création d'un "scope" local
// accès possible au variables des scopes parents
{
    let somme = 12; // masque la variable somme du "scope" parent
    let variableInterne = 'bonjour';
    console.log(somme); // 12
    console.log(somme2); // accès à la variable du scope parent
    console.log(variableInterne); // accès à la variable du scope courrant
}
console.log(somme); // 7
// console.log(variableInterne); // Reference error

// déclaration de variable: 4 façons
//  - sans mot-clé : équivalent à var si la variable n'existe pas encore
//      non-disponible en mode "strict"
//  - avec "var" : mot-clé historique, portée de fonction, pratiquement plus utilisé
//  - avec "let" : idem que var, mais portée de bloc
//  - avec "const" : idem que let, mais ne peut être réaffecté
// utilisation en générale 90% const, 10% let, les autres quasi jamais

/********************************
 * structure de contrôle
 * 
 * Principe: contrôler l'exécution (ou non) de certaines instructions
 ********************************/

/********************************
 * Structure conditionnelle
 ********************************/
if (12 > somme) { // évalue une expression booléenne
    // si VRAI : exécution du bloc suivant
    console.log('La somme est inférieure à 12');
}

if (12 > somme) { // évalue une expression booléenne
    // si VRAI : exécution du bloc suivant
    console.log('La somme est inférieure à 12');
}
else {
    // possibilité d'avoir un "sinon"
    console.log('La somme est supérieure ou égale à 12');
    if (25 > somme) {

    }
}

if (12 > somme) { // évalue une expression booléenne
    // si VRAI : exécution du bloc suivant
    console.log('La somme est inférieure à 12');
}
else if (25 > somme) {
     // si juste le if à l'intérieur du else
}

// peu utilisé car:
//  - ne fonctionne qu'avec une correspondance exacte
//  - uniquement sur des données primitives
//  - nécessite de changer le code source si une valeur supplémentaire à gérer
switch(somme) {
    case 25: // case = condition pour démarrer l'exécuion des instructions
        console.log('la somme vaut 25');
        break; // on "force" la sortie du bloc avec "break"
    case 12:
    case 32:
        console.log('la somme vaut 12 ou 32');
    case 11:
        console.log('la somme vaut 12 ou 32 ou 11');
        break;
    default:
        console.log('la somme vaut tout 25, 12, 32 et 11');
}


