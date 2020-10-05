'use strict';

const button = document.querySelector('button');
const p = document.querySelector('p');

button.addEventListener('click', function(){
    p.hidden = !p.hidden;
    if (p.hidden) {
        button.textContent = 'Afficher'
        button.classList.add('closed');
    } else {
        button.textContent = 'Masquer'
        button.classList.remove('closed');
    }
});

// Accès au contenu d'un élement
//  - innerHTML : le contenu est interprété en tant que code HTML
//  - innerText : le contenu est géré comme du texte simple
//      en lecture, filtre sur uniquement le texte affichable (exclut par exemple le style)
//      en écriture, échape les caractères HTML ("<", ">", """, "&")
//  - textContent : tout le contenu textuel (incluant style et script)

// Changement de style
//  - de façon basique via la propriété style
//      les noms de propriété CSS sont tranformés de kebab-case en camelCase
//  - de façon plus élégante en modifiant les classes
//      propriété className = valeur en chaîne de caractère de l'attribut HTML class
//      propriété classList = valeur en liste des différentes classes


/*
const button2 = document.querySelector('button');
const p2 = document.querySelector('p');
p2.dataset.display = p2.style.display;

button2.addEventListener('click', function(){
    if ('none' === p.style.display) {
        p.style.display = p.dataset.display;
    } else {
        p.style.display = 'none';
    }
});
*/