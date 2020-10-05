'use strict';

// DOM
// Document Object Model

// aller chercher un élément du DOM
const article = document.getElementById('article-1234');
// modifier le DOM
// accès aux propriétés via "."
article.style.color = 'blue';

// aller chercher un élément du DOM à partir de l'article
// via un sélecteur
const paragraphes = article.querySelectorAll('p');

for (const paragraphe of paragraphes) {
    paragraphe.style.color = 'green';
}

