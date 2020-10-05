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
